---
description: PurgeTSS is a utility-first styling toolkit for Titanium and Alloy apps, with 23,300+ utility classes, icon fonts, an Animation module and a grid system.
keywords: [purgetss, titanium, alloy, titanium sdk, tss, utility-first, mobile app styling]
---

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
- Icon fonts for Buttons and Labels: Font Awesome, Material Icons, Material Symbols, and Framework7-Icons in Alloy and Classic projects.
- `build-fonts` installs custom fonts in Alloy or Classic; TSS class definitions are generated only for Alloy.
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

### Unreleased

### v7.16.2

- **Custom-font modules expose every processed family.** `build-fonts --module` maps each TTF/OTF to the exact PostScript name Titanium expects, even when the project contains no icon CSS.
- **Classic color commands avoid unrelated empty source folders.** `shades` updates only `purgetss/config.cjs`, while `color-module` writes the CommonJS file under `Resources/lib/` without initializing brand, font, image, or Alloy scaffolding.

### v7.16.1

- **Titanium Classic video production assets were added**, together with clearer PurgeTSS diagnostics when an automatic Alloy purge fails.

### v7.16.0

- **Round non-icon artwork without pre-masking app icons.** `brand.artworkCornerRadius`, piece overrides, and six one-run flags cover the 28 legacy splash PNGs, Feature Graphic, and LaunchLogo. Store/launcher icons stay square for platform masking, and existing projects retain byte-compatible output at the `0%` default.
- **`appicon.padding` now has a matching CLI flag.** The canonical config exposes its `10%` default and `--appicon-padding` handles temporary changes.

### v7.14.0

- **Square iOS/store artwork is now full-bleed by default.** `icon`, `dark`, `tinted` and `marketplace` use `0%` instead of the former `4%` inset. `--ios-padding` still moves the family together when the source is a logo that needs breathing room.
- **`DefaultIcon.png` and `DefaultIcon-ios.png` now both obey `brand.icon.padding`.** The root fallback had incorrectly inherited Android adaptive padding, creating a much larger border than configured. Both outputs are opaque and use the same inset.
- **Standalone Classic projects get a complete first-run setup.** If `purgetss/config.cjs` is missing, `brand` creates the canonical config. A positional source such as `sample-icon.png` is adopted as `purgetss/brand/logo.png` when no canonical logo exists, and the move is reported.
- **Generation follows `tiapp.xml` deployment targets in Alloy and Classic.** Normal runs omit disabled platforms; explicit `--only` remains an override. Classic Android retains the 11 `Resources/android/images/res-*` splash variants Titanium consumes even though `ti create` does not seed those folders.
- **Visible icon frames are diagnosed before they surprise you.** Opaque edge-to-edge artwork combined with padding and a contrasting inherited background produces a warning naming the affected pieces. White remains a configurable fallback, not a platform requirement.

### v7.13.2

- `purgetss brand --help` advertised padding defaults the command does not use: `19` for the adaptive icon and `20` for both splash sets, where the pipeline applies `18`, `26` and `26`. The seven padding descriptions are now interpolated from the piece table instead of being hand-typed in a second place, with a new test that compares the real `--help` output against that table. The values documented on this site were already the correct ones.

### v7.13.1

- Four vulnerable transitive dependencies patched, all of which shipped inside v7.13.0: `postcss`, `nanoid`, `brace-expansion` and `uuid`. Patch bumps within the same major, so `package.json` is untouched and only the lockfile moves. `npm audit` reports zero vulnerabilities afterwards.

→ See the [full changelog](changelog) for older releases (v7.13.0 and earlier).
