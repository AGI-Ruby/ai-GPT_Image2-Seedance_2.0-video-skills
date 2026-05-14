# Prompt Fill Guide

Use this file when the user has a rough creative brief but not a finished prompt. It explains how to map user input into the two-stage workflow.

## Filling Strategy

There are three levels of input quality:

1. **Complete brief**
   The user already provides character, environment, movement type, escalation, and ending state. Fill the templates directly.
2. **Partial brief**
   The user provides only some of the above. Keep unprovided slots generic or infer only the safest defaults.
3. **Reference-driven brief**
   The user gives images or a reference storyboard. Use those as anchors and avoid inventing conflicting details.

## Stage 1: Storyboard Prompt Fields

### `[ASPECT RATIO]`

- Default: `16:9`
- Use another value only if the user explicitly wants vertical, square, or another storyboard format.

### `[PANEL COUNT]`

- Default: `12`
- Use `8` to `16` depending on complexity.
- More escalation-heavy action ideas usually benefit from `12`.

### `[DRAWING STYLE]`

Describe the board as a planning artifact, not a polished illustration.

Good fills:

- black and white rough pencil storyboard
- loose graphite gesture drawing
- raw previs sketch with strong silhouette readability

Avoid:

- polished comic art
- painterly concept art
- fully rendered character illustration

### `[ROUGHNESS / DETAIL LEVEL]`

Examples:

- lightweight and unfinished like early fight choreography previs
- rough and kinetic with minimal detail
- fast sketch energy with simple anatomy construction

### `[CHARACTER TYPE]`

Fill with role plus performance identity, not long backstory.

Examples:

- a solitary female ritual warrior
- a masked male swordsman
- a young monk-like performer

### `[CHOREOGRAPHY OR MOTION TYPE]`

Fill with the movement system or action mode.

Examples:

- explosive kung fu performance
- ritual spear choreography
- weightless ribbon dance with martial structure
- beast-like close-quarters movement study

### `[ENVIRONMENT]`

Fill with the core scene container in one compact phrase.

Examples:

- a vast ancient temple
- a flooded industrial hall
- a moonlit rooftop shrine

### `[PRIMARY MOTION QUALITIES]`

Use 4–8 qualities that define body behavior.

Examples:

- aggressive, ritualistic, disciplined, physically extreme
- elastic, predatory, low to the ground, explosive

### `Action progression`

This is the most important section.

Rules:

- every panel must advance motion or pressure
- start directly in action unless the user explicitly asks otherwise
- end on a clearly specified image state
- use short operational lines, not prose paragraphs

Good pattern:

1. opening already in motion
2. closer action detail
3. spatial expansion
4. impact beat
5. directional contrast
6. complexity increase
7. environment reaction
8. recovery or low-plane shift
9. density burst
10. pre-climax compression
11. climax build
12. final suspended or released state

### `[ELEMENT / VFX TYPE]`

Only fill if the concept requires non-neutral environmental reaction.

Examples:

- elemental energy
- dust and shockwave accents
- spiritual ink halos
- electrical fracture trails

### `[EFFECT DISCIPLINE]`

This tells the model what kind of effects are allowed.

Examples:

- spiritual, ritualistic and cinematic, not superhero-like
- grounded in the environment and driven by motion
- atmospheric and physical rather than magical neon glow

### `[CAMERA LANGUAGE LIST]`

Use 5–10 items, not a paragraph.

Examples:

- handheld energy
- whip-pan feeling
- orbiting camera moves
- overhead shots
- extreme low angles
- long-lens compression

### `[ENVIRONMENT DETAILS]`

Use sparse atmospheric features, not a full set description.

Examples:

- towering stone columns
- drifting incense smoke
- harsh light shafts
- subtle wet floor reflections

## Stage 2: Seedance Prompt Fields

### `[DURATION]`

- Default: `15`
- Keep within Seedance limits
- Use `10–15` for storyboard-driven sequences unless the user explicitly wants shorter output

### `[GENRE / SUBJECT]`

Fill with the simplest accurate label.

Examples:

- kung fu performance
- ritual sword solo
- romantic ink-cinema sequence

### `[ENDING STATE]`

This must be precise. It is one of the strongest control fields.

Examples:

- a frozen final frame while the performer is still airborne
- a suspended close embrace before contact
- a final wide shot after the energy burst dissipates

### `[NEGATIVE OPENING RULE]`

Use this to prevent a weak intro.

Examples:

- begin with a calm stance, preparation pose or slow introduction
- open on a static walk cycle or neutral idle pose

### `[VFX TYPE]`

Keep this consistent with stage 1.

Examples:

- elemental effects
- spiritual ink light
- dust and fire accents

### `[UNWANTED EFFECT STYLE]`

This prevents the model from drifting into the wrong visual genre.

Examples:

- like superhero powers or excessive fantasy glow
- like game UI magic attacks
- like bright anime aura effects

### `[VISUAL STYLE BLOCK]`

This is the quality and rendering block. Use a compact stack of style descriptors.

Examples:

- stylized cinematic realism
- high-end 3D painterly animation quality
- dramatic scale
- natural motion blur
- premium feature-animation aesthetic

### `[ENVIRONMENT BLOCK]`

Expand the environment into cinematic rendering cues.

Examples:

- towering stone columns, drifting smoke, worn floor, harsh light shafts, suspended dust
- long wet corridor reflections, steel beams, broken skylight shafts, rain haze

### `[PERFORMANCE DESCRIPTION]`

Describe what this motion means emotionally or structurally.

Examples:

- a solitary female kung fu routine inside a vast ancient temple
- a solo ritual performance of force, exhaustion and controlled release
- not a fight against an enemy, but a performance of pressure and transformation

### `[NOT X]` / `[Y]`

Use this pair to prevent narrative confusion.

Examples:

- This is not a fight against an enemy. It is a solo performance of force, control and release.
- This is not a superhero battle. It is a ritual movement study charged with spiritual pressure.

### `Element progression`

This should mirror the storyboard escalation.

Good arc:

- early = subtle response
- middle = stronger reaction
- late = intense controlled release
- climax = combined peak
- final beat = converged image before impact / before stillness / at release

### `[OPTIONAL MOVEMENT LOGIC BLOCK]`

Use only when the user provides a movement system or when a formal body-language framework is useful.

Examples:

- Laban movement logic
- ballet phrasing
- combat weight transfer logic

If omitted, the prompt should still work.

## Safe Defaults

Use these when the user is vague but clearly wants action-driven cinematic output:

- aspect ratio: `16:9`
- panel count: `12`
- duration: `15 seconds`
- start rule: begin directly in action
- storyboard style: black-and-white rough pencil previs
- video structure: preserve storyboard shot order exactly

## Mapping Example

User brief:

```text
Female warrior, ancient temple, explosive kung fu, elemental build-up, final airborne freeze.
```

Mapping:

- `[CHARACTER TYPE]` → a solitary female ritual warrior
- `[ENVIRONMENT]` → a vast ancient temple
- `[CHOREOGRAPHY OR MOTION TYPE]` → explosive kung fu performance
- `[PRIMARY MOTION QUALITIES]` → aggressive, disciplined, ritualistic, physically extreme
- `[ELEMENT / VFX TYPE]` → elemental energy
- `[ENDING STATE]` → a frozen final frame while the performer is still airborne

## Quality Check Before Output

Before returning prompts, verify:

- the storyboard prompt is planning-oriented, not final-render oriented
- the video prompt explicitly uses image1 as character lock and image2 as storyboard lock
- the ending state is concrete
- the negative constraints are present
- the example subject has not accidentally become the default
