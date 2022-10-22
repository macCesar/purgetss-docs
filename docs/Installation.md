---
sidebar_position: 1
slug: installation
---

**Install it globally on your machine via [NPM](https://www.npmjs.com/).**

```bash
> [sudo] npm i -g purgetss
```

:::caution Max Node version

Please use up to V16.x of Node.js

:::

## Running PurgeTSS for the first time

:::info
**You will need to run `purgetss` only once inside your project to automatically generate the necessary files and folders**.

Subsequently, each time you build your application, **PurgeTSS** will `parse` all your XML files and output a clean `app.tss` file with only the classes used in your project.
:::

When you run `purgetss` for the first time in your project it will do the following tasks for you.

### 1. Auto-Run Hook
It will add a `hook` in `alloy.jmk` to auto-run `purgetss` everytime you compile your app. **Very useful when using `liveview`.**

### 2. purgetss folder
It will create a `purgetss` folder at the root of your project with the following files and folder:

- **config.js file**

  Where you can customize or create new classes with you own spacing, colors, and margin values and more. See **[Customization Section](customization/the-config-file)** for more details.

- **tailwind.tss file**

  It contains all Tailwind-like utility classes, including all your custom classes defined in `config.js`.

- **definitions.css file**

  Is a special `css` file that includes ALL the classes from `tailwind.tss`, `_app.tss`, any `.tss` left in your project, and `fonts.tss` files, including all the classes from the official icon fonts libraries to be used with [**“Intellisencse for CSS class names in HTML”**](#vscode-extension) VS Code extension.

- **fonts folder**

  Where you can add any Icon, Serif, Sans-Serif, Cursive, Fantasy or Monospace fonts to be used in your app. See [**build-fonts command**](Commands#build-fonts-command)) for a step-by-step instructions.

:::caution IMPORTANT NOTICE!!!

**PurgeTSS will OVERWRITE your existing `app.tss` file**

When you run **PurgeTSS** for the first time, it will backup your `app.tss` file to `_app.tss`.

From this moment, add, delete or update your custom classes in `_app.tss`.

**Or even better! Add your custom values in `config.js`. See the [Configuration Section](customization/the-config-file)**.

:::

## Example files
**Steps to use the example files:**
- Copy the content of `index.xml` and `app.tss` into a new Alloy project.
- Install Font Awesome font files with `purgetss fonts --vendor="fontawesome"`.
- **Run `purgetss` once to generate de necesary files**.
- Compile your app as usual.
- **We recommend that you use `liveview` to speed up testing and development time**.

```xml title="index.xml
<Alloy>
  <Window class="bg-primary">
    <View class="w-10/12 h-auto bg-white rounded-lg">
      <View class="m-4 vertical">
        <ImageView class="w-16 h-16 mx-auto rounded-16" image="https://randomuser.me/api/portraits/men/43.jpg" />

        <View class="vertical">
          <Label class="text-lg font-semibold text-center text-gray-900">John W. Doe</Label>
          <Label class="text-sm text-center text-purple-600 mt-0.5">Product Engineer</Label>

          <View class="w-screen mt-6">
            <View class="ml-0 horizontal">
              <Label class="mr-1 text-xs text-gray-600 far fa-envelope"></Label>
              <Label class="text-xs text-gray-600">john@internet.com</Label>
            </View>

            <View class="mr-0 horizontal">
              <Label class="mr-1 text-xs text-gray-600 fas fa-phone-alt"></Label>
              <Label class="text-xs text-gray-600">(555) 765-4321</Label>
            </View>
          </View>
        </View>
      </View>
    </View>
  </Window>
</Alloy>
```

```scss title="app.tss"
'.bg-primary': {
  backgroundColor: '#002359'
}
```

:::info
**After running `purgetss` you will have a new `app.tss` file with only the classes used in your XML files.**

Your original `app.tss` file is backed up in `_app.tss`. Use this file if you need to add, delete or update any of your original styles.

Every time **PurgeTSS** runs, it will copy the content of `_app.tss` to `app.tss`.
:::

```scss title="app.tss after purging"
// PurgeTSS
// Created by César Estrada
// https://github.com/macCesar/purgeTSS

// Styles from _app.tss
'.bg-primary': {
  backgroundColor: '#002359'
}

// Main styles
'View': { width: Ti.UI.SIZE, height: Ti.UI.SIZE }
'ImageView[platform=ios]': { hires: true }
'Window': { backgroundColor: '#ffffff' }
'.m-4': { top: 16, right: 16, bottom: 16, left: 16 }
'.mx-auto': { right: null, left: null }
'.mt-6': { top: 24 }
'.mt-0.5': { top: 2 }
'.mr-0': { right: 0 }
'.mr-1': { right: 4 }
'.ml-0': { left: 0 }
'.rounded-16': { borderRadius: 32 }
'.rounded-lg': { borderRadius: 8 }
'.text-xs': { font: { fontSize: 12 } }
'.text-sm': { font: { fontSize: 14 } }
'.text-lg': { font: { fontSize: 18 } }
'.font-semibold': { font: { fontWeight: 'semibold' } }
'.text-gray-600': { color: '#4b5563', textColor: '#4b5563' }
'.text-gray-900': { color: '#111827', textColor: '#111827' }
'.text-purple-600': { color: '#9333ea', textColor: '#9333ea' }
'.bg-white': { backgroundColor: '#ffffff' }
'.h-16': { height: 64 }
'.h-auto': { height: Ti.UI.SIZE }
'.vertical': { layout: 'vertical' }
'.horizontal': { layout: 'horizontal' }
'.w-16': { width: 64 }
'.w-10/12': { width: '83.333334%' }
'.w-screen': { width: Ti.UI.FILL }
'.text-center': { textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER }

// Default Font Awesome styles
'.fa-envelope': { text: '\uf0e0', title: '\uf0e0' }
'.fa-phone-alt': { text: '\uf879', title: '\uf879' }
'.far': { font: { fontFamily: 'FontAwesome6Free-Regular' } }
'.fas': { font: { fontFamily: 'FontAwesome6Free-Solid' } }
```

![iOS Screen - Example](images/sample-fixed.png)

**More examples in the [Tailwind TSS Sample App](https://github.com/macCesar/tailwind.tss-sample-app)**

## VSCode extension
If you're using **[Visual Studio Code](https://code.visualstudio.com)**, we recommend that you install **[IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)** extension.

It provides class name completion for the `XML` class attribute based on the `definitions.css` file created by PurgeTSS.

![Class Completion using IntelliSense for CSS class names in HTML](images/class-completion-2.gif)

After installing the extension, you'll need to add the `xml` language to the `"HTMLLanguages"` setting and exclude any `css/html` files from the caching process by pointing `"excludeGlobPattern"` to the `./purgetss/fonts/` folder.


```json title="VS Code ‘settings.json’ file"
{
  "html-css-class-completion.HTMLLanguages": [
    "html",
    "vue",
    "razor",
    "blade",
    "handlebars",
    "twig",
    "django-html",
    "php",
    "markdown",
    "erb",
    "ejs",
    "svelte",
    "xml",
  ],
  "html-css-class-completion.excludeGlobPattern": "**/node_modules/**,purgetss/fonts/**/*.{css,html}",
}
```
