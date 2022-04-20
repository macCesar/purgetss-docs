---
sidebar_position: 4
slug: the-opacity-modifier
---

# The opacity modifier

:::info
You can add an **opacity modifier to ANY of the available color properties**, by adding an **opacity-value** between 0 and 100 to the end of the color name separated with a slash ( / ).
:::

## In your XML files

```xml
<Label class="w-11/12 h-8 text-center bg-sky-500/50 text-purple-900/75">My Button</Label>
```

```css
// Tailwind styles
'Window': { backgroundColor: '#ffffff' }
'.h-8': { height: 32 }
'.text-center': { textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER }
'.w-11/12': { width: '91.666667%' }

// Styles with color opacity modifiers
'.bg-sky-500/50': { backgroundColor: '#800ea5e9' }
'.text-purple-900/75': { color: '#bf581c87' }
```

## In the `apply` directive
You can also use color opacity modifiers in the `apply` directive in your `config.js` file.

```js title="./purgetss/config.js"
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ce10cc'
      }
    },
    '.main-banner': {
      apply: [
        'bg-primary/35',
        'border-primary/75'
      ]
    }
  }
}
```

```css title="Generated classes"
// Custom Styles and Resets
'.main-banner': { backgroundColor: '#59ce10cc', borderColor: '#bfce10cc' }

// backgroundColor Property
'.bg-primary': { backgroundColor: '#ce10cc' }
```

## List of color properties
You can set a transparency value to any of the following color properties:

- **active-tint-**{color}/opacity-value
- **active-title-**{color}/opacity-value
- **badge-**{color}/opacity-value
- **bar-**{color}/opacity-value
- **bg-**{color}/opacity-value
- **bg-focused-**{color}/opacity-value
- **bg-selected-**{color}/opacity-value
- **bg-selected-from-**{color}/opacity-value
- **bg-selected-to-**{color}/opacity-value
- **border-**{color}/opacity-value
- **current-page-indicator-**{color}/opacity-value
- **date-time-**{color}/opacity-value
- **disabled-**{color}/opacity-value
- **drop-shadow-**{color}/opacity-value
- **from-**{color}/opacity-value
- **highlighted-**{color}/opacity-value
- **image-touch-feedback-**{color}/opacity-value
- **indicator-**{color}/opacity-value
- **keyboard-toolbar-**{color}/opacity-value
- **nav-tint-**{color}/opacity-value
- **on-tint-**{color}/opacity-value
- **page-indicator-**{color}/opacity-value
- **paging-control-**{color}/opacity-value
- **placeholder-**{color}/opacity-value
- **pull-bg-**{color}/opacity-value
- **results-bg-**{color}/opacity-value
- **results-separator-**{color}/opacity-value
- **selected-**{color}/opacity-value
- **selected-button-**{color}/opacity-value
- **selected-subtitle-**{color}/opacity-value
- **selected-text-**{color}/opacity-value
- **separator-**{color}/opacity-value
- **shadow-**{color}/opacity-value
- **subtitle-**{color}/opacity-value
- **tabs-bg-**{color}/opacity-value
- **tabs-bg-selected-**{color}/opacity-value
- **text-**{color}/opacity-value
- **thumb-tint-**{color}/opacity-value
- **tint-**{color}/opacity-value
- **title-**{color}/opacity-value
- **title-attributes-**{color}/opacity-value
- **title-attributes-shadow-**{color}/opacity-value
- **title-text-**{color}/opacity-value
- **to-**{color}/opacity-value
- **touch-feedback-**{color}/opacity-value
- **track-tint-**{color}/opacity-value
