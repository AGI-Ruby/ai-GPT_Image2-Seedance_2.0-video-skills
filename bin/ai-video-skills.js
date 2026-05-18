#!/usr/bin/env node

const {
  DEFAULT_SKILLS,
  doctorSkills,
  installSkills,
  uninstallSkills,
  upgradeSkills,
  resolveSkillNames,
  resolveTargetDirectory,
} = require("../lib/installer");

function printHelp() {
  console.log(`AI Video Skills Installer

Usage:
  ai-video-skills install [options]
  ai-video-skills upgrade [options]
  ai-video-skills uninstall [options]
  ai-video-skills doctor [options]
  ai-video-skills list
  ai-video-skills help

Options:
  --target <codex|cc|claude-code|agents>  Install target. Default: codex
  --skill <name|all>                      Skill name or comma-separated names
  --dir <absolute-or-relative-path>       Override install directory
  --force                                 Overwrite existing skill directories
  -h, --help                              Show help

Examples:
  ai-video-skills install --target codex
  ai-video-skills upgrade --target codex
  ai-video-skills upgrade --target cc --skill storyboard-to-seedance-video
  ai-video-skills install --target cc --skill storyboard-to-seedance-video
  ai-video-skills install --dir ~/.codex/skills --force
  ai-video-skills uninstall --target codex --skill romantic-ink-cinema-previs
  ai-video-skills doctor --target codex
`);
}

function printList() {
  console.log("Available skills:");
  for (const skill of DEFAULT_SKILLS) {
    console.log(`- ${skill}`);
  }
}

function parseArgs(argv) {
  const options = {
    target: "codex",
    skill: "all",
    force: false,
    dir: undefined,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--force") {
      options.force = true;
      continue;
    }
    if (arg === "--target") {
      options.target = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--skill") {
      options.skill = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--dir") {
      options.dir = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "-h" || arg === "--help") {
      options.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function main() {
  const [command = "help", ...restArgs] = process.argv.slice(2);

  if (command === "help" || command === "-h" || command === "--help") {
    printHelp();
    return;
  }

  if (command === "list") {
    printList();
    return;
  }

  if (!["install", "upgrade", "uninstall", "doctor"].includes(command)) {
    throw new Error(`Unknown command: ${command}`);
  }

  const options = parseArgs(restArgs);
  if (options.help) {
    printHelp();
    return;
  }

  const selectedSkills = resolveSkillNames(options.skill);
  const targetDirectory = resolveTargetDirectory(options.target, options.dir);

  if (command === "install") {
    const result = installSkills(options);
    console.log(`Installed ${selectedSkills.length} skill(s) to ${targetDirectory}`);
    for (const entry of result.installed) {
      console.log(`- ${entry.name} -> ${entry.destination}`);
    }
    return;
  }

  if (command === "upgrade") {
    const result = upgradeSkills(options);
    console.log(`Upgraded ${selectedSkills.length} skill(s) in ${targetDirectory}`);
    for (const entry of result.installed) {
      console.log(`- ${entry.name} -> ${entry.destination}`);
    }
    return;
  }

  if (command === "uninstall") {
    const result = uninstallSkills(options);
    console.log(`Uninstalled ${result.removed.length} skill(s) from ${targetDirectory}`);
    for (const entry of result.removed) {
      console.log(`- ${entry.name} -> ${entry.destination}`);
    }
    for (const entry of result.skipped) {
      console.log(`- ${entry.name} -> not installed`);
    }
    return;
  }

  const report = doctorSkills(options);
  console.log(`Doctor report for ${targetDirectory}`);
  console.log(`- target exists: ${report.targetExists ? "yes" : "no"}`);
  for (const skill of report.skills) {
    console.log(
      `- ${skill.name}: ${skill.installed ? "installed" : "missing"}${
        skill.skillFileExists ? " (SKILL.md found)" : ""
      }`,
    );
  }
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  console.error("Run 'ai-video-skills help' for usage.");
  process.exitCode = 1;
}
