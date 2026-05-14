# Output Format

Default response structure:

```text
GPT Image 2 Storyboard Prompt:
[prompt]

Seedance 2.0 Video Prompt:
[prompt]

Workflow Notes:
1. [how to use stage 1]
2. [how to use stage 2]
3. [what image1 / image2 represent]
```

If the user asks for a more structured planning version, add:

```text
Input Mapping:
- image1 = [role]
- image2 = [role]
- subject = [role]
- ending state = [role]

Negative Constraints:
- [constraint]
- [constraint]
```
