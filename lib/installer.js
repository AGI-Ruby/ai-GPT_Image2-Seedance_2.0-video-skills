const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const DEFAULT_SKILLS = [
  "storyboard-to-seedance-video",
  "romantic-ink-cinema-previs",
];

const TARGET_DIRECTORIES = {
  codex: path.join(os.homedir(), ".codex", "skills"),
  cc: path.join(os.homedir(), ".claude", "skills"),
  "claude-code": path.join(os.homedir(), ".claude", "skills"),
  agents: path.join(os.homedir(), ".agents", "skills"),
};

function resolveTargetDirectory(target = "codex", overrideDir) {
  if (overrideDir) {
    return path.resolve(overrideDir);
  }

  const normalizedTarget = String(target).trim().toLowerCase();
  const targetDirectory = TARGET_DIRECTORIES[normalizedTarget];
  if (!targetDirectory) {
    throw new Error(
      `Unsupported target '${target}'. Use codex, cc, claude-code, or agents.`,
    );
  }

  return targetDirectory;
}

function resolveSkillNames(skillSelection = "all") {
  const normalizedSelection = String(skillSelection).trim();
  if (!normalizedSelection || normalizedSelection === "all") {
    return [...DEFAULT_SKILLS];
  }

  const names = normalizedSelection
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (names.length === 0) {
    throw new Error("No skill names were provided.");
  }

  for (const name of names) {
    if (!DEFAULT_SKILLS.includes(name)) {
      throw new Error(
        `Unknown skill '${name}'. Available skills: ${DEFAULT_SKILLS.join(", ")}`,
      );
    }
  }

  return names;
}

function ensureDirectoryExists(directory) {
  fs.mkdirSync(directory, { recursive: true });
}

function copySkillDirectory(sourceDirectory, destinationDirectory, force) {
  if (fs.existsSync(destinationDirectory)) {
    if (!force) {
      throw new Error(
        `Destination already exists: ${destinationDirectory}. Re-run with --force to overwrite.`,
      );
    }
    fs.rmSync(destinationDirectory, { recursive: true, force: true });
  }

  fs.cpSync(sourceDirectory, destinationDirectory, { recursive: true });
}

function installSkills(options = {}) {
  const repoRoot = path.resolve(__dirname, "..");
  const sourceRoot = path.join(repoRoot, "skills");
  const targetDirectory = resolveTargetDirectory(options.target, options.dir);
  const skillNames = resolveSkillNames(options.skill);
  const force = Boolean(options.force);

  ensureDirectoryExists(targetDirectory);

  const installed = [];
  for (const skillName of skillNames) {
    const sourceDirectory = path.join(sourceRoot, skillName);
    const destinationDirectory = path.join(targetDirectory, skillName);

    if (!fs.existsSync(sourceDirectory)) {
      throw new Error(`Skill source directory not found: ${sourceDirectory}`);
    }

    copySkillDirectory(sourceDirectory, destinationDirectory, force);
    installed.push({
      name: skillName,
      destination: destinationDirectory,
    });
  }

  return {
    installed,
    targetDirectory,
  };
}

function upgradeSkills(options = {}) {
  return installSkills({
    ...options,
    force: true,
  });
}

function uninstallSkills(options = {}) {
  const targetDirectory = resolveTargetDirectory(options.target, options.dir);
  const skillNames = resolveSkillNames(options.skill);

  const removed = [];
  const skipped = [];

  for (const skillName of skillNames) {
    const destinationDirectory = path.join(targetDirectory, skillName);
    if (!fs.existsSync(destinationDirectory)) {
      skipped.push({
        name: skillName,
        destination: destinationDirectory,
      });
      continue;
    }

    fs.rmSync(destinationDirectory, { recursive: true, force: true });
    removed.push({
      name: skillName,
      destination: destinationDirectory,
    });
  }

  return {
    removed,
    skipped,
    targetDirectory,
  };
}

function doctorSkills(options = {}) {
  const targetDirectory = resolveTargetDirectory(options.target, options.dir);
  const skillNames = resolveSkillNames(options.skill);
  const targetExists = fs.existsSync(targetDirectory);

  const skills = skillNames.map((skillName) => {
    const destinationDirectory = path.join(targetDirectory, skillName);
    const skillFile = path.join(destinationDirectory, "SKILL.md");
    return {
      name: skillName,
      destination: destinationDirectory,
      installed: fs.existsSync(destinationDirectory),
      skillFileExists: fs.existsSync(skillFile),
    };
  });

  return {
    targetDirectory,
    targetExists,
    skills,
  };
}

module.exports = {
  DEFAULT_SKILLS,
  TARGET_DIRECTORIES,
  doctorSkills,
  installSkills,
  resolveSkillNames,
  resolveTargetDirectory,
  upgradeSkills,
  uninstallSkills,
};
