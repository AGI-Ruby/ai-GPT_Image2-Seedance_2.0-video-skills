---
name: storyboard-to-seedance-video
description: Create a two-stage video prompting workflow: first generate a GPT Image 2 storyboard prompt, then generate a Seedance 2.0 video prompt that executes the storyboard. Use when a user has a character reference, style goal, action concept, or shot progression idea and wants a reusable storyboard-to-video pipeline rather than a single fixed prompt.
---

# Storyboard To Seedance Video

## Overview

Use this skill when the user wants to make a video through a two-step pipeline:

1. generate a storyboard prompt for `GPT Image 2`
2. generate a video prompt for `Seedance 2.0`

This skill should not hardcode one subject, genre, or choreography. It should extract a reusable prompt workflow from the user's inputs, while optionally using concrete examples as references.

## What This Skill Produces

Default output includes three parts:

- a `GPT Image 2 Storyboard Prompt`
- a `Seedance 2.0 Video Prompt`
- a short `Workflow Notes` block explaining how the two connect

If the user only wants one stage, provide only that stage.

If the user also wants social promotion, add:

- a `3-post X/Twitter promo set`

## When To Use

Use this skill when the user asks for any of the following:

- “make this into a video skill”
- “turn this into storyboard + video prompts”
- “I have a character image and want a storyboard first, then a video”
- “build a reusable workflow for GPT Image 2 + Seedance”
- “convert my action idea into a storyboard-driven video prompt”

Do not use this skill when the user only wants:

- a single final video prompt with no storyboard phase
- a pure image generation prompt unrelated to video sequencing
- a full production toolchain with actual API execution

## Core Principle

This is a **two-stage control system**:

- `Reference A` locks character identity
- `Reference B` locks shot order and visual progression

The storyboard prompt creates a clear sequential visual plan.  
The video prompt then treats that storyboard as a keyframe chain and translates it into continuous motion.

The model's job is not to freely invent the whole piece. It must respect:

- character consistency
- shot order
- movement escalation
- ending state
- effect discipline

## Stage 1: Storyboard Prompt

The storyboard prompt is for building a **shot logic sheet**, not the final video.

It should define:

- panel count
- frame ratio
- visual roughness level
- action progression
- camera language
- annotation rules
- environment economy
- escalation logic

It should help the image model produce a sheet where every panel behaves like a keyframe for later video translation.

When writing this prompt:

- leave topic-specific content open for the user to supply
- preserve placeholders for character type, setting, choreography style, and ending beat
- keep the example separate from the generic template

## Stage 2: Seedance Video Prompt

The video prompt executes the storyboard.

It should explicitly define:

- `@[image1]` as the character sheet or fixed character reference
- `@[image2]` as the storyboard reference
- the storyboard as the main source for shot order, framing, body movement, movement direction, camera rhythm, and visual progression
- the end-state requirement
- negative constraints
- style system
- environment system
- action progression
- effect progression
- movement logic if provided by the user

The video prompt should feel like:

- “translate this storyboard into continuous live-action or animated motion”

not:

- “invent a brand new scene loosely inspired by it”

## Prompt-Building Workflow

### Step 1: Gather the minimum creative inputs

If the user has not already provided them, determine:

- character reference role
- subject / genre
- environment
- choreography or motion type
- escalation pattern
- final image or ending state
- preferred realism / stylization level

If the user gives only a rough idea, keep the template open instead of overcommitting to specifics.

### Step 2: Build the storyboard prompt first

Write the storyboard prompt so it can stand alone.

It should define:

- number of panels
- rough drawing style
- motion-first composition
- action progression
- VFX annotation strategy
- camera behavior

The storyboard prompt must create a planning artifact that a video model can later follow.

### Step 3: Build the Seedance prompt second

Write the Seedance prompt as an execution layer over the storyboard.

It must:

- preserve the storyboard order
- preserve character identity
- preserve the escalation arc
- keep the effects grounded in movement and environment

### Step 4: Connect the two

Add a short usage note:

- first generate the storyboard image
- then feed character reference + storyboard image into Seedance

## Output Format

Use this default structure unless the user requests another:

See [references/output-format.md](references/output-format.md).

For X/Twitter post output, use:

See [references/x-post-format.md](references/x-post-format.md).

## Generic Prompt Templates

Use the reusable templates here:

- [references/storyboard-template.md](references/storyboard-template.md)
- [references/seedance-template.md](references/seedance-template.md)
- [references/prompt-fill-guide.md](references/prompt-fill-guide.md)
- [references/x-post-format.md](references/x-post-format.md)
- [references/x-post-generation-guide.md](references/x-post-generation-guide.md)

## Example Usage

### Example 1: Character Reference + Action Concept

```text
Use storyboard-to-seedance-video.

I have:
- a fixed character reference image
- a rough action idea
- a final airborne ending pose

Generate:
1. a GPT Image 2 storyboard prompt
2. a Seedance 2.0 video prompt
3. short workflow notes explaining how to use them together
```

### Example 2: Brand Motion Concept

```text
Use storyboard-to-seedance-video.

Turn this product launch idea into a storyboard-first video workflow.
The tone should feel premium, cinematic, and controlled.
Leave placeholders open where I have not defined exact shots yet.
Also include negative constraints so the final video does not drift into generic ad visuals.
```

### Example 3: Prompt Share + Social Output

```text
Use storyboard-to-seedance-video.

I already have:
- a brief
- a storyboard prompt
- a Seedance prompt
- a final video

Generate a 3-post X/Twitter promo set:
1. prompt-share post for the final video
2. storyboard-share post
3. maker-note post about what was tested and learned
```

## Example Case

The kung fu performance prompt from this conversation should be treated as an **example case**, not the only supported use.

Use it as a reference for:

- how to lock character and storyboard separately
- how to escalate action shot by shot
- how to define effect progression
- how to end on a controlled final state

See [references/kung-fu-example.md](references/kung-fu-example.md).

## Writing Rules

- Do not hardcode the example subject into the generic template.
- Keep reusable slots for character, environment, motion style, and climax image.
- Use direct, operational language rather than vague aesthetic praise.
- Make negative constraints explicit.
- Keep storyboard prompt and video prompt clearly separated.
- When the user provides a storyboard image, the Seedance prompt should treat it as a sequential keyframe source, not as a single static composition.

## X/Twitter Extension

If the user wants launch posts, promo posts, prompt-share posts, or “发推格式”, generate a three-post set by default:

1. a Seedance prompt-share post
2. a storyboard prompt-share post
3. a maker-note / learning post

Build these from the workflow artifacts:

- brief -> framing and project name
- storyboard prompt -> post 2
- Seedance prompt -> post 1
- process notes / final result -> post 3

Use:

- [references/x-post-format.md](references/x-post-format.md) for the output structure
- [references/x-post-generation-guide.md](references/x-post-generation-guide.md) for how to derive posts from brief, script, prompt, storyboard, and final video

## Acceptance Criteria

Treat the skill as passing only when all of the following are true:

- it can generate both a storyboard prompt and a matching Seedance video prompt
- the generic workflow is reusable beyond the kung fu example
- character-lock and storyboard-lock are clearly separated
- the storyboard prompt defines shot progression rather than only style
- the video prompt clearly instructs Seedance to execute the storyboard sequentially
- negative constraints are explicit and practical
- the example remains an example, not a hardcoded default subject
- if social posts are requested, the skill can generate three distinct X posts with different roles rather than three near-duplicates
