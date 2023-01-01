---
sidebar_position: 1
slug: the-config-file
---

# Configuration
By default, **PurgeTSS** will look for a `./purgetss/config.js` file where you can define any customization.

## Creating the `config.js` file

:::info
`config.js` is created automatically when you run `purgetss` for the first time inside your project.
:::

If you need to start with a fresh `config.js` file, you can delete the existing one and run:

```bash
> purgetss init
```

It will create a minimal `./purgetss/config.js` file:

```typescript title="./purgetss/config.js"
module.exports = {
  purge: {
    mode: 'all',
    method: 'sync', // How to execute auto-purging task: sync or async

    // These options are passed directly to PurgeTSS
    options: {
      legacy: false, // Generates & Purge tailwind.tss v5.x classes
      missing: true, // Report missing classes
      widgets: false, // Purge widgets too
      safelist: [], // Array of classes to keep
      plugins: [] // Array of properties to ignore
    }
  },
  theme: {
    extend: {}
  }
};
```

Every section of the config file is optional, so you only specify what you’d like to change. Any missing sections will fall back to the default configuration.

## Structure
The config file consists of three main sections: `purge`, `theme`, and `plugins`.

### `purge` section
To control how `purgetss` will remove unused classes. Or to keep the ones you want.

```typescript title="The purge section"
module.exports = {
  purge: {
    mode: 'all',
    method: 'sync', // How to execute auto-purging task: sync or async

    // These options are passed through directly to PurgeTSS
    options: {
      legacy: false, // Generates & Purge tailwind.tss v5.x classes
      missing: true, // Report missing classes
      widgets: false, // Purge widgets too
      safelist: [], // Array of classes to keep
      plugins: [] // Array of properties to ignore
    }
  },
}
```

- **`mode.all`**

  By default, `purgetss` will look everywhere inside the XML files, like in comments, attributes, classes, ids, Ti Element.

  **This mode is necessary if you want `purgetss` to parse any Ti Element that you've styled in `config.js`**.

- **`mode.method`**

  To set how the **auto-purge** taks will be executed: `sync` (default) or `async`.

  **If you don't see any changes reflected when changing and rebuilding a project with TiKit Components and LiveView, set the compile method to `async`.**.

- **`mode.class`**

  Use `class` to search only in `classes` and `id` attributes in XML files.

- **`options.legacy`**

  Set `legacy` to true to parse all your files as if you were using **PurgeTSS v5.x.x**. However, you will not get any of the new auto-generated classes.

- **`options.missing`**

  Set it to `true` if you want to get a list of any missing or misspelled classes at the end of the `app.tss` file.

  **Very useful if you want to check if you forgot to add a class definition or if you forgot to remove non-existing classes from your `views`.**

- **`options.widgets`**

  Set it to `true` to also parse all the XML files found in the `widgets` folder.

- **`options.safelist`**

  List of classes and Ti Elements that you want to keep regardless of the purge mode or whether or not they are included in the XML files.

  If you need to keep a large list of classes and elements, you can create a CommonJS module with an array of all the styles and require it in `config.js` like this:

  ```typescript title="External safelist"
  module.exports = {
    purge: {
      options: {
        safelist: require('./safelist') // Array of classes to keep
      }
    },
  }
  ```

  You should put it inside `purgetss` to keep everything organized:
  ```typescript title="./purgetss/safelist.js"
  // ./purgetss/safelist.js
  exports.safelist = [
    // A large list of classes to keep
    'Label',
    'Botton',
    'Window',
    'ListView',
    'TableView',
    'Scrollview',
    'ScrollableView',
    // ...
    // ...
    // ...
    'bg-indigo-50',
    'bg-indigo-100',
    // ...
    // ...
    'bg-indigo-800',
    'bg-indigo-900',
  ];
  ```
- **`options.plugins`**
  The `plugins` option lets you completely disable classes that PurgeTSS would normally generate by default if you don’t need them for your project.

  To disable specific classes, provide an array of properties ( or plugins ) to disable:

  ```typescript title="The plugins section"
  module.exports = {
    purge: {
      options: {
        plugins: [
          opacity,
          borderRadius
        ]
      }
    },
  }
  ```

### `theme` section
The `theme` section in `config.js`, is where you define AND extend your project's color palette, type scale, font stacks, border radius values, and many more properties.

```typescript title="The theme section"
module.exports = {
  theme: {
    fontFamily: {
      display: 'AlfaSlabOne-Regular',
      body: 'BarlowSemiCondensed-Regular'
    },
    borderWidth: {
      DEFAULT: 1,
      0: 0,
      2: 2,
      4: 4,
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        96: '24rem',
        128: '32rem',
      }
    }
  }
}
```

