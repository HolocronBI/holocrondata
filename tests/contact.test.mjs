import { test } from "node:test";
import assert from "node:assert/strict";
import { sendContact } from "../src/lib/contact.mjs";
const endpoint = "https://example.invalid/form";
const data = new FormData();
data.set("email", "qa@example.invalid");
test("sends the form once and accepts the Formspree JSON response", async () => {
  let calls = 0;
  const result = await sendContact(endpoint, data, {
    request: async (url, options) => {
      calls++;
      assert.equal(url, endpoint);
      assert.equal(options.method, "POST");
      assert.equal(options.body, data);
      assert.equal(options.headers.Accept, "application/json");
      assert.ok(options.signal instanceof AbortSignal);
      return new Response(JSON.stringify({ ok: true, next: "/thanks" }), {
        status: 200,
      });
    },
  });
  assert.deepEqual(result, { ok: true });
  assert.equal(calls, 1);
});
for (const status of [400, 422, 500])
  test(`reports HTTP ${status} without a false success`, async () => {
    assert.deepEqual(
      await sendContact(endpoint, data, {
        request: async () => new Response("{}", { status }),
      }),
      { ok: false, reason: "server" },
    );
  });
test("recognises throttling", async () => {
  assert.equal(
    (
      await sendContact(endpoint, data, {
        request: async () => new Response("{}", { status: 429 }),
      })
    ).reason,
    "rate-limit",
  );
});
test("an HTML or unsuccessful JSON response is not a successful enquiry", async () => {
  for (const body of ["<html>Error</html>", '{"ok":false}'])
    assert.equal(
      (
        await sendContact(endpoint, data, {
          request: async () => new Response(body),
        })
      ).ok,
      false,
    );
});
test("network failure is returned to the caller", async () => {
  assert.deepEqual(
    await sendContact(endpoint, data, {
      request: async () => {
        throw new TypeError("offline");
      },
    }),
    { ok: false, reason: "network" },
  );
});
test("aborts a stalled request and reports an ambiguous timeout", async () => {
  let aborted = false;
  const result = await sendContact(endpoint, data, {
    timeout: 5,
    request: (_url, { signal }) =>
      new Promise((_resolve, reject) => {
        signal.addEventListener("abort", () => {
          aborted = true;
          reject(new DOMException("Aborted", "AbortError"));
        });
      }),
  });
  assert.equal(aborted, true);
  assert.deepEqual(result, { ok: false, reason: "timeout" });
});

test("accepts the documented id/data success response", async () => {
  assert.deepEqual(
    await sendContact(endpoint, data, {
      request: async () =>
        new Response(JSON.stringify({ id: "test-submission", data: {} })),
    }),
    { ok: true },
  );
});
test("does not accept an error envelope even when marked ok", async () => {
  assert.equal(
    (
      await sendContact(endpoint, data, {
        request: async () =>
          new Response(
            JSON.stringify({ ok: true, errors: [{ message: "blocked" }] }),
          ),
      })
    ).ok,
    false,
  );
});
