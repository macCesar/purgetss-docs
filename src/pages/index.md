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
  - [Using `purgetss.ui` in Titanium Classic](docs/purgetss-ui/titanium-classic)
  - [The `play` Method](docs/purgetss-ui/the-play-method)
  - [The `apply` Method](docs/purgetss-ui/the-apply-method)
  - [The `open` and `close` Methods](docs/purgetss-ui/the-open-and-close-methods)
  - [The `draggable` Method](docs/purgetss-ui/the-draggable-method)
  - [Additional Methods](docs/purgetss-ui/additional-methods)
  - [Complex UI Elements](docs/purgetss-ui/complex-ui-elements)
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

### v7.17.1

- **The notification icon is now named `notificationicon.png`.** `firebase.cloudmessaging` resolves that exact name, so data messages find the icon without any manifest wiring; under the old `ic_stat_notify` name they fell back to the opaque launcher icon and the status bar showed a white blob. Projects that wired `@drawable/ic_stat_notify` by hand update one `meta-data` line and delete the five stale files.

### v7.17.0

- **`--dependencies` scaffolds an ESLint setup that runs.** The template is `eslint.config.mjs`, a flat config for ESLint 9 that declares the Titanium and Alloy globals and ignores generated code. `eslint-config-axway` and `eslint-plugin-alloy` are no longer installed: neither works under ESLint 9.
- **The `images:` section rejects unknown keys.** A typo like `qualty: 95` is now an error naming the offending key and the entry index, instead of silently falling back to the default.
- **The generated `images:` block documents the 4× convention.** The comments state where the output sizes come from, why there is no `width` key, and which formats `quality` actually reaches.

### v7.16.2

- **Custom-font modules expose every processed family.** `build-fonts --module` maps each TTF/OTF to the exact PostScript name Titanium expects, even when the project contains no icon CSS.
- **Classic color commands avoid unrelated empty source folders.** `shades` updates only `purgetss/config.cjs`, while `color-module` writes the CommonJS file under `Resources/lib/` without initializing brand, font, image, or Alloy scaffolding.

→ See the [full changelog](changelog) for older releases (v7.16.1 and earlier).
