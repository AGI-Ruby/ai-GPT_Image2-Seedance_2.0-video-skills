# AI Video Skills

Reusable Codex skills for video prompting, storyboard-driven generation, and cinematic previs workflows.

## Included Skills

### `storyboard-to-seedance-video`

Builds a two-stage workflow:

1. generate a `GPT Image 2` storyboard prompt
2. generate a `Seedance 2.0` video prompt

Also includes:

- output format references
- prompt filling guide
- X/Twitter promo post format
- X/Twitter promo post generation guide

Path:

- `skills/storyboard-to-seedance-video/`

### `romantic-ink-cinema-previs`

Turns emotional beats into structured cinematic previs output built from:

- camera choreography
- body rhythm
- energy interaction
- spatial tension
- negative-space pacing

Path:

- `skills/romantic-ink-cinema-previs/`

## Repository Structure

```text
ai-video-skills/
├── README.md
├── .gitignore
└── skills/
    ├── romantic-ink-cinema-previs/
    └── storyboard-to-seedance-video/
```

## Use In Codex

Copy a skill directory into your local skills folder, for example:

- `~/.agents/skills/`
- `~/.codex/skills/`

Then reference the skill by name in your prompt.

## Push To GitHub

If this repository is already initialized locally, run:

```bash
cd "/Users/sealos/Desktop/ai-video-skills"
git remote add origin https://github.com/<your-username>/ai-video-skills.git
git branch -M main
git push -u origin main
```

If the remote already exists:

```bash
cd "/Users/sealos/Desktop/ai-video-skills"
git branch -M main
git push -u origin main
```
