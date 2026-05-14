#!/usr/bin/env node

const {
  DEFAULT_SKILLS,
  installSkills,
  resolveSkillNames,
  resolveTargetDirectory,
} = require("../lib/installer");

function printHelp() {
  console.log(`AI Video Skills Installer

Usage:
  ai-video-skills install [options]
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
  ai-video-skills install --target cc --skill storyboard-to-seedance-video
  ai-video-skills install --dir ~/.codex/skills --force
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

  if (command !== "install") {
    throw new Error(`Unknown command: ${command}`);
  }

  const options = parseArgs(restArgs);
  if (options.help) {
    printHelp();
    return;
  }

  const selectedSkills = resolveSkillNames(options.skill);
  const targetDirectory = resolveTargetDirectory(options.target, options.dir);
  const result = installSkills(options);

  console.log(`Installed ${selectedSkills.length} skill(s) to ${targetDirectory}`);
  for (const entry of result.installed) {
    console.log(`- ${entry.name} -> ${entry.destination}`);
  }
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  console.error("Run 'ai-video-skills help' for usage.");
  process.exitCode = 1;
}
