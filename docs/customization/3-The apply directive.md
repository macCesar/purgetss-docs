---
sidebar_position: 3
slug: the-apply-directive
---

## Create complex classes and ids

:::info
You can `apply` a set of classes to create more complex classes, or when you find a repetitive pattern in your code and you’d like to extract it to a new class component.
:::

- Set any id, class or Ti Element
- Use any of the default classes
- Use arbitrary values
- Use any newly defined class in `config.js`
- You can set a string of classes or an array of classes
- Combine it with any platform, device or conditional-block properties

## Set any id, class or Ti Element

```javascript title="./purgetss/config.js"
// ...
theme: {
  '#carrousel': {
    apply: 'w-screen h-auto bg-teal-200 mx-2 my-4 horizontal'
  },
  '.my-custom-class': {
    apply: 'w-auto h-auto font-bold border-2 rounded my-0.5 font-saira-condensed'
  },
  'Label': {
    apply: 'text-base font-bold text-gray-700'
    ]
  },
}
// ...
```

```css title="./purgetss/tailwind.tss"
'#carrousel': { backgroundColor: '#99f6e4', height: Ti.UI.SIZE, layout: 'horizontal', right: 8, left: 8, top: 16, bottom: 16, width: Ti.UI.FILL }
'.my-custom-class': { borderRadius: 4, borderWidth: 2, height: Ti.UI.SIZE, top: 2, bottom: 2, width: Ti.UI.SIZE, font: { fontFamily: 'SairaCondensed-Regular', fontWeight: 'bold' } }
'Label': { color: '#3f3f46', font: { fontSize: 16, fontWeight: 'bold' } }
```

## Use any of the default classes

```javascript title="./purgetss/config.js"
// ...
theme: {
  '.btn': {
    apply: 'w-auto h-auto font-bold border-2 rounded my-0.5 font-saira-condensed'
  },
  '.btn-primary': {
    apply: 'bg-green-500 text-green-100 border-green-200'
    ]
  },
}
// ...
```

```css title="./purgetss/tailwind.tss"
'.btn': { borderRadius: 4, borderWidth: 2, height: Ti.UI.SIZE, top: 2, bottom: 2, width: Ti.UI.SIZE, font: { fontWeight: 'bold' } }
'.btn-primary': { backgroundColor: '#22c55e', borderColor: '#bbf7d0', color: '#dcfce7' }
```

## Use arbitrary values
You can use [**Arbitrary Values**](arbitrary-values) to define your custom classes.


```javascript title="./purgetss/config.js"
// ...
theme: {
  extend: {},
  '.progress': {
    apply: 'h-(1rem) horizontal bg-(#e9ecef) text-(.75rem) rounded-(.25rem)'
    ]
  }
}
// ...
```

```css title="./purgetss/tailwind.tss"
// Custom Styles and Resets
'.progress': { backgroundColor: '#e9ecef', borderRadius: 4, height: 16, layout: 'horizontal', font: { fontSize: 12 } }
// ...
```

## Use any newly defined class in config.js
In the followind example we are creating a `corporate` color classes, so we can use them in the `apply` directive with `bg-corporate-500`, `text-corporate-100` and `border-corporate-200`.

```javascript {5,15} title="./purgetss/config.js"
// ...
theme: {
  extend: {
    colors: {
      // New color values that will generate bg-colors, text-colors, border-colors classes.
      corporate: {
        100: '#dddfe1', 200: '#babfc4', 500: '#53606b'
      }
    }
  },
  '.btn': {
    apply: 'w-auto h-auto font-bold border-2 rounded my-0.5'
  },
  '.btn-corporate': {
    // Newly created classes ( see extend.colors.corporate )
    apply: 'bg-corporate-500 text-corporate-100 border-corporate-200'
  },
}
// ...
```

```css title="./purgetss/tailwind.tss"
'.btn': { borderRadius: 4, borderWidth: 2, height: Ti.UI.SIZE, top: 2, bottom: 2, width: Ti.UI.SIZE, font: { fontWeight: 'bold' } }
'.btn-corporate': { backgroundColor: '#53606b', borderColor: '#babfc4', color: '#dddfe1' }
// ...
// color Property
'.text-corporate-100': { color: '#dddfe1' }
// backgroundColor Property
'.bg-corporate-500': { backgroundColor: '#53606b' }
// borderColor Property
'.border-corporate-200': { borderColor: '#babfc4' }
```

## You can set a string of classes or an array of classes

```javascript title="./purgetss/config.js"
// ...
theme: {
  // Use a string of classes
  '.btn': {
    apply: 'w-auto h-auto font-bold border-2 rounded my-0.5'
  },

   // or an array of classes
  '.btn-corporate': {
    apply: [
      'bg-corporate-500',
      'text-corporate-100',
      'border-corporate-200'
    ]
  }
}
// ...
```

```css title="./purgetss/tailwind.tss"
'.btn': { borderRadius: 4, borderWidth: 2, height: Ti.UI.SIZE, top: 2, bottom: 2, width: Ti.UI.SIZE, font: { fontWeight: 'bold' } }
'.btn-corporate': { backgroundColor: '#53606b', borderColor: '#babfc4', color: '#dddfe1' }
// ...
```

## Combine it with any platform, device or conditional-block properties

