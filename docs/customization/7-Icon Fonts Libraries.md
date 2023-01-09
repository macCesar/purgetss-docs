---
sidebar_position: 7
slug: icon-fonts-libraries
---

# Icon Fonts Libraries

:::info official icon fonts for **PurgeTSS**

Previous versions of **PurgeTSS** included several icon fonts libraries such as Bootstrap Icons, Boxicons, LineIcons, and Tabler Icons. **However, adding more icon fonts was getting out of control**.

**As a result, we have decided to leave the following fonts as the official icon fonts for PurgeTSS:**

- [Font Awesome 6 Free](https://fontawesome.com)
- [Framework 7](https://framework7.io/icons/)
- [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons)
- [Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols)

:::

## Recreating the deleted libraries
The good news is that you can recreate them using the `build-fonts` command:

### 1. Download the libraries
Start by downloading the libraries from their official websites:

- [Bootstrap Icons](https://icons.getbootstrap.com)
- [Boxicons](https://boxicons.com)
- [LineIcons](https://lineicons.com/icons/?type=free)
- [Tabler Icons](https://tabler-icons.io)

### 2. The `fonts` folder
Put the desired libraries in the `./purgetss/fonts` folder

:::info
You just need to copy the **TrueType** or **OpenType** font files and the `.css` file.
:::

```bash title="./purgetss/fonts/"
purgetss
└─ fonts
   └─ boxicons
      ├─ boxicons.css
      └─ boxicons.ttf
   └─ lineicons
      ├─ lineicons.css
      └─ lineicons.ttf
```

### 3. The `build-fonts` command
Run the `build-fonts` command to create a custom `fonts.tss` file.

```bash
$ purgetss build-fonts [--modules]

# alias:
$ purgetss bf [-m]
```

#### The `fonts.tss` file
The `build-fonts` command will generate a custom `./purgetss/styles/fonts.tss` file with all the unicode characters and style rules.

```scss title="./purgetss/syles/fonts.tss"
'.boxicons': { font: { fontFamily: 'boxicons' } }
'.lineicons': { font: { fontFamily: 'LineIcons' } }

// Unicode Characters
// To use your Icon Fonts in Buttons AND Labels each class sets 'text' and 'title' properties

// boxicons.css
'.bxl-meta': { text: '\uef27', title: '\uef27' }
'.bx-lemon': { text: '\uef28', title: '\uef28' }
'.bxs-lemon': { text: '\uef29', title: '\uef29' }
// ...

// lineicons.css
'.lni-500px': { text: '\uea03', title: '\uea03' }
'.lni-add-files': { text: '\uea01', title: '\uea01' }
'.lni-adobe': { text: '\uea06', title: '\uea06' }
// ...
```

#### Renaming the style rule name
**PurgeTSS** will use the font's file name as the style rule name. **You can change it by renaming the font file**.

```bash title="./purgetss/fonts/"
# Root of the project
purgetss
└─ fonts
   └─ boxicons
      └─ bx.ttf
```

New style rule name: `'.bx'`
```scss title="./purgetss/syles/fonts.tss"
// new style rule name
'.bx': { font: { fontFamily: 'boxicons' } }
```

#### The `assets/fonts` folder
The `build-fonts` command will copy the font files to `./app/assets/fonts` folder and rename them to their corresponding **PostScript** name to work on both iOS and Android apps.

```bash title="./app/assets/fonts/"
app
└─ assets
   └─ fonts
      ├─ boxicons.ttf
      └─ LineIcons.ttf
```

#### The `--modules` flag
When using the `--modules` option, it will generate a `./app/lib/purgetss.fonts.js` CommonJS module file

```typescript title="./app/lib/purgetss.fonts.js"
const icons = {
  // boxicons
  'boxicons': {
    'bxlMeta': '\uef27',
    'bxLemon': '\uef28',
    'bxsLemon': '\uef29',
    // ...
  },
  // lineicons
  'lni': {
    '500px': '\uea03',
    'addFiles': '\uea01',
    'adobe': '\uea06',
    // ...
  }
};
exports.icons = icons;
```

#### The icon’s `prefix`
**PurgeTSS** will try to guess the group's prefix for each icon family.

If it can't guess it or there is none, it will use the `.css` file name as the prefix. **You can change it by renaming the styles file**.

```bash title="./purgetss/fonts/"
purgetss
└─ fonts
   └─ boxicons
      └─ bx.css
```

New group prefix: `bx`

```typescript title="./app/lib/purgetss.fonts.js"
const icons = {
  // bx
  // New group prefix
  'bx': {
    // ...
  },
  // ...
};
exports.icons = icons;
```
