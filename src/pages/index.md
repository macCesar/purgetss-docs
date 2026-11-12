---
description: PurgeTSS is a utility-first styling toolkit for Titanium and Alloy apps, with 23,400+ utility classes, icon fonts, an Animation module and a grid system.
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

- 23,400+ utility classes for colors, spacing, typography, layout, and more.
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
- [Execution profiles and performance](docs/performance)
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

### v7.20.1

- Generator corrections exclude read-only properties, emit numeric iOS SplitWindow ratios and bounds, resolve Font Awesome Pro/Beta families from installed font metadata, and reject inverted negatives in the formatter. See the [full changelog](changelog#v7201).

### v7.20.0

- Update Titanium Completions to SDK 14.0.0.GA: 63 new property entries and 356 recovered property descriptions.
- Regenerate utility classes and the glossary, including 18 new property pages for boolean, color, split-view and layout settings.

### v7.19.0

- Global `--profile <file.json>` saves timings, CPU, memory, phases and counters for commands, aliases and `--all`, including controlled failures and LiveView skips. See [Execution profiles and performance](docs/performance).
- Purges share XML/controller analysis within each run. Class and `apply` lookups use indexes, commands load on demand, and font/image generators reuse inputs while preserving output contracts and image quality. The [measured purge reductions](docs/performance#measured-results) ranged from 19.1% to 65.6% in the tested fixtures.
- Configuration is evaluated per invocation. Generator signatures detect changes within the same second; generated text keeps its modification time when bytes are unchanged. Logs distinguish created, updated and unchanged files. The two-second LiveView guard and completed `app.tss` writes remain intact.
- Supported Node versions are `^20.12.0 || ^22.13.0 || >=23.5.0`. Compatible dependency fixes include Sharp 0.35.5; test runners now propagate failures. See [Installation](docs/installation).

→ See the [full changelog](changelog) for older releases (v7.18.0 and earlier).
