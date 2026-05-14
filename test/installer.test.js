const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");
const assert = require("node:assert/strict");

const {
  DEFAULT_SKILLS,
  installSkills,
  resolveSkillNames,
  resolveTargetDirectory,
} = require("../lib/installer");

test("resolveSkillNames returns all skills by default", () => {
  assert.deepEqual(resolveSkillNames(), DEFAULT_SKILLS);
});

test("resolveTargetDirectory resolves Claude Code alias", () => {
  const expected = path.join(os.homedir(), ".claude", "skills");
  assert.equal(resolveTargetDirectory("cc"), expected);
});

test("installSkills copies requested skill into target directory", () => {
  const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "ai-video-skills-"));

  const result = installSkills({
    target: "codex",
    dir: tempDirectory,
    skill: "storyboard-to-seedance-video",
    force: false,
  });

  const skillDirectory = path.join(tempDirectory, "storyboard-to-seedance-video");
  const skillFile = path.join(skillDirectory, "SKILL.md");
  const referencesDirectory = path.join(skillDirectory, "references");

  assert.equal(result.installed.length, 1);
  assert.ok(fs.existsSync(skillFile));
  assert.ok(fs.existsSync(referencesDirectory));
});

test("installSkills requires --force before overwrite", () => {
  const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "ai-video-skills-"));

  installSkills({
    target: "codex",
    dir: tempDirectory,
    skill: "romantic-ink-cinema-previs",
  });

  assert.throws(
    () =>
      installSkills({
        target: "codex",
        dir: tempDirectory,
        skill: "romantic-ink-cinema-previs",
      }),
    /--force/,
  );
});
