import { readFileSync } from "node:fs";
const source = readFileSync("src/config/brand.ts", "utf8");
const issues = [];
if (/provider:\s*['"]['"]/.test(source))
  issues.push("Actual legal provider name is missing.");
if (/address:\s*\[\]/.test(source))
  issues.push("Serviceable legal address is missing.");
if (!/reviewed:\s*true/.test(source))
  issues.push("Legal texts and processor arrangements have not been reviewed.");
if (issues.length) {
  console.error(
    "NOT READY FOR PRODUCTION:\n" + issues.map((s) => "- " + s).join("\n"),
  );
  process.exitCode = 1;
} else
  console.log(
    "Legal configuration completed. Review docs/release-notes.md before publishing.",
  );
