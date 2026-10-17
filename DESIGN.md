---
name: "Lifabs Rent"
description: "Owner's Dossier untuk satu unit nyata, dengan alur booking yang tenang dan langsung."
colors:
  ink: "#111111"
  paper: "#ffffff"
  cool-sheet: "#f5f6f7"
  hero-paper: "#f8f8f5"
  photo-ground: "#e5e6e2"
  brand-cyan: "#1aa7ec"
  action-cyan: "#006f98"
  action-cyan-hover: "#005f83"
  signal-red: "#e3262e"
  signal-red-dark: "#a7161c"
  muted-ink: "#515b67"
  hairline: "#e2e5e8"
  hairline-strong: "#bdc4ca"
  hero-outline: "#e5e9eb"
  selected-sheet: "#f9fcfd"
  input-hover-line: "#8d969d"
  disabled-surface: "#dce1e4"
  disabled-text: "#73808a"
  dark-sheet: "#202428"
  dark-copy: "#cbd2d7"
  info-surface: "#f3fafc"
  info-line: "#abd4e2"
  danger-surface: "#fff7f7"
  danger-line: "#e7b5b8"
  reading-ink: "#303840"
  contact-muted: "#d9eff7"
typography:
  hero:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2.35rem, 3.35vw, 3.8rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  section-heading:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  hero-price:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  card-price:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.15rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  body-lead:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  title:
    fontFamily: "Sora, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.45
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
  action:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  sharp: "0"
  field: "8px"
  submit: "10px"
  action: "12px"
  round: "999px"
spacing:
  xs: "0.45rem"
  sm: "0.65rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "1.5rem"
  2xl: "2rem"
  3xl: "3rem"
  section: "clamp(4.5rem, 9vw, 8rem)"
  reading-gap: "clamp(3rem, 8vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.action-cyan}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "0.9rem 1.3rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.action-cyan-hover}"
    textColor: "{colors.paper}"
  header-action:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "44px"
  button-submit:
    backgroundColor: "{colors.action-cyan}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.submit}"
    padding: "0.95rem 1.15rem"
    height: "54px"
  button-submit-disabled:
    backgroundColor: "{colors.disabled-surface}"
    textColor: "{colors.disabled-text}"
    rounded: "{rounded.submit}"
    height: "54px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.78rem 0.85rem"
    height: "50px"
  price-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.card-price}"
    rounded: "{rounded.sharp}"
    padding: "clamp(1.25rem, 3vw, 2rem)"
    height: "19rem"
  service-rail:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "1rem 0 0"
  unit-annotation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "1rem 1.1rem"
  term-highlight:
    backgroundColor: "{colors.info-surface}"
    textColor: "{colors.action-cyan}"
    rounded: "{rounded.sharp}"
    padding: "1.25rem"
    height: "8rem"
  faq-control:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.action-cyan}"
    rounded: "{rounded.round}"
    size: "2rem"
  sticky-whatsapp:
    backgroundColor: "{colors.action-cyan}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "0.85rem 1rem"
    height: "52px"
---

# Design System: Lifabs Rent

## Overview

Owner's Dossier remains the visual world: authentic unit photography, ink typography, restrained rules, clear pricing, and direct WhatsApp booking. The approved reference governs the hero topology only. Its brand, copy, photograph, and purple palette are not part of this project.

The current hero replaces prior split-heading and centered heroes: full-cover unit-photo background, dark blurred left reading panel, white two-line light title, starting price, and cyan WhatsApp action. Mobile places the reading panel at the top. About remains light and automatically absent while unfinished.

## Colors

Ink #111111, Paper #ffffff, Cool Sheet #f5f6f7, Hero Paper #f8f8f5, and Photo Ground #e5e6e2. Primary action #006f98 with white text (AA); hover #005f83. Header and secondary pills are ink with white text. No red or cyan decoration in the hero; cyan is reserved for the main booking action. The logo retains its supplied colors on white.

## Typography

