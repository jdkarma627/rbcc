# RBCC Color Palette (v2)

## Primary Palette

| Role | Name | Hex | Use |
| --- | --- | --- | --- |
| Primary | Bengal Blue | #0F4C81 | Main headings, key backgrounds, primary graphics |
| Secondary | Victory Gold | #F2A900 | Highlights, callouts, emphasis elements |
| Support | Emerald Teal | #0B8F8C | Secondary accents, charts, info blocks |

## Neutral Palette

| Role | Name | Hex | Use |
| --- | --- | --- | --- |
| Text Primary | Carbon | #1D1D1F | Body text |
| Text Secondary | Slate | #4F5B66 | Supporting text |
| Border | Cool Gray | #D6DCE1 | Dividers, cards |
| Surface | White | #FFFFFF | Base background |
| Surface Alt | Mist | #F7F9FB | Alternate rows/sections |

## CSS Custom Properties

For direct use in web and React projects:

```css
:root {
  /* Primary */
  --rbcc-primary: #0F4C81;
  --rbcc-secondary: #F2A900;
  --rbcc-accent: #0B8F8C;

  /* Neutrals */
  --rbcc-text: #1D1D1F;
  --rbcc-text-secondary: #4F5B66;
  --rbcc-border: #D6DCE1;
  --rbcc-surface: #FFFFFF;
  --rbcc-surface-alt: #F7F9FB;

  /* Primary button */
  --rbcc-btn-primary-bg: #0F4C81;
  --rbcc-btn-primary-text: #FFFFFF;
  --rbcc-btn-primary-hover: #0D3F6B;
  --rbcc-btn-primary-active: #0A3358;

  /* Secondary button (Victory Gold) */
  --rbcc-btn-secondary-bg: #F2A900;
  --rbcc-btn-secondary-text: #1D1D1F;
  --rbcc-btn-secondary-hover: #D99800;
  --rbcc-btn-secondary-active: #BF8700;

  /* Outline button */
  --rbcc-btn-outline-border: #0F4C81;
  --rbcc-btn-outline-text: #0F4C81;
  --rbcc-btn-outline-hover-bg: #0F4C81;
  --rbcc-btn-outline-hover-text: #FFFFFF;
}
```

## Hero Background

For full-width hero sections, use solid Bengal Blue (#0F4C81). If a subtle texture is needed, use a very light radial gradient:

```css
background: linear-gradient(135deg, #0F4C81 0%, #0D3F6B 100%);
```

Do not use multi-color gradients. Do not mix Bengal Blue with Victory Gold in backgrounds.

## Accessibility and Contrast Rules

- Use Carbon text on white or mist backgrounds for long-form readability.
- Do not use Victory Gold as body text color on white backgrounds.
- When using Bengal Blue background, use white text.
- Keep contrast at accessible levels for sponsor/public documents.

## Sponsor Asset Priority Order

1. Bengal Blue
2. White
3. Carbon
4. Victory Gold (for highlight only)
5. Emerald Teal (support only)

## Usage Limits

- Do not use more than 3 RBCC colors in one graphic.
- Do not apply gradients to sponsor logos.
- Keep sponsor logos in original colors unless written permission allows monochrome usage.
