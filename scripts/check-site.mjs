import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import assert from "node:assert/strict";
const root = resolve("dist");
const files = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? files(join(dir, entry.name))
      : [join(dir, entry.name)],
  );
const htmlFiles = files(root).filter((file) => file.endsWith(".html"));
const cache = new Map(
  htmlFiles.map((path) => [path, readFileSync(path, "utf8")]),
);
let linkChecks = 0;
for (const [path, html] of cache) {
  // Astro's static redirect documents intentionally have no site layout.
  if (/http-equiv="refresh"/i.test(html)) {
    assert.match(html, /url=\/#contact/i, `Known legacy redirect: ${path}`);
    continue;
  }
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One h1: ${path}`);
  assert.match(html, /<html[^>]+lang="(?:de|en)"/, `Language: ${path}`);
  assert.match(
    html,
    /<meta name="description" content="[^"]+"/,
    `Description: ${path}`,
  );
  assert.match(html, /rel="canonical"/, `Canonical: ${path}`);
  assert.match(html, /property="og:image"/, `Social image: ${path}`);
  assert.doesNotMatch(
    html,
    /fonts\.googleapis\.com|fonts\.gstatic\.com/,
    `No remote fonts: ${path}`,
  );
  const pageUrl = new URL(
    path.slice(root.length).replace(/index\.html$/, ""),
    "https://local.test",
  );
  for (const match of html.matchAll(/\b(?:href|src)="([^"<>]+)"/g)) {
    const value = match[1].replace(/&amp;/g, "&");
    if (/^(https?:|mailto:|tel:|data:)/.test(value)) continue;
    const url = new URL(value, pageUrl);
    const target = decodeURIComponent(url.pathname);
    let disk = resolve(root, "." + target);
    if (existsSync(disk) && statSync(disk).isDirectory())
      disk = join(disk, "index.html");
    if (!existsSync(disk) && existsSync(disk + ".html")) disk += ".html";
    assert.ok(existsSync(disk), `Missing local target ${value} in ${path}`);
    if (url.hash && cache.has(disk))
      assert.ok(
        cache
          .get(disk)
          .includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        `Missing anchor ${value} in ${path}`,
      );
    linkChecks++;
  }
}
const posts = readdirSync("src/pages/blog").filter((name) =>
  name.endsWith(".md"),
);
for (const post of posts)
  assert.ok(
    existsSync(join(root, "blog", post.replace(/\.md$/, ""), "index.html")),
    `Preserved blog URL: ${post}`,
  );
for (const locale of ["", "en/"]) {
  const html = readFileSync(join(root, locale, "index.html"), "utf8");
  assert.match(html, /action="https:\/\/formspree\.io\/f\/mbdqjadp"/);
  for (const id of [
    "problem",
    "services",
    "process",
    "portfolio",
    "principles",
    "pricing",
    "faq",
    "contact",
  ])
    assert.ok(html.includes(`id="${id}"`), `Preserved section ${id}`);
  assert.match(html, /name="email"[^>]*required|type="email"[^>]*required/);
}
for (const file of files(join(root, "_astro")).filter((p) => p.endsWith(".js")))
  assert.doesNotMatch(
    readFileSync(file, "utf8"),
    /form-test/,
    "No test transport in production",
  );
assert.ok(
  !existsSync(join(root, "__qa.html")),
  "QA harness must not be shipped",
);
console.log(
  `PASS: ${htmlFiles.length} HTML pages, ${posts.length} preserved blog URLs, ${linkChecks} internal links/assets/anchors, metadata and production form guards.`,
);
