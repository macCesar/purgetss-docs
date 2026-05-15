<p align="center">
	<img src="https://codigomovil.mx/images/logotipo-purgetss-gris.svg" height="230" width="230" alt="PurgeCSS logo"/>
</p>

<div align="center">

![npm](https://img.shields.io/npm/dm/purgetss)
![npm](https://img.shields.io/npm/v/purgetss)
![NPM](https://img.shields.io/npm/l/purgetss)

</div>

:::info
PurgeTSS is a toolkit for building mobile apps with the [Titanium framework](https://titaniumsdk.com). It adds practical utilities for styling and setup work.

It includes utility classes, icon font support, an Animation module, a simple grid system, and the `shades` command for generating custom colors.

If you build UI-heavy screens, PurgeTSS keeps you from hand-writing long TSS files.
:::

What it does:

- 23,300+ utility classes for colors, spacing, typography, layout, and more.
- Parses XML files and writes an `app.tss` with only the classes you use.
- Customizable through `config.cjs`, with arbitrary values for one-off sizes and colors.
- Icon fonts for Buttons and Labels: Font Awesome, Material Icons, Material Symbols, and Framework7-Icons.
- `build-fonts` command generates `fonts.tss` with class definitions and `fontFamily` selectors for any font you drop in.
- `shades` command generates color palettes from a hex value.
- Animation module with 2D transforms, draggable views with collision detection, sequential animations, and position utilities.
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
  - [Custom Fonts](docs/customization/custom-fonts)
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
  - [Values and Units](docs/best-practices/values-and-units)
- [Grid System](docs/grid-system)

---

## Changelog

### v7.11.1

- Fixes for the SVG image pipeline from v7.11.0: width/height now cascade symmetrically (the unpinned side derives from the `viewBox` on every run instead of getting cemented in `config.cjs`), `syncConfigImages` mirrors the current run so shrinking a class actually shrinks the entry, and SVGs listed in `images.files` always emit PNG to match Titanium's runtime fallback.
- `purgetss images` respects `--yes` for overwrite confirmations, and `syncConfigImages` no longer bumps `config.cjs` mtime on untouched runs (which was triggering needless `utilities.tss` rebuilds).
- Restored `src/dev/builders/tailwind-builder.js` — it was the entry point for `npm run build:tailwind`, deleted as "orphan" by mistake in 7.11.0.

### v7.11.0

- **SVG-aware compile-time image pipeline as a post-step of `purgetss`.** When views or controllers reference `image="/images/<sub>/<name>.svg"` alongside utility classes that resolve to numeric width/height (`w-32`, `w-(300)`, `h-auto`, …), purge now compiles those SVGs into the 8 Titanium density variants (5 Android + 3 iPhone PNGs) using dimensions resolved from `app.tss`. Titanium loads the generated `.png` automatically at runtime; the SVG attribute in your source is never rewritten. See [SVG-aware image pipeline](docs/app-assets/svg-pipeline).
- New `images.files` array in `config.cjs` to pin width/height per file, plus `images.autoSync` (default `true`) for devs who want to manage `images.files` by hand.
- `config.cjs` syntax validator: type mismatches in known fields (`theme.fontFamily.*`, `theme.extend.fontFamily.*`) print a formatted `Config Syntax Error` block with file, JSON path, and a fix snippet — instead of cryptic downstream crashes like `rule.startsWith is not a function`.

### v7.10.2

- Configs written before v7.7.0 (the `brand:` regroup) now auto-migrate in memory on every run. The legacy flat layout used to crash auto-purge with `TypeError: Cannot create property 'ios' on number '15'`; `getConfigFile()` now normalizes them to the grouped layout before applying defaults. See [Upgrading from pre-7.7.0 configs](docs/app-assets/app-icons-and-branding#upgrading-from-pre-770-configs).
- Internal fix: `logger.warning` and `logger.success` are now defined — the ~40 callsites across `brand`, `images`, `cleanup-legacy`, and `svg-utils` no longer throw `TypeError: logger.warning is not a function` when those opt-in commands run.

→ See the [full changelog](changelog) for older releases (v7.10.1 and earlier).
