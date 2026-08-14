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

### v7.13.0

- **`purgetss brand` now covers every image the Titanium template ships.** A run on a fresh Alloy project used to leave 28 files wearing the grey Alloy logo — the 16 iPhone launch images, the 11 per-qualifier Android splashes, and `appicon.png`. The rule is now explicit: if the template ships the file, `brand` updates it.
- **The `brand:` config is organized by piece.** Each of the 14 pieces takes the same four keys where they apply — `logo`, `padding`, `background`, `enabled` — and an older block is rewritten to that structure on the next run, carrying over every value you had customized. Unknown keys abort the run instead of being ignored.
- **Breaking: one name per thing** across config, flags, `--only` and the `purgetss/brand/` files. `--splash` → `--splash-icon`, `--notification` → `--notification-icon`, `--feature-logo` → `--feature-graphic-logo`, `--legacy-splash` removed. No aliases were kept.
- **New `--only <pieces>` filter** to regenerate one piece or a group, and **`logo-launch.*`** to put your logotype on the iOS launch screen through `LaunchLogo.png`.
- **New `brand.optimize` / `--optimize`**: quantizes the generated PNGs to a palette. Off by default because it is lossy — 1.6 MB to 476 KB on the reference set, indistinguishable on flat artwork.
- `shades` and `semantic` no longer strip every comment from `config.cjs`; they rewrite only the `theme:` section.

### v7.12.1

- `purgetss brand --notes` now targets Titanium's launcher Activity instead of only the app theme. Titanium applies `Theme.Titanium` directly to the generated launcher Activity, so adding splash items only to the `<application>` theme could still leave Android 12+ using the SDK's default background. The notes now print a complete `splashscreen.xml` plus a launcher-only `Theme.SplashScreen` derived from `Theme.Titanium`, with the launch color defined in one place.
- Font Awesome Free updated to 7.3.1 — 23 new icon classes (`.fa-lotus`, `.fa-codeberg`, `.fa-copilot`, `.fa-substack`, `.fa-tesla`, …), none removed.
- `sharp` updated to 0.35.3 and `glob` to 13.0.6.

### v7.12.0

- **Android launch background snippets in `purgetss brand --notes`.** The notes covered the iOS launch image and the Android launcher icon, but never the color Android draws before Titanium creates the first Window — so a run that set a brand background still flashed the default theme color at launch. `--notes` now prints `android:windowSplashScreenBackground` (Android 12+ system splash) and `android:windowBackground` (native window) to merge into the existing app theme.
- `--notes` wording no longer names only `tiapp.xml`: the command edits neither `tiapp.xml` nor the Android theme resources, so it now reads "platform launch/theme snippets".
- `completions-v3.json` reports SDK 13.4.0.GA — metadata label only, the properties map is unchanged.

→ See the [full changelog](changelog) for older releases (v7.11.2 and earlier).
