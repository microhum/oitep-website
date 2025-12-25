
# Entity Name Rule

This rule defines HTML entity replacements for prohibited special characters to ensure proper rendering and compliance with HTML standards.

## Prohibited Characters and Entity Replacements

| Character | Entity | Usage |
| --------- | ------ | ------- |
| `<` | `&lt;` | Less than |
| `>` | `&gt;` | Greater than |
| `&` | `&amp;` | Ampersand |
| `"` | `&quot;` | Double quote |
| `'` | `&#39;` | Single quote |

## Rule Definition

```yaml
name: entity-name
description: Replace prohibited special characters with HTML entities

replacements:
    - pattern: '<'
        replacement: '&lt;'
    - pattern: '>'
        replacement: '&gt;'
    - pattern: '&'
        replacement: '&amp;'
    - pattern: '"'
        replacement: '&quot;'
    - pattern: "'"
        replacement: '&#39;'
```

## Example

**Before:** `The tag <div> contains "content"`

**After:** `The tag &lt;div&gt; contains &quot;content&quot;`
