<p align="center">
	<img src="https://codigomovil.mx/images/logotipo-purgetss-gris.svg" height="230" width="230" alt="PurgeCSS logo"/>
</p>

<div align="center">

![npm](https://img.shields.io/npm/dm/purgetss)
![npm](https://img.shields.io/npm/v/purgetss)
![NPM](https://img.shields.io/npm/l/purgetss)

</div>

:::info
**Purge TSS** is a toolkit designed to enhance the development of mobile applications using the **[Titanium framework](https://titaniumsdk.com)**. It introduces several key features to streamline the app development process, making it simpler and more efficient for developers.

It offers a range of tools such as customizable utility classes, support for icon fonts, a user-friendly Animation module, a straightforward grid system, and the added convenience of the `shades` command for crafting personalized colors.

With **Purge TSS**, creating visually appealing and dynamic mobile apps becomes more accessible and efficient.
:::

Here are its main functionalities:

- **Tailwind-like Utility Classes**: *Purge TSS* offers over 21,000 utility classes similar to Tailwind CSS, providing a vast array of styling options for your projects.
- **Efficient Style Management**: It parses all your XML files to create a clean `app.tss` file, containing only the classes actually used in your project. This helps in reducing file size and improving performance.
- **Customization and JIT Classes**: Developers can customize default classes via a simple configuration file. It also supports just-in-time (JIT) classes, allowing the creation of arbitrary values within views for tailored styling.
- **Icon Fonts Integration**: *Purge TSS* facilitates the use of popular icon fonts such as *Font Awesome*, *Material Icons*, *Material Symbols*, and *Framework7-Icons* in Buttons and Labels.
- **fonts.tss Generation**: This process creates a `fonts.tss` file with class definitions and *fontFamily* selectors for various font types, making it easy to add custom fonts, including icon fonts, to a project.
- **Shades Command**: The toolkit includes a `shades` command that enables developers to generate custom color shades from a specified hex color, eliminating the need for external tools.
- **Animation Module**: *Purge TSS* comes with an Animation module to apply basic 2D Matrix animations or transformations to elements or arrays of elements.
- **Grid System**: It includes a simple yet effective two-dimensional grid system to align and distribute elements within views.

Overall, *Purge TSS* aims to simplify the mobile app development process, offering tools and features that enhance productivity and creativity in designing user interfaces.

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
