# AI Video Skills for GPT image 2 and Seedance 2

Reusable Codex skills for storyboard-driven video prompting, Seedance workflows, and cinematic previs.

This repository packages two practical skills for AI-native video creation:

- turn an idea into a `storyboard -> video prompt` pipeline
- turn emotional motion ideas into structured cinematic previs output

## Why This Repo Exists

A lot of video prompting breaks down in one of two ways:

1. the prompt is too vague, so the model invents its own pacing and shot order
2. the prompt is too specific, but not structured enough to be reused

These skills try to solve that by turning video ideation into reusable systems instead of one-off prompt blobs.

## Included Skills

### `storyboard-to-seedance-video`

Path:

- [skills/storyboard-to-seedance-video/SKILL.md](./skills/storyboard-to-seedance-video/SKILL.md)

Use this when you want a two-stage workflow:

1. generate a `GPT Image 2` storyboard prompt
2. generate a `Seedance 2.0` video prompt that executes the storyboard

It also includes:

- prompt templates
- prompt filling guide
- output format reference
- X/Twitter promo post format
- X/Twitter promo post generation guide
- a concrete kung fu example as a reference case
- built-in example usage patterns in the skill file

Best for:

- action videos
- branded motion concepts
- creator workflows that need storyboard-first control
- repeatable `image reference + storyboard reference + video prompt` pipelines

Example usage:

- see [storyboard-to-seedance-video/SKILL.md](./skills/storyboard-to-seedance-video/SKILL.md#example-usage)

### `romantic-ink-cinema-previs`

Path:

- [skills/romantic-ink-cinema-previs/SKILL.md](./skills/romantic-ink-cinema-previs/SKILL.md)

Use this when the goal is not literal plot description, but emotional motion design.

It helps convert relationship feeling into:

- camera choreography
- body rhythm
- energy interaction
- spatial tension
- negative-space pacing

Best for:

- romantic motion prompts
- poetic image-to-video concepts
- shot-by-shot emotional beat breakdowns
- stylized previs with ink light, halos, drifting particles, or soft energy systems

Example usage:

- see [romantic-ink-cinema-previs/SKILL.md](./skills/romantic-ink-cinema-previs/SKILL.md#example-usage)

## Repository Structure

```text
ai-video-skills/
├── README.md
├── .gitignore
└── skills/
    ├── romantic-ink-cinema-previs/
    │   ├── SKILL.md
    │   ├── agents/
    │   └── references/
    └── storyboard-to-seedance-video/
        ├── SKILL.md
        ├── agents/
        └── references/
```

## Install

### Install with npx

After this package is published to npm, install with the package name directly.

Install all bundled skills into Codex:

```bash
npx agi-ruby-ai-video-skills install --target codex
```

Install all bundled skills into Claude Code:

```bash
npx agi-ruby-ai-video-skills install --target cc
```

Install only one skill:

```bash
npx agi-ruby-ai-video-skills install --target codex --skill storyboard-to-seedance-video
```

Overwrite an existing installation:

```bash
npx agi-ruby-ai-video-skills install --target codex --force
```

### Install from GitHub before npm publish

If the package has not been published yet, you can still run it straight from GitHub:

```bash
npx "github:AGI-Ruby/ai-GPT_Image2-Seedance_2.0-video-skills" install --target codex
```

### Manual install

If you prefer, you can still copy one or both skill folders into your local Codex-compatible skills directory.

Common locations:

- `~/.agents/skills/`
- `~/.codex/skills/`
- `~/.claude/skills/`

Example:

```bash
cp -R "./skills/storyboard-to-seedance-video" "~/.agents/skills/"
cp -R "./skills/romantic-ink-cinema-previs" "~/.agents/skills/"
```

## How To Use

After installation, call the skill by name in your prompt.

Example prompts:

```text
Use storyboard-to-seedance-video.
I have a character image, a rough action concept, and a desired ending frame.
Generate:
1. a GPT Image 2 storyboard prompt
2. a Seedance 2.0 video prompt
3. short workflow notes
```

```text
Use romantic-ink-cinema-previs.
Turn this 12-second emotional scene into a timed cinematic beat breakdown.
Focus on camera choreography, body rhythm, and energy interaction.
```

## Output Style

Depending on the request, these skills can produce:

- reusable prompt templates
- fully written prompts
- beat-by-beat previs structures
- workflow notes
- X/Twitter promo post sets for sharing the result

## Notes

- This repo does not execute video generation APIs by itself.
- It focuses on prompt systems, structure, and reusable creative workflows.
- The bundled examples are references, not fixed defaults.

## Local Development

If you update the repo locally and want to publish changes:

```bash
cd "/Users/sealos/Desktop/ai-video-skills"
npm test
git add .
git commit -m "update skill docs"
git push
```

## Publish To npm

When you are ready to release the package:

```bash
cd "/Users/sealos/Desktop/ai-video-skills"
npm login
npm publish
```

Recommended release flow:

```bash
cd "/Users/sealos/Desktop/ai-video-skills"
npm version patch
git push --follow-tags
npm publish
```

Package name:

- `agi-ruby-ai-video-skills`