```javascript title="./purgetss/config.js"
// ...
theme: {
  '.btn': {
    // Default .btn
    apply: 'w-auto h-auto font-bold border-2 rounded my-0.5',

    // Specific to ios devices
    ios: {
      apply: 'w-screen mx-4'
    },

    // Specific to hanheld devices
    handheld: {
      apply: 'h-20'
    },

    // Specific to iPhoneX ( if Alloy.Global.iPhoneX is set )
    '[if=Alloy.Globals.iPhoneX]': {
      apply: 'mb-12'
    }
  },
}
// ...
```

```css title="./purgetss/tailwind.tss"
'.btn': { borderRadius: 4, borderWidth: 2, height: Ti.UI.SIZE, top: 2, bottom: 2, width: Ti.UI.SIZE, font: { fontWeight: 'bold' } }
'.btn[platform=ios]': { right: 16, left: 16, width: Ti.UI.FILL }
'.btn[formFactor=handheld]': { height: 80 }
'.btn[if=Alloy.Globals.iPhoneX]': { bottom: 48 }
// ...
```

## Platform specific classes
Several classes in `tailwind.tss` are platform specific to prevent polluting objects with properties that are not specific to a particular platform.

One example of this type of classes are the `shadow-*` classes.

```css title="Platform specific classes"
// Component(s): Ti.UI.Android.CardView, Ti.UI.Animation, Ti.UI.View
// Property(ies): elevation - Box Shadow Effect in Tailwind - Android Only
'.shadow-xs[platform=android]': { elevation: 4 }
'.shadow-sm[platform=android]': { elevation: 8 }
'.shadow[platform=android]': { elevation: 16 }
'.shadow-md[platform=android]': { elevation: 24 }
'.shadow-lg[platform=android]': { elevation: 26 }
'.shadow-xl[platform=android]': { elevation: 34 }
'.shadow-2xl[platform=android]': { elevation: 38 }
'.shadow-inner[platform=android]': { elevation: 0 }
'.shadow-outline[platform=android]': { elevation: 16 }
'.shadow-none[platform=android]': { elevation: 0 }

// Component(s): Ti.UI.View
// Property(ies): viewShadowOffset, viewShadowRadius, viewShadowColor - Box Shadow Effect in Tailwind - iOS Only
'.shadow-xs[platform=ios]': { viewShadowOffset: { x: 0, y: 0 }, viewShadowRadius: 1, viewShadowColor: '#80000000' }
'.shadow-sm[platform=ios]': { viewShadowOffset: { x: 0, y: 1 }, viewShadowRadius: 2, viewShadowColor: '#80000000' }
'.shadow[platform=ios]': { viewShadowOffset: { x: 0, y: 2 }, viewShadowRadius: 4, viewShadowColor: '#80000000' }
'.shadow-md[platform=ios]': { viewShadowOffset: { x: 0, y: 3 }, viewShadowRadius: 6, viewShadowColor: '#80000000' }
'.shadow-lg[platform=ios]': { viewShadowOffset: { x: 0, y: 4 }, viewShadowRadius: 8, viewShadowColor: '#80000000' }
'.shadow-xl[platform=ios]': { viewShadowOffset: { x: 0, y: 6 }, viewShadowRadius: 12, viewShadowColor: '#80000000' }
'.shadow-2xl[platform=ios]': { viewShadowOffset: { x: 0, y: 8 }, viewShadowRadius: 14, viewShadowColor: '#80000000' }
'.shadow-inner[platform=ios]': { viewShadowOffset: { x: 0, y: 0 }, viewShadowRadius: null, viewShadowColor: null }
'.shadow-outline[platform=ios]': { viewShadowOffset: { x: 0, y: 0 }, viewShadowRadius: 4, viewShadowColor: '#80000000' }
'.shadow-none[platform=ios]': { viewShadowOffset: { x: 0, y: 0 }, viewShadowRadius: null, viewShadowColor: null }
```

:::caution IMPORTANT!

To properly apply these platform styles when creating custom rules, you must specify the platform variant in the `apply` directive.

**Even if you are not targeting a specific platform, you must specify the platform variant.**
:::

```javascript {15} title="./purgetss/config.js"
module.exports = {
  theme: {
    '.my-button': {
      // default
      'apply': 'w-32 h-32 bg-green-500',
      // Targeting iOS and Android
      'ios': {
        'apply': 'ios:shadow-lg'
      },
      'android': {
        'apply': 'android:shadow-lg'
      }
    },
    '.my-view': {
      // Even if you are not targeting a specific platform, you must specify the platform variant.
      'apply': 'w-32 h-32 android:shadow-lg bg-green-500'
    }
  },
};
```

```css title="./purgetss/tailwind.tss"
'.my-button': { backgroundColor: '#22c55e', height: 128, width: 128 }
'.my-button[platform=ios]': { viewShadowOffset: { x: 0, y: 4 }, viewShadowRadius: 8, viewShadowColor: '#80000000' }
'.my-button[platform=android]': { elevation: 26 }
'.my-view': { backgroundColor: '#22c55e', elevation: 26, height: 128, width: 128 }
```

### Omiting the platform variant
If you omit the platform variant, **PurgeTSS** won't be able to determine which platform you are targeting, and the custom class will not have the corresponding property.

```javascript {4} title="./purgetss/config.js"
module.exports = {
  theme: {
    '.my-view': {
      // Missing platform variant in shadow-lg
      'apply': 'w-32 h-32 shadow-lg bg-green-500'
    }
  },
};
```

```css title="./purgetss/tailwind.tss"
// Ommiting the platform variant in `config.js` will not generate the corresponding property.
// Missing any property related to `shadow-lg`.
'.my-view': { backgroundColor: '#22c55e', height: 128, width: 128 }
```
