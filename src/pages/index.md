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

## What's New in v7.5.0

### Added
- **`extend` support for Window, View, and ImageView** — customize component defaults from `theme.extend` in `config.cjs`
- **Shorthand `apply`** — `{ apply: '...' }` is automatically normalized to `{ default: { apply: '...' } }`
- **Apply directive property deduplication** — applied values win over static defaults instead of duplicating
- **Automatic platform resolution in apply directives** — classes inside `ios:`/`android:` blocks find their platform-specific version automatically
- **Updated Font Awesome to 7.2.0**

### Fixed
- `extend.Window` was silently ignored — both `theme.Window` and `theme.extend.Window` work now
- Duplicate `font` properties in apply directives
- Array-type properties (`extendEdges`, `mediaTypes`, etc.) now correctly wrapped in `[ ]` notation

---

## What's New in v7.4.0

**Animation module expansion.** 10 new methods bring the module to 15 total:

### New methods
- **`transition(views, layouts)`** — multi-view layout transitions using GPU-accelerated `Matrix2D.translate().rotate().scale()`. Compatible with TiDesigner presets
- **`pulse(view, count)`** — scale-up-and-back pulse using native `autoreverse` + `repeat`. Perfect for notification badges
- **`sequence(views, cb)`** — animate views one after another (not parallel like `play`)
- **`swap(view1, view2)`** — animate two views exchanging positions
- **`shake(view, intensity)`** — bidirectional horizontal shake for error/validation feedback
- **`snapTo(view, targets)`** — snap a view to the nearest target by center distance
- **`reorder(views, newOrder)`** — animate views to new positions by index mapping
- **`undraggable(views)`** — remove draggable behavior and clean up all listeners
- **`detectCollisions(views, dragCB, dropCB)`** — collision detection with hover and drop callbacks

### New utility classes
- `snap-back`, `snap-center`, `snap-magnet` — control drop behavior on draggable views
- `keep-z-index` — preserve z-order during drag (for `transition` presets)

### Improvements
- Delta-based drag for views with `rotate`/`scale` transforms
- Position normalization — `swap`, `reorder`, and `snapTo` work without explicit `top`/`left`
- Property inheritance — `swap`, `reorder`, `snapTo`, and `shake` inherit `duration`, `delay`, and `curve` from the `<Animation>` object

See the [Animation Module documentation](docs/animation-module/introduction) for full details.

---

Here are its main functionalities:

- Utility-First Classes: PurgeTSS ships with 21,000+ utility classes, so you get a lot of styling options out of the box.
- Efficient style management: It parses all XML files to create a clean `app.tss` containing only the classes used in your project, reducing size and improving performance.
- Customization and JIT classes: You can customize default classes via a config file and use JIT classes for arbitrary values inside views.
- Icon fonts integration: Use icon fonts such as Font Awesome, Material Icons, Material Symbols, and Framework7-Icons in Buttons and Labels.
- `fonts.tss` generation: The `build-fonts` command creates a `fonts.tss` file with class definitions and fontFamily selectors for regular and icon fonts, with simplified options for filenames and icon prefixes.
- `shades` command: Generate custom color shades from a hex color without external tools.
- Animation module: 2D matrix animations, draggable elements with collision detection, sequential animations, and position-based utilities.
- Grid system: A two-dimensional grid system to align and distribute elements within views.

In short, PurgeTSS keeps styling consistent and removes a lot of repetitive UI setup work.

## Table of Contents

- [Installation](docs/installation)
- [Commands](docs/commands)
- Customization
  - [The Config File](docs/customization/the-config-file)
  - [Custom Rules](docs/customization/custom-rules)
  - [The `apply` Directive](docs/customization/the-apply-directive)
  - [The `opacity` Modifier](docs/customization/the-opacity-modifier)
  - [Arbitrary Values](docs/customization/arbitrary-values)
  - [Platform and Device Modifiers](docs/customization/platform-and-device-modifiers)
  - [Icon Fonts Libraries](docs/customization/icon-fonts-libraries)
- Animation Module
  - [Introduction](docs/animation-module/introduction)
  - [The `play` Method](docs/animation-module/the-play-method)
  - [The `apply` Method](docs/animation-module/the-apply-method)
  - [The `open` and `close` Methods](docs/animation-module/the-open-and-close-methods)
  - [The `draggable` Method](docs/animation-module/the-draggable-method)
  - [Complex UI Elements](docs/animation-module/complex-ui-elements)
  - [Additional Methods](docs/animation-module/additional-methods)
  - [Available Utilities](docs/animation-module/available-utilities)
  - [Implementation Rules](docs/animation-module/implementation-rules)
- [Grid System](docs/grid-system)
