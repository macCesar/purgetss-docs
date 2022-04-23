---
sidebar_position: 2
slug: available-utilities
---

# Available utilities
Along with the regular utilities like Color, Widths, Heights, you can set the following utilities to your animations:

## anchorPoint
Coordinate of the view about which to pivot an animation.

Point to rotate around, specified as a dictionary object with x and y properties, where { x: 0.5, y: 0.5 } represents the center of whatever is being rotated.

**Default:** `(0.5, 0.5)`

```scss
// Component(s): Ti.UI.Animation, Ti.UI.View
// Property(ies): anchorPoint
'.origin-center': { anchorPoint: { x: 0.5, y: 0.5 } }
'.origin-top': { anchorPoint: { x: 0.5, y: 0 } }
'.origin-top-right': { anchorPoint: { x: 1, y: 0 } }
'.origin-right': { anchorPoint: { x: 0.5, y: 1 } }
'.origin-bottom-right': { anchorPoint: { x: 1, y: 1 } }
'.origin-bottom': { anchorPoint: { x: 0.5, y: 1 } }
'.origin-bottom-left': { anchorPoint: { x: 0, y: 1 } }
'.origin-left': { anchorPoint: { x: 0, y: 0.5 } }
'.origin-top-left': { anchorPoint: { x: 0, y: 0 } }
```

## autoreverse
Specifies if the animation should be replayed in reverse upon completion.

**Default:** `false`

```scss
// Component(s): Ti.UI.Animation
// Property(ies): autoreverse
'.autoreverse': { autoreverse: true }
'.no-autoreverse': { autoreverse: false }
```

## curve
Animation curve or easing function to apply to the animation.

This API can be assigned the following constants:

```scss
// Component(s): Ti.UI.Animation
// Property(ies): curve
'.ease-in': { curve: Ti.UI.ANIMATION_CURVE_EASE_IN }
'.ease-out': { curve: Ti.UI.ANIMATION_CURVE_EASE_OUT }
'.ease-linear': { curve: Ti.UI.ANIMATION_CURVE_LINEAR }
'.ease-in-out': { curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT }
```

## delay
Delay, in milliseconds before starting the animation

```scss
// Component(s): Ti.UI.Animation
// Property(ies): delay
'.delay-0': { delay: 0 }
'.delay-25': { delay: 25 }
'.delay-50': { delay: 50 }
'.delay-75': { delay: 75 }
'.delay-100': { delay: 100 }
'.delay-150': { delay: 150 }
'.delay-200': { delay: 200 }
'.delay-250': { delay: 250 }
'.delay-300': { delay: 300 }
'.delay-350': { delay: 350 }
'.delay-400': { delay: 400 }
'.delay-450': { delay: 450 }
'.delay-500': { delay: 500 }
'.delay-600': { delay: 600 }
'.delay-700': { delay: 700 }
'.delay-800': { delay: 800 }
'.delay-900': { delay: 900 }
'.delay-1000': { delay: 1000 }
'.delay-2000': { delay: 2000 }
'.delay-3000': { delay: 3000 }
'.delay-4000': { delay: 4000 }
'.delay-5000': { delay: 5000 }
```

## duration
Duration of the animation, in milliseconds.

```scss
// Component(s): Ti.UI.Animation
// Property(ies): duration
'.duration-0': { duration: 0 }
'.duration-25': { duration: 25 }
'.duration-50': { duration: 50 }
'.duration-75': { duration: 75 }
'.duration-100': { duration: 100 }
'.duration-150': { duration: 150 }
'.duration-200': { duration: 200 }
'.duration-250': { duration: 250 }
'.duration-300': { duration: 300 }
'.duration-350': { duration: 350 }
'.duration-400': { duration: 400 }
'.duration-450': { duration: 450 }
'.duration-500': { duration: 500 }
'.duration-600': { duration: 600 }
'.duration-700': { duration: 700 }
'.duration-800': { duration: 800 }
'.duration-900': { duration: 900 }
'.duration-1000': { duration: 1000 }
'.duration-2000': { duration: 2000 }
'.duration-3000': { duration: 3000 }
'.duration-4000': { duration: 4000 }
'.duration-5000': { duration: 5000 }
'.duration': { duration: 150 }
```

## repeat
Number of times the animation should be performed.

If `autoreverse` is true, then one repeat of the animation consists of the animation being played once forward, and once backward.

```scss
// Component(s): Ti.UI.Animation
// Property(ies): repeat
'.repeat-1': { repeat: 1 }
'.repeat-2': { repeat: 2 }
'.repeat-3': { repeat: 3 }
'.repeat-4': { repeat: 4 }
'.repeat-5': { repeat: 5 }
'.repeat-6': { repeat: 6 }
'.repeat-7': { repeat: 7 }
'.repeat-8': { repeat: 8 }
'.repeat-9': { repeat: 9 }
'.repeat-10': { repeat: 10 }
'.repeat-11': { repeat: 11 }
'.repeat-12': { repeat: 12 }
```

## rotate
Utilities to specify the amount of rotation.

Rotation angle, in degrees. See the rotate method for a discussion of rotation.

**Default:** `No rotation.`

```scss
// Component(s): For the Animation Component
// Property(ies): rotate
'.rotate-0': { rotate: 0 }
'.rotate-1': { rotate: 1 }
'.rotate-2': { rotate: 2 }
'.rotate-3': { rotate: 3 }
'.rotate-6': { rotate: 6 }
'.rotate-12': { rotate: 12 }
'.rotate-45': { rotate: 45 }
'.rotate-90': { rotate: 90 }
'.rotate-180': { rotate: 180 }

// Component(s): For the Animation Component
// Property(ies): rotate ( Negative values )
'.-rotate-0': { rotate: 0 }
'.-rotate-1': { rotate: -1 }
'.-rotate-2': { rotate: -2 }
'.-rotate-3': { rotate: -3 }
'.-rotate-6': { rotate: -6 }
'.-rotate-12': { rotate: -12 }
'.-rotate-45': { rotate: -45 }
'.-rotate-90': { rotate: -90 }
'.-rotate-180': { rotate: -180 }
```

## scale
Scale the matrix by the specified scaling factor. The same scaling factor is used for both horizontal and vertical scaling.

**Default:** `1`

```scss
// Component(s): Ti.UI.ScrollView
// Property(ies): scale
'.scale-0': { scale: '0' }
'.scale-1': { scale: '.01' }
'.scale-5': { scale: '.05' }
'.scale-10': { scale: '.10' }
'.scale-25': { scale: '.25' }
'.scale-50': { scale: '.5' }
'.scale-75': { scale: '.75' }
'.scale-90': { scale: '.9' }
'.scale-95': { scale: '.95' }
'.scale-100': { scale: '1' }
'.scale-105': { scale: '1.05' }
'.scale-110': { scale: '1.1' }
'.scale-125': { scale: '1.25' }
'.scale-150': { scale: '1.5' }
```