## Overriding and extending properties
Out of the box, your project will automatically inherit the values from the default theme configuration. If you want to customize it, you have two different options depending on your goals.

### Overriding properties
To override a default property, add it directly in `theme`.

```typescript
module.exports = {
  theme: {
    // Replaces all of the default `opacity` values
    opacity: {
      15: '0.15',
      35: '0.35',
      65: '0.65',
      85: '0.85'
    }
  }
}
```
This will completely replace the original default `opacity` values with the new ones.

:::info
Any keys you do not provide will be inherited from the default theme, so in the above example, the default theme configuration for things like colors, spacing, border radius, background position, etc. will be preserved.
:::

### Extending properties
If you want to preserve the default values for a theme option but also add new values, add your extensions under the `theme.extend` key.

For example, if you want to add an extra color but preserve the existing ones, you could extend the `colors` section:

```typescript
module.exports = {
  theme: {
    extend: {
      // Adds a new color in addition to the default colors
      colors: {
        primary: '#002359',
      }
    }
  }
}
```

You can of course override some parts of the default theme and extend others within the same configuration:

```typescript
module.exports = {
  theme: {
    opacity: {
      15: '0.15',
      35: '0.35',
      65: '0.65',
      85: '0.85'
    },
    extend: {
      colors: {
        primary: '#002359',
      }
    }
  }
}
```

## Customizing Colors
Customizing the default color palette for your project.

**PurgeTSS** includes tailwind's default color palette. But when you do need to customize your palette, you can configure your colors under the `colors` key in the `theme` section of your `config.js` file:

```typescript title="Customizing Colors"
module.exports = {
  theme: {
    colors: {
      // Configure your color palette here
    }
  }
}
```

### Using custom colors
If you’d like to completely replace the default color palette with your own custom colors, add them directly under the `theme.colors` section of your configuration file:

```typescript title="Using custom colors"
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
    },
  },
}
```

By default, these colors will be available everywhere in the framework where you use colors, like the text color, border color, background color utilities, and more.

### Color object syntax
Colors are defined as a simple list of key-value pairs, or as nested object notation. The nested keys are added to the base color name as modifiers.

```typescript title="Color object syntax"
module.exports = {
  theme: {
    colors: {
      highlight: '#ffff00',
      primary: {
        solid: '#002359',
        dark: '#000030',
        transparent: '#D9002359'
      },
      tahiti: {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    }
  }
};
```
The nested keys will be combined with the parent key to form class names like `bg-tahiti-400` or `text-tahiti-400`.

### Overriding a default color
If you want to override one of the default colors but preserve the rest, simply provide the new values in the `theme.extend.colors` section of your `config.js` file.

For example, here we've replaced the default cool grays with a neutral gray palette:
```typescript title="Overriding a default color"
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#c8c8c8',
          400: '#adadad',
          500: '#9e9e9e',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#545454'
        }
      }
    }
  }
}
```

### Extending the default palette
If you want to to extend the default color palette, you can do so using the `theme.extend.colors` section of your `config.js` file:

```typescript title="Extending the default palette"
module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      }
    }
  }
}
```

This will generate classes like bg-regal-blue in addition to all of Tailwind's default colors.

:::info
You can use the `shades` command to generate a range of shades for a given color, automatically adding them to your `config.js` file.

