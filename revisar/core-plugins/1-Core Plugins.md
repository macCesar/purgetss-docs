---
sidebar_position: 3
slug: core-plugins
---

# Core Plugins

All modifications made in `./purgetss/config.js` will be generated into a custom `tailwind.tss`.

## Background Colors
Utilities for controlling an element's background color.
```javascript
module.exports = {
  'theme': {
    'backgroundColor': {
      'minion': '#EDD83D',
      'pacific': '#08A4BD'
    }
  }
};
```

```css
// backgroundColor Property
'.bg-minion': { backgroundColor: '#EDD83D' }
'.bg-pacific': { backgroundColor: '#08A4BD' }
```

## Border Colors
Utilities to control the color of the borders of an element.
```javascript
module.exports = {
  'theme': {
    'borderColor': {
      'old-burgundy': '#4B3B40',
      'tea-green': '#D1F5BE'
    }
  }
};
```

```css
// borderColor Property
'.border-old-burgundy': { borderColor: '#4B3B40' }
'.border-tea-green': { borderColor: '#D1F5BE' }
```

## Border Radius
Utilities for controlling the border radius of an element.
```javascript
module.exports = {
  'theme': {
    'borderRadius:' {
      'DEFAULT': '0.25rem',
      'large': '1.0rem',
      'extra-large': '2.0rem'
    }
  }
};
```

```css
// borderRadius Property
'.rounded': { borderRadius: 4 }
'.rounded-large': { borderRadius: 16 }
'.rounded-extra-large': { borderRadius: 32 }
```

## Border Width
Utilities for controlling the width of an element's borders.
```javascript
module.exports = {
  'theme': {
    'borderWidth': {
      '3': '3',
      '6': '6',
      '10': '10',
    }
  }
};
```

```css
// borderWidth Property
'.border-3': { borderWidth: 3 }
'.border-6': { borderWidth: 6 }
'.border-10': { borderWidth: 10 }
```

## Content Width & Height
Width and Height of the scrollable region of a `ScrollView`.
```css
'.content-auto': { contentWidth: Ti.UI.SIZE, contentHeight: Ti.UI.SIZE }
'.content-screen': { contentWidth: Ti.UI.FILL, contentHeight: Ti.UI.FILL }
'.content-w-auto': { contentWidth: Ti.UI.SIZE }
'.content-w-screen': { contentWidth: Ti.UI.FILL }
'.content-h-auto': { contentHeight: Ti.UI.SIZE }
'.content-h-screen': { contentHeight: Ti.UI.FILL }
```

## Display
Utilities for controlling an element's visibility.

```css
// Display
'.block': { visible: true }
'.hidden': { visible: false }
```

## Font Family
Utilities for controlling the font family of an element.
```javascript
module.exports = {
  'theme': {
    'fontFamily': {
      'display': 'AlfaSlabOne-Regular',
      'body': 'BarlowSemiCondensed-Regular',
    }
  }
};
```

```css
// fontFamily Property
'.font-display': { font: { fontFamily: 'AlfaSlabOne-Regular' } }
'.font-body': { font: { fontFamily: 'BarlowSemiCondensed-Regular' } }
```

## Font Size
Utilities for controlling the font size of an element.
```javascript
module.exports = {
  'theme': {
    'fontSize:' {
      '10xl': '8rem',
      'small-print': '.5rem',
    }
  }
};
```

```css
// fontSize Property
'.text-10xl': { font: { fontSize: 128 } }
'.text-small-print': { font: { fontSize: 8 } }
```

## Gradient Color Stops
Utilities for controlling the color stops in background gradients.
```javascript
module.exports = {
  'theme': {
    'gradientColorStops': {
      'corporate': '#3490dc',
      'danger': '#e3342f'
    }
  }
};
```

```css
// Gradient Color Stops
// From Color
'.from-corporate': { backgroundGradient: { colors: [ '#003490dc', '#3490dc' ] } }
'.from-danger': { backgroundGradient: { colors: [ '#00e3342f', '#e3342f' ] } }

// To Color
'.to-corporate': { backgroundGradient: { colors: [ '#3490dc' ] } }
'.to-danger': { backgroundGradient: { colors: [ '#e3342f' ] } }
```

