const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const mainJs = fs.readFileSync(path.join(root, "main.js"), "utf8");
const submitJs = fs.readFileSync(path.join(root, "api", "submit.js"), "utf8");
const sql = fs.readFileSync(path.join(root, "sql", "001_enrollment_submissions.sql"), "utf8");
const migration = fs.readFileSync(
  path.join(root, "sql", "002_replace_residence_with_researcher_classification.sql"),
  "utf8",
);
const requiredMigration = fs.readFileSync(
  path.join(root, "sql", "003_enforce_required_fields.sql"),
  "utf8",
);
const formConfig = fs.readFileSync(path.join(root, "form-config.js"), "utf8");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");

assert.ok(indexHtml.includes('id="researcherClassification"'));
assert.ok(indexHtml.includes('id="otherResearchOrganization"'));
assert.ok(indexHtml.includes('value="Más organismos"'));
assert.ok(mainJs.includes("RESEARCHER_CLASSIFICATION_VALUES"));
assert.ok(mainJs.includes("updateOtherResearchOrganizationVisibility"));
assert.ok(submitJs.includes("enrollment_submissions_iyc"));
assert.ok(submitJs.includes("researcher_classification"));
assert.ok(submitJs.includes("other_research_organization"));
assert.ok(sql.includes("public.enrollment_submissions_iyc"));
assert.ok(sql.includes("researcher_classification text not null"));
assert.ok(sql.includes("other_research_organization text null"));
assert.ok(migration.includes("drop column if exists place_of_belonging"));
assert.ok(requiredMigration.includes("alter column researcher_classification set not null"));
assert.ok(requiredMigration.includes("academic_unit_id = 'otra-unidad-academica'"));
assert.ok(formConfig.includes('startsAt: "2026-08-05T00:00:00-03:00"'));
assert.ok(formConfig.includes('expiresAt: "2026-08-15T23:59:59-03:00"'));
assert.ok(mainJs.includes('getFormAvailability'));
assert.ok(submitJs.includes('getFormAvailability'));
assert.match(readme, /researcher_classification/i);

console.log("Local verification passed.");
