# X Post Generation Guide

Use this file when the user wants promotional posts generated from a brief, script, prompts, storyboard, or final video.

## What Inputs Can Drive the Posts

You can generate posts from any of these:

- a creative brief
- a storyboard prompt
- a Seedance prompt
- a final script
- a storyboard image
- a finished video
- the creator's own notes about what they tested

The best outputs usually combine:

- the creative concept
- the workflow method
- one concrete technical or artistic takeaway

## Default Post Set

When the user says “generate promo posts” and gives no count, default to **3 posts**:

1. final video prompt share
2. storyboard prompt share
3. learning / process reflection post

## Extraction Logic

### From a brief

Extract:

- subject
- scene or environment
- visual style
- escalation or structure
- ending state
- any named movement or style system

Use these to build:

- a clean post title
- a one-line framing sentence
- a prompt-share context line if needed

### From a storyboard prompt

Extract:

- panel count
- action progression
- camera language
- annotation logic
- what makes the storyboard useful

Use these to write the storyboard-share post.

### From a Seedance prompt

Extract:

- character lock logic
- storyboard lock logic
- style block
- environment block
- escalation logic
- ending state

Use these to write the Seedance-share post.

### From a finished video or result notes

Extract:

- what was tested
- what worked visually
- what still feels experimental
- any named systems like `Laban`

Use these to write the maker-note post.

## Writing Rules

- Keep posts compact enough for X readability.
- Prompt-share posts may be longer because the prompt itself is the payload.
- Maker-note posts should read like a human process note.
- Do not oversell. Prefer “testing”, “experimenting”, “trying”, “seems to help”.
- If the creator used a named system, explain it in one short sentence.

## Post Construction Heuristics

### Post 1: Prompt Share

Build from:

- title
- project name
- optional tool attribution
- full Seedance prompt

Use when:

- the prompt itself is valuable to readers
- the final video is strong enough to justify a prompt share

### Post 2: Storyboard Share

Build from:

- title
- one sentence explaining the storyboard role
- full storyboard prompt

Use when:

- the storyboard sheet is visually interesting
- the workflow depends on storyboard-first control

### Post 3: Learning Share

Build from:

- experiment framing
- one insight
- one caution or limitation
- one concise explanation of the framework

Reference pattern:

```text
[Project Name]

Created on [tool / account]

I'm experimenting with [system] right now.
I think it helps [effect], but I still need more tests.

[System] is [one-sentence definition].

You can find the prompts below.
```

This pattern works because it is:

- specific
- modest
- educational
- creator-native

## Media Recommendations

- storyboard-share post -> attach storyboard image
- Seedance prompt-share post -> attach finished video
- maker-note post -> attach finished video, or storyboard + video pair if the point is workflow translation

## Quality Check

Before returning posts, verify:

- each post has a distinct role
- the three posts are not paraphrases of each other
- the maker-note post sounds like a creator, not a marketer
- media suggestions match the post type