## Height scale
Utilities for setting the height of an element
```javascript
module.exports = {
  'theme': {
    'height': {
      'xl': '3rem',
      '1/3': '33.333333%'
    }
  }
};
```

```css
// height Property
'.h-xl': { height: 48 }
'.h-1/3': { height: '33.333333%' }
```

## Margin
Utilities for controlling an element's margin.
```javascript
module.exports = {
  'theme': {
    'margin': {
      'tiny': '.125rem',
    }
  }
};
```

```css
// Margin
'.m-tiny': { top: 2, right: 2, bottom: 2, left: 2 }
'.-m-tiny': { top: -2, right: -2, bottom: -2, left: -2 }
'.my-tiny': { top: 2, bottom: 2 }
'.-my-tiny': { top: -2, bottom: -2 }
'.mx-tiny': { right: 2, left: 2 }
'.-mx-tiny': { right: -2, left: -2 }
'.mt-tiny': { top: 2 }
'.-mt-tiny': { top: -2 }
'.mr-tiny': { right: 2 }
'.-mr-tiny': { right: -2 }
'.mb-tiny': { bottom: 2 }
'.-mb-tiny': { bottom: -2 }
'.ml-tiny': { left: 2 }
'.-ml-tiny': { left: -2 }
```

## Opacity
Utilities for controlling the opacity of an element.
```javascript
module.exports = {
  'theme': {
    'opacity': {
      '15': '0.15',
      '35': '0.35',
      '65': '0.65',
      '85': '0.85'
    }
  }
};
```

```css
// opacity Property
'.opacity-15': { opacity: 0.15 }
'.opacity-35': { opacity: 0.35 }
'.opacity-65': { opacity: 0.65 }
'.opacity-85': { opacity: 0.85 }
```

## Padding
Utilities for controlling an element's padding.
```javascript
module.exports = {
  'theme': {
    'padding': {
      'sm': '1rem',
      'md': '1.5rem',
    }
  }
};
```

```css
// padding Property
'.p-sm': { padding: { top: 16, right: 16, bottom: 16, left: 16 } }
'.p-md': { padding: { top: 24, right: 24, bottom: 24, left: 24 } }
'.py-sm': { padding: { top: 16, bottom: 16 } }
'.py-md': { padding: { top: 24, bottom: 24 } }
'.px-sm': { padding: { right: 16, left: 16 } }
'.px-md': { padding: { right: 24, left: 24 } }
'.pt-sm': { padding: { top: 16 } }
'.pt-md': { padding: { top: 24 } }
'.pr-sm': { padding: { right: 16 } }
'.pr-md': { padding: { right: 24 } }
'.pb-sm': { padding: { bottom: 16 } }
'.pb-md': { padding: { bottom: 24 } }
'.pl-sm': { padding: { left: 16 } }
'.pl-md': { padding: { left: 24 } }
```

## Placeholder Colors
Utilities for controlling the color of placeholder text.
```javascript
module.exports = {
  'theme': {
    'placeholderColor': {
      'flame': '#EC4E20',
      'spanish-blue': '#016FB9'
    }
  }
};
```

```css
// hintTextColor Property
'.placeholder-flame': { hintTextColor: '#EC4E20' }
'.placeholder-spanish-blue': { hintTextColor: '#016FB9' }
```

## Text Colors

Utilities for controlling the text/title color of an element.
```javascript
module.exports = {
  'theme': {
    'textColor': {
      'orange-peel': '#FF9F1C',
      'ultramarine': '#446DF6'
    }
  }
};
```

```css
// color Property
'.text-orange-peel': { color: '#FF9F1C' }
'.text-ultramarine': { color: '#446DF6' }
```

## Tint Color
Utilities for controlling an element's tint color.
```javascript
module.exports = {
  'theme': {
    'tintColor': {
      'corporate': '#3490dc',
      'highlight': '#ffff00'
    }
  }
};
```

```css
// tintColor Property
'.tint-corporate': { tintColor: '#3490dc' }
'.tint-highlight': { tintColor: '#ffff00' }
```

## Width scale
Utilities for setting the width of an element
```javascript
module.exports = {
  'theme': {
    'width': {
      'banner': '5rem'
    }
  }
};
```

```css
// width Property
'.w-banner': { width: 80 }
```