Sora is self-hosted as a real variable Latin WOFF2 with wght 300-600, verified from its fvar axis; font-display swap. Hero H1 uses weight 300, clamp(2.35rem, 3.35vw, 3.8rem), line-height 1.08, tracking -0.04em; phone clamp(1.75rem, 7.8vw, 2.4rem). Body and hero actions remain 400; labels500.

Hero omits the summary paragraph and secondary price link. Price uses 1.5rem at weight400 with 1rem prefix and .9rem duration; CTA .9rem/400.

## Layout

Header: white, 76px minimum height, logo left, four anchors plus small ink booking pill right; at 600px and below use 64px header and hide anchors.

Hero: full-cover original-unit-photo background below the unchanged white header. Desktop height calc(100svh - 76px), minimum620px. A localized black reading panel covers58% at left: gradient black91%/78%/45%, backdrop blur12px, horizontal mask fading into the clear photo. Copy aligns left, vertically centered, with two-line Sora300 title, starting price and cyan pill below. No white booking strip or separate heading row.

At900px and below, copy moves to the top and the dark panel spans the upper47%, minimum340px, with black92%/78%/42% and a vertical mask. At600px hero height calc(100svh - 64px), minimum640px; top panel43%, minimum310px. Photo uses cover, object-position50%68% from site.heroImage. The tall desktop crop retains the motor within the background; some of it intentionally sits behind the requested dark left treatment. Portrait960px source still limits desktop sharpness.

Other sections: three pricing cards; single-column order form maximum 46rem; two-column terms on desktop; single-column FAQ maximum 50rem; compact contact grid. Avoid repeated left/right storytelling layouts. About is a centered light block with one model/year/variant chip, rendered only when site.about is published. Preserve every PRD term verbatim.

## Elevation & Depth

Original motorcycle colors stay intact. Only the reading area receives the requested black tint and 12px backdrop blur for white text legibility. One650ms ease-out heading fade/8px slide starts from visible content; reduced-motion disables it. No heavy image shadow.

## Shapes

Header/hero buttons are pill-shaped and at least 44px tall. Full-cover photo has sharp corners; there is no separate booking strip. Form fields retain 8px radii, downstream submit 10px, sticky WA 12px. Action arrows remain authored SVG strokes. FAQ plus remains CSS geometry.

## Components

### Header and Hero

White header retains anchor navigation and black pill. Hero is one photographic region with a left dark-blur reading block; title, price and CTA are co-located. Primary action is #order when available, otherwise the verified WhatsApp inquiry. Price comes from site.prices[0].

### Replaceable Media

Edit site.heroImage src, alt, objectPosition and tabletObjectPosition. Both positions currently50%68%. All viewport classes use original portrait variants480/720/960, AVIF/WebP; derivative encoding never upscales. Replacing src bypasses known derivatives and preloads the new image. Old landscape derivatives are not selected by this hero.

### Quiet Reading Components

Order form uses calm labels and explicit required states. The terms section uses a 360px desktop introduction rail with an 80px gap to two sharp record cards: a cyan-tinted checked requirements list and numbered conditions, with the verified penalty row in a restrained red tint. Both highlights retain 44px icon cells; the full-width closing strip returns to #order. On narrow viewports this becomes one vertical reading flow with 20px gutters and a 52px full-width action. FAQ uses native details. Mobile sticky WhatsApp hides when the form is visible. All business truth remains in site.ts.

### Publication Guard

String values containing TODO are removed from public data before components, metadata, or serialized form data consume them. About is hidden entirely when empty or TODO. An Astro build hook rejects any remaining TODO text in generated HTML. Production contains no unfinished owner story.

## Do's and Don'ts

- Keep authentic unit color and verified facts only.
- Keep wheels, mirrors, windscreen and ZX-25R lettering inside the crop.
- Retain white, light, left-aligned two-line hero typography over the localized dark reading area; keep downstream reading sections quiet.
- Do not copy reference branding, purple, photographs, or claims.
- Do not upscale generated photo variants or pretend the 960px original supports a sharp 1440px full-bleed landscape.
- Do not restore earlier centered hero, outline model watermark, or spec chips.
- Preserve AA contrast, 44px targets, and reduced-motion behavior.