**For more info see the** [**shades command**](/docs/commands#shades-command).
:::

## Customizing Spacing
Customizing the default spacing and sizing scale for your project.

The `spacing` section allows you to customize the global spacing and sizing scale values.

```typescript title="Customizing Spacing"
module.exports = {
  theme: {
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    }
  }
}
```
By default the spacing scale is inherited by the padding, margin, width, height and gap core plugins.

### Shared spacing
The `spacing` section is shared by the `padding`, `margin`, `width`, and `height` properties.

> **When you include the `spacing` section, `PurgeTSS` will automatically generate all spacing-related properties and merge them with any other spacing-related properties present in the configuration file.**

```typescript title="Shared spacing"
module.exports = {
  theme: {
    spacing: {
      tight: '0.25rem',
      loose: '1.0rem'
    },
    width: {
      banner: '5rem'
    },
    height: {
      xl: '3rem',
      '1/3': '33.333333%'
    }
  }
};
```

```scss
// width Property
'.w-tight': { width: 4 }
'.w-loose': { width: 16 }
'.w-banner': { width: 80 }

// height Property
'.h-tight': { height: 4 }
'.h-loose': { height: 16 }
'.h-xl': { height: 48 }
'.h-1/3': { height: '33.333334%' }

// Margin
'.m-tight': { top: 4, right: 4, bottom: 4, left: 4 }
'.m-loose': { top: 16, right: 16, bottom: 16, left: 16 }
'.my-tight': { top: 4, bottom: 4 }
'.my-loose': { top: 16, bottom: 16 }
    ...

// padding Property
'.p-tight': { padding: { top: 4, right: 4, bottom: 4, left: 4 } }
'.p-loose': { padding: { top: 16, right: 16, bottom: 16, left: 16 } }
'.py-tight': { padding: { top: 4, bottom: 4 } }
'.py-loose': { padding: { top: 16, bottom: 16 } }
    ...

// Rest of inherited properties
```

### Overriding the default spacing scale
If you want to override the default spacing scale, you can do so using the `theme.spacing` section of your `config.js` file:
```typescript title="Overriding the default spacing scale"
module.exports = {
  theme: {
    spacing: {
      sm: 8,
      md: 12,
      lg: 16,
      xl: 24,
    }
  }
}
```

This will disable the default spacing scale and generate classes like `p-sm` for padding, `m-md` for margin, `w-lg` for width, and `h-xl` for height instead.

### Extending the default spacing scale
If you want to extend the default spacing scale, you can do so using the `theme.extend.spacing` section of your `config.js` file:
```typescript title="Extending the default spacing scale"
module.exports = {
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      }
    }
  }
}
```

This will generate classes like `p-72`, `m-84`, and `h-96` in addition to all of the default spacing/sizing utilities.

## List of customizable properties

### Global properties
- All Color properties will inherit from the `theme.colors` property.
- All Spacing properties will inherit from the `theme.spacing` property.

You can customize any of the following properties individually by adding them in the `theme` section of your `config.js` file, or by extending them in the `theme.extend` section.

### Color properties

- activeTintColor
- activeTitleColor
- backgroundColor
- backgroundDisabledColor
- backgroundFocusedColor
- backgroundGradient
- backgroundSelectedColor
- backgroundSelectedGradient
- badgeColor
- barColor
- borderColor
- color
- color-alternative
- colors
- currentPageIndicatorColor
- dateTimeColor
- disabledColor
- highlightedColor
- hintTextColor
- imageTouchFeedbackColor
- indicatorColor
- keyboardToolbarColor
- lightColor
- navTintColor
- onTintColor
- pageIndicatorColor
- pagingControlColor
- pullBackgroundColor
- resultsBackgroundColor
- resultsSeparatorColor
- selectedBackgroundColor
- selectedButtonColor
- selectedColor
- selectedSubtitleColor
- selectedTextColor
- separatorColor
- shadowColor
- statusBarBackgroundColor
- subtitleColor
- subtitleTextColor
- tabsBackgroundColor
- tabsBackgroundSelectedColor
- thumbTintColor
- tintColor
- titleAttributes
- titleColor
- titleTextColor
- touchFeedbackColor
- trackTintColor
- viewShadowColor

### Configurable properties

- activeTab
- backgroundLeftCap
- backgroundPaddingBottom
- backgroundPaddingLeft
- backgroundPaddingRight
- backgroundPaddingTop
- backgroundTopCap
- borderRadius
- borderWidth
- bottom
- cacheSize
- columnCount
- contentHeight
- contentWidth
- countDownDuration
- delay
- duration
- elevation
- fontSize
- height
- horizontalMargin
- indentionLevel
- keyboardToolbarHeight
- left
- leftButtonPadding
- leftTrackLeftCap
- leftTrackTopCap
- leftWidth
- lineHeightMultiple
- lines
- lineSpacing
- maxElevation
- maximumLineHeight
- maxLines
- maxRowHeight
- maxZoomScale
- minimumFontSize
- minimumLineHeight
- minRowHeight
- minZoomScale
- opacity
- padding
- paddingBottom
- paddingLeft
- paddingRight
- paddingTop
- pageHeight
- pageWidth
- pagingControlAlpha
- pagingControlHeight
- pagingControlTimeout
- paragraphSpacingAfter
- paragraphSpacingBefore
- repeat
- repeatCount
- right
- rightButtonPadding
- rightTrackLeftCap
- rightTrackTopCap
- rightWidth
- rotate
- rowCount
- rowHeight
- scale
- scalesPageToFit
- scaleX
- scaleY
- sectionHeaderTopPadding
- separatorHeight
- shadowRadius
- shiftMode
- timeout
- top
- uprightHeight
- uprightWidth
- verticalMargin
- width
- xOffset
- yOffset
- zIndex
- zoomScale

### Custom rules & Ti Elements
- Your own custom rules and ANY Ti Element with ANY number of attributes or conditional statements. See the [**Custom Rules section**](../customization/custom-rules) for more information.
