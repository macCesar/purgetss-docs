<p align="center">
	<img src="https://codigomovil.mx/images/logotipo-purgetss-gris.svg" height="230" width="230" alt="PurgeCSS logo"/>
</p>

<div align="center">

![npm](https://img.shields.io/npm/dm/purgetss)
![npm](https://img.shields.io/npm/v/purgetss)
![NPM](https://img.shields.io/npm/l/purgetss)

</div>

:::info
**PurgeTSS** is a toolkit designed to enhance the development of mobile applications using the **[Titanium framework](https://titaniumsdk.com)**. It introduces several key features to streamline the app development process, making it simpler and more efficient for developers.

It offers a range of tools such as customizable utility classes, support for icon fonts, a user-friendly Animation module, a straightforward grid system, and the added convenience of the `shades` command for crafting personalized colors.

With **PurgeTSS**, creating visually appealing and dynamic mobile apps becomes more accessible and efficient.
:::

## What's New in v7.1.0

**Major Refactoring & ESM Migration**: PurgeTSS v7.1 has been completely refactored with improved code organization, better ESM compatibility, enhanced error handling, and a more intuitive CLI experience.

### ⚠️ Breaking Changes

- **Node.js 16+** required (ESM support)
- **Configuration file**: `config.js` → `config.cjs` (same content, different extension for CommonJS compatibility)
- **Removed deprecated commands**:
  - `copy-fonts` (use `icon-library` instead)
  - `build-legacy` (legacy Tailwind build removed)
- **Complete legacy mode removal**:
  - All legacy-related code and conditional checks eliminated
  - Legacy mode no longer supported anywhere in the codebase
  - `purge.options.legacy` configuration option completely removed
- **Simplified font generation**:
  - `build-fonts` `-p` flag removed (now handled by `-f` flag)
  - `build-fonts` command options simplified for better consistency
- **Updated dependencies** to latest ESM versions (chalk v5+, etc.)

### ✅ What's Maintained

- **Same CLI interface** - All commands and options preserved
- **100% API compatibility** - All existing commands work the same
- **Same configuration structure** - Your existing config content works unchanged

### 🔄 Command Improvements

- **Enhanced CLI error handling**: Improved error messages with command suggestions when unknown commands are entered
- **CLI reorganization**: Commands are now organized in logical categories (Setup, Development, Assets, Utilities, Maintenance) for better discoverability
- **`build-fonts` simplified**:
  - Removed `-p` (--icon-prefix-from-filename) flag
  - The `-f` flag now controls both font class names AND icon prefixes using filenames
  - More consistent and intuitive behavior
- **Internal code modularization**: Refactored monolithic helper files into specialized modules for better maintainability
- **Complete legacy mode removal**: Removed `build-legacy` command and all legacy-related code for cleaner, modern codebase

### 🔧 Migration Guide

For most users, upgrading is seamless:
```bash
npm install -g purgetss@7.1.0
```

**Key changes to note:**
- Only requirement: **Node.js 16 or higher**
- If you used the `build-legacy` command, use the regular `build` command instead
- **Enhanced CLI**: Unknown commands now provide helpful suggestions instead of generic errors
- If you had `legacy: true` in your config, remove this option (legacy mode completely discontinued)
- If you used `build-fonts` with the `-p` flag, now use `-f` instead (handles both font classes and icon prefixes)

---

Here are its main functionalities:

- **Tailwind-like Utility Classes**: *PurgeTSS* offers over 21,000 utility classes similar to Tailwind CSS, providing a vast array of styling options for your projects.
- **Efficient Style Management**: It parses all your XML files to create a clean `app.tss` file, containing only the classes actually used in your project. This helps in reducing file size and improving performance.
- **Customization and JIT Classes**: Developers can customize default classes via a simple configuration file. It also supports just-in-time (JIT) classes, allowing the creation of arbitrary values within views for tailored styling.
- **Icon Fonts Integration**: *PurgeTSS* facilitates the use of popular icon fonts such as *Font Awesome*, *Material Icons*, *Material Symbols*, and *Framework7-Icons* in Buttons and Labels.
- **fonts.tss Generation**: The `build-fonts` command creates a `fonts.tss` file with class definitions and fontFamily selectors for various font types. It supports both regular fonts and icon fonts, with simplified options for using filenames as class names and icon prefixes.
- **Shades Command**: The toolkit includes a `shades` command that enables developers to generate custom color shades from a specified hex color, eliminating the need for external tools.
- **Animation Module**: *PurgeTSS* comes with an Animation module to apply basic 2D Matrix animations or transformations to elements or arrays of elements.
- **Grid System**: It includes a simple yet effective two-dimensional grid system to align and distribute elements within views.

Overall, *PurgeTSS* aims to simplify the mobile app development process, offering tools and features that enhance productivity and creativity in designing user interfaces.

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
  - [Available Utilities](docs/animation-module/available-utilities)
- [Grid System](docs/grid-system)
