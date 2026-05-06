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

### v7.8.0

- `images` now has a `--width <n>` flag. It pins Android `mdpi` (= iPhone `@1x`) to a specific pixel width, for example `purgetss images logo.svg --width 256`. Larger scales derive at ×1.5, ×2, ×3, and ×4, with height staying proportional to the source's aspect ratio. Use this for SVG sources from vector editors with disproportionate viewBoxes, such as Affinity or Illustrator. Without the flag, every scale derives from the source's viewBox as a 4× master, which can produce unpredictable sizes when the viewBox does not match the intended display size. When you pass an SVG without `--width`, the command prints a one-time hint and then falls back to the legacy 4× behavior. This is CLI-only; there is no matching `images:` config property because the right width is per-asset.
- Class syntax pre-validation now stops `purgetss` with a structured `Class Syntax Error` block (file + line + suggested fix) when it detects known class-name mistakes: inverted negative sign (`top-(-10)` → `-top-(10)`), Tailwind-style brackets (`top-[10px]` → `top-(10px)`), empty parentheses (`wh-()`), whitespace inside parentheses (`wh-( 200 )`), and redundant `px` unit (`top-(10px)` → `top-(10)`). All offenders are reported in one run. Generic unknown classes, such as typos, vendor utilities not enabled, or custom classes not declared yet, are not flagged. They still flow into the `// Unused or unsupported classes` block in `app.tss`.
- The arbitrary-value parser no longer crashes on negative values inside parentheses. Classes like `top-(-10)`, `mt-(-5)`, and `origin-(-10,-20)` used to trigger a `Cannot read properties of null (reading 'pop')` exception. The parser now extracts the `(...)` portion first, so a `-` inside the value does not break the split.

### v7.7.0

- The `brand` config was cleaned up before stabilizing. Branding settings now live under grouped sections: `brand.logos`, `brand.padding`, `brand.android`, `brand.ios`, and `brand.colors`.
- `brand` can now use separate Android inputs: one logo for the general brand set, another for Android launcher icons, and another for Android 12+ splash artwork. Use `brand.logos.androidLauncher` / `--icon-logo` and `brand.logos.androidSplash` / `--splash-logo`, or drop `logo-icon.*` and `logo-splash.*` into `purgetss/brand/`.
- `purgetss brand` now regenerates the legacy Android splash fallback: `app/assets/android/default.png` in Alloy projects and `Resources/android/default.png` in Classic projects.
- `cleanup-legacy` no longer removes `default.png`, because that file can still matter on older Titanium Android splash paths.
- The branding docs now explain what uses `ic_launcher`, what uses `splash_icon.png`, and what still falls back to `default.png`.

### v7.6.2

- The `semantic` command now works in Classic Titanium projects. It writes to `Resources/semantic.colors.json`; Alloy keeps writing to `app/assets/semantic.colors.json`. Existing unrelated entries, such as the default `backgroundColor` / `textColor` values that ship with Classic templates, are preserved in both project types. See [Semantic Colors](docs/best-practices/semantic-colors)
- Fixed a UX bug where the "not an Alloy project" error was immediately followed by the palette preview JSON, making it look like the command half-succeeded.

### v7.6.1

- `brand` and `images` now ask before destructive writes (`y` / `N` / `a` for "always"). The prompt is skipped when `stdin` is not a TTY (alloy.jmk hook, CI, pipes), when `-y` / `--yes` is passed, or when `PURGETSS_YES=1` is set. Set `confirmOverwrites: false` on the matching config section to silence it permanently.
- SVG logos and images now get a disproportionate-viewBox warning. The command detects viewBoxes above 4096 pt on any side, common in Affinity and Illustrator exports, and rasterizes with adaptive density to stay within Sharp's pixel budget.
- `init` now creates `purgetss/{fonts,brand,images}/` subfolders.
- Multi-line command output is now grouped under a single `::PurgeTSS::` header with indented continuation lines. This applies across `purge`, `fonts`, `icon-library`, `brand`, `images`, and most warnings.

### v7.6.0

- The new `brand` command generates the Titanium branding set from logos auto-discovered in `./purgetss/brand/`: launcher icons, adaptive icons, iOS 18+ Dark/Tinted variants, marketplace artwork, and optional notification/splash assets. Works on Alloy and Classic projects. See [App icons and branding](docs/app-assets/app-icons-and-branding)
- The new `images` command generates multi-density UI images from sources in `./purgetss/images/`: Android `res-*` densities and iPhone `@1x`/`@2x`/`@3x` scales. Subdirectories are preserved, and short paths can target individual files for re-processing. See [Multi-density images](docs/app-assets/multi-density-images)
- `brand:` and `images:` config sections were added to `purgetss/config.cjs`. Percentages can be written as `'15%'` strings for clarity; plain numbers are also accepted. Older configs get these sections on first run.
- The new `semantic` command generates Titanium semantic colors (Light/Dark mode) into `app/assets/semantic.colors.json`. `--single` switches between a tonal palette (one base hex → 11 shades with mirror inversion + auto config mapping) and a purpose-based color (explicit per-mode hex + optional alpha). The JSON entry and class mapping in `config.cjs` are written in one shot. Class names are derived by stripping the `Color` suffix, for example `surfaceColor` → `surface`. Smart in-place updates run when a single name matches an existing palette shade. See [Semantic Colors: generating semantic colors with the `semantic` command](docs/best-practices/semantic-colors#generating-semantic-colors-with-the-semantic-command)

### v7.5.3

- New `Appearance` export for Light/Dark/System mode switching with persistence. Methods: `init()`, `set(mode)`, `get()`, `toggle()`. See [Appearance Setup](docs/best-practices/appearance-setup)
- Default font family classes are generated automatically with platform-appropriate values: `font-sans`, `font-serif`, and `font-mono`.
- XML validation now detects illegal `--` inside XML comments during pre-validation.

### v7.5.0

- `extend` support for Window, View, and ImageView. Component defaults can now be customized from `theme.extend` in `config.cjs`.
- Shorthand `apply`: `{ apply: '...' }` is automatically normalized, so the `default:` wrapper is optional.
- Property deduplication: applied values win over static defaults instead of duplicating.
- Automatic platform resolution: classes inside `ios:` / `android:` blocks find their platform-specific version automatically.
- Font Awesome 7.2.0
- Fixed: `extend.Window` silently ignored, duplicate `font` properties, array-type properties missing `[ ]` notation

### v7.4.0

Animation module expansion: 9 new methods bring the module to 15 total.

- `transition`, `pulse`, `sequence`, `swap`, `shake`, `snapTo`, `reorder`, `undraggable`, `detectCollisions`
- New utility classes: `snap-back`, `snap-center`, `snap-magnet`, `keep-z-index`
- Delta-based drag for transformed views, position normalization, property inheritance from the Animation object

See the [UI Module documentation](docs/purgetss-ui/introduction) for full details.

### v7.3.0

- BREAKING: `tailwind.tss` was renamed to `utilities.tss`.
- XML syntax validation adds pre-validation for Alloy XML files with line numbers and fix suggestions.
- Classic Titanium compatibility: `deviceInfo()` works without Alloy dependencies.

### v7.2.7

- Security fixes for command injection in `glob` and prototype pollution in `js-yaml`.
- Dependency cleanup reduced installation size by about 45MB and removed unused packages.
- Titanium SDK 13.1.0.GA: new utility classes for `navBarColor`, `forceBottomPosition`, and `multipleWindows`.

### v7.2.6

- Updated Font Awesome to version 7.1.0
- Simplified flag property names in utilities.tss
