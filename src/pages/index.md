<p align="center">
	<img src="https://codigomovil.mx/images/logotipo-purgetss-gris.svg" height="230" width="230" alt="PurgeCSS logo"/>
</p>

<div align="center">

![npm](https://img.shields.io/npm/dm/purgetss)
![npm](https://img.shields.io/npm/v/purgetss)
![NPM](https://img.shields.io/npm/l/purgetss)

</div>

:::info
**PurgeTSS** is a toolkit for building mobile apps with the [Titanium framework](https://titaniumsdk.com). It adds practical utilities to speed up styling and reduce repeated setup work.

It includes utility classes, icon font support, an Animation module, a simple grid system, and the `shades` command for generating custom colors.

If you build UI-heavy screens, PurgeTSS helps you move faster without hand-writing long TSS files.
:::

What it does:

- 23,300+ utility classes for colors, spacing, typography, layout, and more.
- Parses your XML files and writes an `app.tss` with only the classes you actually use.
- Customizable via `config.cjs`. Supports arbitrary values for one-off sizes and colors.
- Icon fonts: Font Awesome, Material Icons, Material Symbols, and Framework7-Icons in Buttons and Labels.
- `build-fonts` command generates `fonts.tss` with class definitions and `fontFamily` selectors for any font you drop in.
- `shades` command generates color palettes from a hex value.
- Animation module: 2D transforms, draggable views with collision detection, sequential animations, and position utilities.
- Grid system for aligning and distributing elements in rows and columns.

## Table of Contents

- [Installation](docs/installation)
- [Commands](docs/commands)
- App Assets
  - [App icons and branding](docs/app-assets/app-icons-and-branding)
  - [Multi-density images](docs/app-assets/multi-density-images)
- Customization
  - [The Config File](docs/customization/the-config-file)
  - [Custom Rules](docs/customization/custom-rules)
  - [The `apply` Directive](docs/customization/the-apply-directive)
  - [The `opacity` Modifier](docs/customization/the-opacity-modifier)
  - [Arbitrary Values](docs/customization/arbitrary-values)
  - [Platform and Device Modifiers](docs/customization/platform-and-device-modifiers)
  - [Icon Fonts Libraries](docs/customization/icon-fonts-libraries)
- The UI Module
  - [Introduction](docs/purgetss-ui/introduction)
  - [The `play` Method](docs/purgetss-ui/the-play-method)
  - [The `apply` Method](docs/purgetss-ui/the-apply-method)
  - [The `open` and `close` Methods](docs/purgetss-ui/the-open-and-close-methods)
  - [The `draggable` Method](docs/purgetss-ui/the-draggable-method)
  - [Complex UI Elements](docs/purgetss-ui/complex-ui-elements)
  - [Additional Methods](docs/purgetss-ui/additional-methods)
  - [Available Utilities](docs/purgetss-ui/available-utilities)
  - [Implementation Rules](docs/purgetss-ui/implementation-rules)
  - [Appearance](docs/purgetss-ui/appearance)
- Best Practices
  - [Appearance Setup](docs/best-practices/appearance-setup)
  - [Semantic Colors](docs/best-practices/semantic-colors)
  - [Large Titles on iOS](docs/best-practices/large-titles-on-ios)
- [Grid System](docs/grid-system)

---

## Changelog

### v7.6.0

- **`brand` command** — generate the complete Titanium branding set (launcher icons, adaptive icons, iOS 18+ Dark/Tinted, marketplace artwork, optional notification/splash) from logos auto-discovered in `./purgetss/brand/`. Works on Alloy and Classic projects. See [App icons and branding](docs/app-assets/app-icons-and-branding)
- **`images` command** — generate multi-density UI images (Android `res-*` densities + iPhone `@1x`/`@2x`/`@3x` scales) from sources in `./purgetss/images/`. Subdirectories preserved, short-path scope targeting for re-processing individual files. See [Multi-density images](docs/app-assets/multi-density-images)
- **`brand:` and `images:` config sections** in `purgetss/config.cjs` — percentages can be written as `'15%'` strings for self-documenting clarity; plain numbers also accepted. Auto-injected into older configs on first run.
- **`semantic` command** — generate Titanium semantic colors (Light/Dark mode) into `app/assets/semantic.colors.json`. Two modes dispatched by `--single`: tonal **palette** (one base hex → 11 shades with mirror inversion + auto config mapping) and **single** purpose-based color (explicit per-mode hex + optional alpha; the JSON entry AND a class mapping in `config.cjs` are written in one shot — class name auto-derived by stripping the `Color` suffix, e.g. `surfaceColor` → class `surface`). Smart in-place updates when a single name matches an existing palette shade. See [Semantic Colors — Generating semantic colors with the `semantic` command](docs/best-practices/semantic-colors#generating-semantic-colors-with-the-semantic-command)

### v7.5.3

- **Appearance module** — new `Appearance` export for Light/Dark/System mode switching with persistence. Methods: `init()`, `set(mode)`, `get()`, `toggle()`. See [Appearance Setup](docs/best-practices/appearance-setup)
- **Default font family classes** — `font-sans`, `font-serif`, and `font-mono` generated automatically with platform-appropriate values
- **XML validation** — detects illegal `--` inside XML comments during pre-validation

### v7.5.0

- **`extend` support for Window, View, and ImageView** — customize component defaults from `theme.extend` in `config.cjs`
- **Shorthand `apply`** — `{ apply: '...' }` is automatically normalized, so the `default:` wrapper is optional
- **Property deduplication** — applied values win over static defaults instead of duplicating
- **Automatic platform resolution** — classes inside `ios:`/`android:` blocks find their platform-specific version automatically
- **Font Awesome 7.2.0**
- Fixed: `extend.Window` silently ignored, duplicate `font` properties, array-type properties missing `[ ]` notation

### v7.4.0

**Animation module expansion.** 9 new methods bring the module to 15 total:

- `transition`, `pulse`, `sequence`, `swap`, `shake`, `snapTo`, `reorder`, `undraggable`, `detectCollisions`
- New utility classes: `snap-back`, `snap-center`, `snap-magnet`, `keep-z-index`
- Delta-based drag for transformed views, position normalization, property inheritance from the Animation object

See the [UI Module documentation](docs/purgetss-ui/introduction) for full details.

### v7.3.0

- **BREAKING: `tailwind.tss` → `utilities.tss`** — renamed to reflect PurgeTSS's identity as a standalone toolkit
- **XML syntax validation** — pre-validation for Alloy XML files with line numbers and fix suggestions
- **Classic Titanium compatibility** — `deviceInfo()` works without Alloy dependencies

### v7.2.7

- **Security fixes** — command injection in `glob`, prototype pollution in `js-yaml`
- **Dependency cleanup** — reduces installation size by ~45MB, removed unused packages
- **Titanium SDK 13.1.0.GA** — new utility classes for `navBarColor`, `forceBottomPosition`, `multipleWindows`

### v7.2.6

- Updated Font Awesome to version 7.1.0
- Simplified flag property names in utilities.tss
