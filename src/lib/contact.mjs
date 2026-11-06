/** Transport is injectable so tests never send real messages. */
export async function sendContact(
  endpoint,
  data,
  { request = globalThis.fetch, timeout = 15000 } = {},
) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await request(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok)
      return {
        ok: false,
        reason: response.status === 429 ? "rate-limit" : "server",
      };
    // A 2xx HTML error/redirect page must never look like a successful enquiry.
    const payload = await response.json();
    const accepted =
      payload?.ok === true ||
      (typeof payload?.id === "string" &&
        payload?.data &&
        typeof payload.data === "object");
    if (!accepted || payload.errors || payload.ok === false)
      return { ok: false, reason: "server" };
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      reason: error?.name === "AbortError" ? "timeout" : "network",
    };
  } finally {
    clearTimeout(timer);
  }
}
