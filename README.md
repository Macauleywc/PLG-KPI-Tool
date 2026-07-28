# Handoff: PLG Central — Login & Home Redesign

## Overview
Redesign of the two entry screens of PLG Central, Premier Logistics Group's internal platform: the sign-in screen and the post-login home/launcher screen. Goal was to move off a dated dark-sidebar/bootstrap-card look to a warmer, branded UI with clearer hierarchy.

## About the Design Files
The bundled file (`PLG Central.dc.html`) is a **design reference built in HTML** — a working prototype showing intended look, layout and behavior. It is not production code to copy as-is. Recreate these screens in the target codebase's existing environment (React, Vue, native, etc.) using its established components and patterns. If no environment exists yet, pick the framework that best fits the project.

## Fidelity
**High-fidelity.** Colors, type, spacing and states below are final; recreate pixel-for-pixel using the codebase's own component library where equivalents exist.

## Screens / Views

### 1. Login
**Purpose:** Authenticate internal staff into PLG Central.

**Layout:** Full-viewport, centered column, max-width 400px. Two soft radial-gradient blobs (sage top-right, terracotta bottom-left) decorate the background at low opacity — purely decorative, non-interactive, `pointer-events: none`.

**Components (top to bottom):**
- Logo lockup: `assets/premier-logo.svg`, rendered at 44px height, centered.
- "PLG Central" — Caprasimo 32px, `#201e1d`, margin-top 10px.
- "Internal tools" — Figtree 13px, `rgba(32,30,29,0.55)`.
- Card (`#ebddc5` background, border-radius 32px, padding 36px/32px, shadow `0 12px 32px rgba(46,43,37,0.16)`):
  - "Sign in to continue" — Caprasimo 19px.
  - "Enter your credentials to access the platform" — Figtree 13px, `rgba(32,30,29,0.6)`.
  - Username field: label (11px uppercase, letter-spacing 0.06em, `rgba(32,30,29,0.6)`), pill input (`#f9f4ed` bg, 1px `rgba(32,30,29,0.16)` border, radius 999px, 12px/14px padding, left-inset user icon), prefilled `macauley`.
  - Password field: same input style, right-inset eye/eye-off toggle button (no border, cursor pointer), prefilled masked value.
  - Primary button, full width: "Sign in →" — `#c67139` bg, `#f5ead8` text, Caprasimo 15px, radius 999px, padding 13px. Hover `#b2622d`, active `#8c491a`.
  - Footer caption below card: "Authorised PLG personnel only" / "Contact your system administrator if you need access" — 11px, `rgba(32,30,29,0.5)`, centered.

**States:** Password field toggles between `type="password"` / `type="text"` via the eye icon. Inputs get a `#c67139` focus ring (2px, offset 1px) on `:focus-visible`.

### 2. Home
**Purpose:** Landing/launcher screen after sign-in; lets staff jump into the 5 core modules.

**Layout:** Top nav bar (not a sidebar), full width, `padding: 18px 40px`, translucent cream background with blur, 1px bottom divider. Below it, a content area `padding: 56px 40px 64px`, `max-width: 1100px`.

**Nav bar components:**
- Left: `assets/premier-mark.svg` icon (28px height) + "PLG Central" (Caprasimo 17px).
- Center/right: nav links — Home (active, `#c67139`, bold), Reports, Import, Control Tower (with external-link icon, 12px), Users, Settings. Inactive links `#201e1d`, hover `#c67139`.
- Far right: "Sign out" ghost button — 1px border, radius 999px, 8px/16px padding, hover `rgba(32,30,29,0.07)`.

**Content:**
- Kicker: "PLG CENTRAL — INTERNAL PLATFORM" — 11px, uppercase, letter-spacing 0.1em, `#c67139`.
- H1: "Welcome back, Macauley" — Caprasimo 40px.
- Card grid: `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))`, gap 20px. Each card: `#ebddc5` bg, radius 24px, padding 24px, shadow `0 3px 10px rgba(46,43,37,0.1)`, flex column gap 12px.
  - Icon swatch: 44×44px, radius 14px, `#fff2eb` bg, icon stroke `#8c491a`, stroke-width 2.75.
  - Title — Caprasimo 17px.
  - Body copy — Figtree 13px, opacity 0.75.
  - 5 cards: **Reports** ("Customer OTIF, KPI dashboards and PDF exports."), **Import** ("Convert customer delivery schedules into Qargo-ready import files."), **Control Tower** ("Live load-sharing and transfer coordination across the VPK Triad network." — has an external-link glyph top-right of its icon), **Users** ("Add, remove or adjust access for platform users."), **Settings** ("Connection settings and shared data source configuration.").

## Interactions & Behavior
- Submitting the login form (button click or Enter) navigates to Home. In the prototype this is simulated with local state; in production, wire to real auth and route to the home screen on success.
- "Sign out" on Home returns to Login (simulated in prototype; wire to real session teardown).
- Password visibility toggle is local UI state only.
- No loading/error states are designed yet — recommend adding an inline error message under the password field for failed auth, and a disabled/spinner state on the Sign in button while the request is in flight.
- Nav links (Reports, Import, Control Tower, Users, Settings) are visual only in the prototype — route them to their respective real pages.

## State Management
- `view`: `'login' | 'home'`
- `showPassword`: boolean

## Design Tokens
- **Colors:** bg `#f5ead8`, surface `#ebddc5`, text `#201e1d`, accent `#c67139` (hover `#b2622d`, active `#8c491a`, tint `#fff2eb`), accent-2 (sage) `#7a8a5e` (used only in the background decoration), neutral light `#f9f4ed`, divider `rgba(32,30,29,0.16)`.
- **Typography:** Headings — Caprasimo (Google Font), regular weight only. Body — Figtree, weights 400/600/700.
- **Radius:** pills/buttons/inputs 999px; cards 24px; login card 32px; icon swatches 14px.
- **Shadows:** sm `0 3px 10px rgba(46,43,37,0.1)`, lg `0 12px 32px rgba(46,43,37,0.16–0.22)`.
- **Spacing scale:** roughly 4–40px in the multiples used above; no strict 8px grid was enforced.

## Assets
- `assets/premier-logo.svg` — full Premier Logistics Group logo lockup (icon + "Premier Logistics Group" wordmark), supplied by the client, cropped to its content bounding box. Currently rendered in its original single dark color (`#201e1d`).
- `assets/premier-mark.svg` — the icon-only crop of the same logo, used at small size in the nav bar.
- Icons: hand-built inline SVGs approximating a Lucide-style icon set (stroke-width 2.75, round caps/joins) — replace with your codebase's actual icon library (Lucide recommended to match this design's icon weight) rather than reusing the inline paths.

## Files
- `PLG Central.dc.html` — the full prototype (both screens, interactive toggle between them).
- `assets/premier-logo.svg`, `assets/premier-mark.svg` — logo assets.
