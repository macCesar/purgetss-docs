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

## What's New in v7.4.0

**Bug fix and documentation improvements.** PurgeTSS v7.4.0 fixes a serialization bug in custom rules and improves the Animation module documentation.

### Fixed

- **`backgroundGradient.colors` serialization**: Custom classes using arrays of objects (e.g. gradient color stops) now serialize correctly in `utilities.tss`.

  Previously, defining `colors` as an array of `{ color, offset }` objects in `purgetss/config.cjs` produced broken output:
  ```
  colors: { 0: '[object Object]', 1: '[object Object]' }
  ```
  It now outputs the correct format:
  ```
  colors: [ { color: '#132C50', offset: 0 }, { color: '#0A1529', offset: 1 } ]
  ```
  This fix applies to any array of objects at any depth in your custom rules.

### Documentation

- Added full Animation Module reference to `README.md`: method table, callback event object, array animation patterns, and utility classes.
- Animation module docs updated with the enriched callback event object (`index`, `total`, `getTarget()`).

---

## What's New in v7.3.x

**File rename and improved error handling.** PurgeTSS v7.3 renames `tailwind.tss` to `utilities.tss` to reflect the project's standalone identity, and adds XML syntax validation to catch errors early.

### Breaking changes

- **File rename**: Output file is now `utilities.tss` instead of `tailwind.tss`
  - Generated file: `purgetss/styles/utilities.tss` (was `purgetss/styles/tailwind.tss`)
  - Distribution file: `dist/utilities.tss` (was `dist/tailwind.tss`)

### Major improvements

- **XML syntax validation**: Catches common Alloy XML malformations before processing
  - Detects missing opening `<` brackets (e.g., `Label id=` instead of `<Label id=`)
  - Shows detailed error messages with line numbers, context preview, and fix suggestions
  - Saves debugging time by catching errors early in the build process
- **Classic Titanium compatibility**: `deviceInfo()` function now works in both Alloy and Classic projects
  - Removed dependency on `Alloy.isTablet`/`Alloy.isHandheld`
  - Uses platform-based detection instead

### Migration guide

If you have references to `tailwind.tss` in your project, update them to `utilities.tss`:

```bash
# Update any custom scripts or paths
# From: purgetss/styles/tailwind.tss
# To:   purgetss/styles/utilities.tss
```

For most users, upgrading is straightforward:
```bash
npm install -g purgetss@latest
```

Key changes to note:
- Node.js 20 or higher is now required.
- FontAwesome 7: If you use FA7, PurgeTSS will automatically handle the new `--fa:` properties.
- VS Code extension: We recommend `KevinYouu.tailwind-raw-reorder-tw4` for better compatibility with modern Tailwind versions and XML reordering.
- Clean reinstall: If you run into issues, try `npm uninstall -g purgetss && npm install -g purgetss`.

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
- [Grid System](docs/grid-system)
