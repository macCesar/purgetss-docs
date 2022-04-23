---
sidebar_position: 1
slug: properties-with-constant-values
---

# Properties with constant values

## accessibilityHidden

```scss
/* Component(s): Ti.UI.View */
/* Property(ies): accessibilityHidden */
'.accessibility-hidden': { accessibilityHidden: true }
'.accessibility-not-hidden': { accessibilityHidden: false }
```

## accessoryType

```scss
// Component(s): Ti.UI.ListItem
// Property(ies): accessoryType
'.accesory-type-checkmark': { accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK }
'.accesory-type-detail': { accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DETAIL }
'.accesory-type-disclosure': { accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE }
'.accesory-type-none': { accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE }
```

## activeIconIsMask

```scss
// Component(s): Ti.UI.Tab
// Property(ies): activeIconIsMask - iOS Only
'.active-icon-is-mask[platform=ios]': { activeIconIsMask: true }
'.active-icon-is-not-mask[platform=ios]': { activeIconIsMask: false }
```

## activityEnterTransition

```scss
// Component(s): Ti.UI.Window
// Property(ies): activityEnterTransition - Android Only
'.activity-enter-transition-explode[platform=android]': { activityEnterTransition: Ti.UI.Android.TRANSITION_EXPLODE }
'.activity-enter-transition-fade-in[platform=android]': { activityEnterTransition: Ti.UI.Android.TRANSITION_FADE_IN }
'.activity-enter-transition-fade-out[platform=android]': { activityEnterTransition: Ti.UI.Android.TRANSITION_FADE_OUT }
'.activity-enter-transition-none[platform=android]': { activityEnterTransition: Ti.UI.Android.TRANSITION_NONE }
'.activity-enter-transition-slide-bottom[platform=android]': { activityEnterTransition: Ti.UI.Android.TRANSITION_SLIDE_BOTTOM }
'.activity-enter-transition-slide-left[platform=android]': { activityEnterTransition: Ti.UI.Android.TRANSITION_SLIDE_LEFT }
'.activity-enter-transition-slide-right[platform=android]': { activityEnterTransition: Ti.UI.Android.TRANSITION_SLIDE_RIGHT }
'.activity-enter-transition-slide-top[platform=android]': { activityEnterTransition: Ti.UI.Android.TRANSITION_SLIDE_TOP }
```

## activityExitTransition

```scss
// Component(s): Ti.UI.Window
// Property(ies): activityExitTransition - Android Only
'.activity-exit-transition-explode[platform=android]': { activityExitTransition: Ti.UI.Android.TRANSITION_EXPLODE }
'.activity-exit-transition-fade-in[platform=android]': { activityExitTransition: Ti.UI.Android.TRANSITION_FADE_IN }
'.activity-exit-transition-fade-out[platform=android]': { activityExitTransition: Ti.UI.Android.TRANSITION_FADE_OUT }
'.activity-exit-transition-none[platform=android]': { activityExitTransition: Ti.UI.Android.TRANSITION_NONE }
'.activity-exit-transition-slide-bottom[platform=android]': { activityExitTransition: Ti.UI.Android.TRANSITION_SLIDE_BOTTOM }
'.activity-exit-transition-slide-left[platform=android]': { activityExitTransition: Ti.UI.Android.TRANSITION_SLIDE_LEFT }
'.activity-exit-transition-slide-right[platform=android]': { activityExitTransition: Ti.UI.Android.TRANSITION_SLIDE_RIGHT }
'.activity-exit-transition-slide-top[platform=android]': { activityExitTransition: Ti.UI.Android.TRANSITION_SLIDE_TOP }
```

## activityIndicatorStyle

```scss
// Component(s): Ti.UI.ActivityIndicator
// Property(ies): style
'.activity-indicator-style-big': { style: Ti.UI.ActivityIndicatorStyle.BIG }
'.activity-indicator-style-dark': { style: Ti.UI.ActivityIndicatorStyle.DARK }
'.activity-indicator-style-big-dark': { style: Ti.UI.ActivityIndicatorStyle.BIG_DARK }
'.activity-indicator-style-plain': { style: Ti.UI.ActivityIndicatorStyle.PLAIN }
```

## activityReenterTransition

```scss
// Component(s): Ti.UI.Window
// Property(ies): activityReenterTransition - Android Only
'.activity-reenter-transition-explode[platform=android]': { activityReenterTransition: Ti.UI.Android.TRANSITION_EXPLODE }
'.activity-reenter-transition-fade-in[platform=android]': { activityReenterTransition: Ti.UI.Android.TRANSITION_FADE_IN }
'.activity-reenter-transition-fade-out[platform=android]': { activityReenterTransition: Ti.UI.Android.TRANSITION_FADE_OUT }
'.activity-reenter-transition-none[platform=android]': { activityReenterTransition: Ti.UI.Android.TRANSITION_NONE }
'.activity-reenter-transition-slide-bottom[platform=android]': { activityReenterTransition: Ti.UI.Android.TRANSITION_SLIDE_BOTTOM }
'.activity-reenter-transition-slide-left[platform=android]': { activityReenterTransition: Ti.UI.Android.TRANSITION_SLIDE_LEFT }
'.activity-reenter-transition-slide-right[platform=android]': { activityReenterTransition: Ti.UI.Android.TRANSITION_SLIDE_RIGHT }
'.activity-reenter-transition-slide-top[platform=android]': { activityReenterTransition: Ti.UI.Android.TRANSITION_SLIDE_TOP }
```

## activityReturnTransition

```scss
// Component(s): Ti.UI.Window
// Property(ies): activityReturnTransition - Android Only
'.activity-return-transition-explode[platform=android]': { activityReturnTransition: Ti.UI.Android.TRANSITION_EXPLODE }
'.activity-return-transition-fade-in[platform=android]': { activityReturnTransition: Ti.UI.Android.TRANSITION_FADE_IN }
'.activity-return-transition-fade-out[platform=android]': { activityReturnTransition: Ti.UI.Android.TRANSITION_FADE_OUT }
'.activity-return-transition-none[platform=android]': { activityReturnTransition: Ti.UI.Android.TRANSITION_NONE }
'.activity-return-transition-slide-bottom[platform=android]': { activityReturnTransition: Ti.UI.Android.TRANSITION_SLIDE_BOTTOM }
'.activity-return-transition-slide-left[platform=android]': { activityReturnTransition: Ti.UI.Android.TRANSITION_SLIDE_LEFT }
'.activity-return-transition-slide-right[platform=android]': { activityReturnTransition: Ti.UI.Android.TRANSITION_SLIDE_RIGHT }
'.activity-return-transition-slide-top[platform=android]': { activityReturnTransition: Ti.UI.Android.TRANSITION_SLIDE_TOP }
```

## activitySharedElementEnterTransition

```scss
// Component(s): Ti.UI.Window
// Property(ies): activitySharedElementEnterTransition - Android Only
'.activity-shared-element-enter-transition-change-bounds[platform=android]': { activitySharedElementEnterTransition: Ti.UI.Android.TRANSITION_CHANGE_BOUNDS }
'.activity-shared-element-enter-transition-change-clip-bounds[platform=android]': { activitySharedElementEnterTransition: Ti.UI.Android.TRANSITION_CHANGE_CLIP_BOUNDS }
'.activity-shared-element-enter-transition-change-transform[platform=android]': { activitySharedElementEnterTransition: Ti.UI.Android.TRANSITION_CHANGE_TRANSFORM }
'.activity-shared-element-enter-transition-change-image-transform[platform=android]': { activitySharedElementEnterTransition: Ti.UI.Android.TRANSITION_CHANGE_IMAGE_TRANSFORM }
'.activity-shared-element-enter-transition-none[platform=android]': { activitySharedElementEnterTransition: Ti.UI.Android.TRANSITION_NONE }
```

## activitySharedElementExitTransition

```scss
// Component(s): Ti.UI.Window
// Property(ies): activitySharedElementExitTransition - Android Only
'.activity-shared-element-exit-transition-change-bounds[platform=android]': { activitySharedElementExitTransition: Ti.UI.Android.TRANSITION_CHANGE_BOUNDS }
'.activity-shared-element-exit-transition-change-clip-bounds[platform=android]': { activitySharedElementExitTransition: Ti.UI.Android.TRANSITION_CHANGE_CLIP_BOUNDS }
'.activity-shared-element-exit-transition-change-transform[platform=android]': { activitySharedElementExitTransition: Ti.UI.Android.TRANSITION_CHANGE_TRANSFORM }
'.activity-shared-element-exit-transition-change-image-transform[platform=android]': { activitySharedElementExitTransition: Ti.UI.Android.TRANSITION_CHANGE_IMAGE_TRANSFORM }
'.activity-shared-element-exit-transition-none[platform=android]': { activitySharedElementExitTransition: Ti.UI.Android.TRANSITION_NONE }
```

## activitySharedElementReenterTransition

```scss
// Component(s): Ti.UI.Window
// Property(ies): activitySharedElementReenterTransition - Android Only
'.activity-shared-element-reenter-transition-change-bounds[platform=android]': { activitySharedElementReenterTransition: Ti.UI.Android.TRANSITION_CHANGE_BOUNDS }
'.activity-shared-element-reenter-transition-change-clip-bounds[platform=android]': { activitySharedElementReenterTransition: Ti.UI.Android.TRANSITION_CHANGE_CLIP_BOUNDS }
'.activity-shared-element-reenter-transition-change-transform[platform=android]': { activitySharedElementReenterTransition: Ti.UI.Android.TRANSITION_CHANGE_TRANSFORM }
'.activity-shared-element-reenter-transition-change-image-transform[platform=android]': { activitySharedElementReenterTransition: Ti.UI.Android.TRANSITION_CHANGE_IMAGE_TRANSFORM }
'.activity-shared-element-reenter-transition-none[platform=android]': { activitySharedElementReenterTransition: Ti.UI.Android.TRANSITION_NONE }
```

## activitySharedElementReturnTransition

```scss
// Component(s): Ti.UI.Window
// Property(ies): activitySharedElementReturnTransition - Android Only
'.activity-shared-element-return-transition-change-bounds[platform=android]': { activitySharedElementReturnTransition: Ti.UI.Android.TRANSITION_CHANGE_BOUNDS }
'.activity-shared-element-return-transition-change-clip-bounds[platform=android]': { activitySharedElementReturnTransition: Ti.UI.Android.TRANSITION_CHANGE_CLIP_BOUNDS }
'.activity-shared-element-return-transition-change-transform[platform=android]': { activitySharedElementReturnTransition: Ti.UI.Android.TRANSITION_CHANGE_TRANSFORM }
'.activity-shared-element-return-transition-change-image-transform[platform=android]': { activitySharedElementReturnTransition: Ti.UI.Android.TRANSITION_CHANGE_IMAGE_TRANSFORM }
'.activity-shared-element-return-transition-none[platform=android]': { activitySharedElementReturnTransition: Ti.UI.Android.TRANSITION_NONE }
```

## alertDialogStyle

```scss
// Component(s): Ti.UI.AlertDialog
// Property(ies): style - iOS Only
'.alert-dialog-style[platform=ios]': { style: Ti.UI.iOS.AlertDialogStyle.DEFAULT }
'.alert-dialog-style-login-and-password[platform=ios]': { style: Ti.UI.iOS.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT }
'.alert-dialog-style-plain-text-input[platform=ios]': { style: Ti.UI.iOS.AlertDialogStyle.PLAIN_TEXT_INPUT }
'.alert-dialog-style-secure-text-input[platform=ios]': { style: Ti.UI.iOS.AlertDialogStyle.SECURE_TEXT_INPUT }
```

## allowsBackForwardNavigationGestures

```scss
// Component(s): Ti.UI.WebView
// Property(ies): allowsBackForwardNavigationGestures - iOS Only
'.allow-back-forward-navigation-gestures[platform=ios]': { allowsBackForwardNavigationGestures: true }
'.dont-allow-back-forward-navigation-gestures[platform=ios]': { allowsBackForwardNavigationGestures: false }
```

## allowsLinkPreview

```scss
// Component(s): Ti.UI.WebView
// Property(ies): allowsLinkPreview - iOS Only
'.allows-link-preview[platform=ios]': { allowsLinkPreview: true }
'.dont-allow-link-preview[platform=ios]': { allowsLinkPreview: false }
```

## allowsMultipleSelectionDuringEditing

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): allowsMultipleSelectionDuringEditing
'.allows-multiple-selection-during-editing': { allowsMultipleSelectionDuringEditing: true }
'.dont-allow-multiple-selection-during-editing': { allowsMultipleSelectionDuringEditing: false }
```

## allowsMultipleSelectionInteraction

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): allowsMultipleSelectionInteraction
'.allows-multiple-selection-interaction': { allowsMultipleSelectionInteraction: true }
'.dont-allow-multiple-selection-interaction': { allowsMultipleSelectionInteraction: false }
```

## allowsSelection

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): allowsSelection - iOS Only
'.allows-selection[platform=ios]': { allowsSelection: true }
'.dont-allow-selection[platform=ios]': { allowsSelection: false }
```

## allowsSelectionDuringEditing

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): allowsSelectionDuringEditing
'.allows-selection-during-editing': { allowsSelectionDuringEditing: true }
'.dont-allow-selection-during-editing': { allowsSelectionDuringEditing: false }
```

## allowUserCustomization

```scss
// Component(s): Ti.UI.TabGroup
// Property(ies): allowUserCustomization - iOS Only
'.allow-user-customization[platform=ios]': { allowUserCustomization: true }
'.dont-allow-user-customization[platform=ios]': { allowUserCustomization: false }
```

## anchorPoint

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

// anchor-point-{position} variant
'.anchor-point-center': { anchorPoint: { x: 0.5, y: 0.5 } }
'.anchor-point-top': { anchorPoint: { x: 0.5, y: 0 } }
'.anchor-point-top-right': { anchorPoint: { x: 1, y: 0 } }
'.anchor-point-right': { anchorPoint: { x: 0.5, y: 1 } }
'.anchor-point-bottom-right': { anchorPoint: { x: 1, y: 1 } }
'.anchor-point-bottom': { anchorPoint: { x: 0.5, y: 1 } }
'.anchor-point-bottom-left': { anchorPoint: { x: 0, y: 1 } }
'.anchor-point-left': { anchorPoint: { x: 0, y: 0.5 } }
'.anchor-point-top-left': { anchorPoint: { x: 0, y: 0 } }
```

## animationStyle

```scss
// Component(s): Ti.UI.Animation
// Property(ies): transition - iOS Only
'.animation-style-curl-down[platform=ios]': { transition: Ti.UI.iOS.AnimationStyle.CURL_DOWN }
'.animation-style-curl-up[platform=ios]': { transition: Ti.UI.iOS.AnimationStyle.CURL_UP }
'.animation-style-flip-from-left[platform=ios]': { transition: Ti.UI.iOS.AnimationStyle.FLIP_FROM_LEFT }
'.animation-style-flip-from-right[platform=ios]': { transition: Ti.UI.iOS.AnimationStyle.FLIP_FROM_RIGHT }
'.animation-style-flip-from-top[platform=ios]': { transition: Ti.UI.iOS.AnimationStyle.FLIP_FROM_TOP }
'.animation-style-flip-from-bottom[platform=ios]': { transition: Ti.UI.iOS.AnimationStyle.FLIP_FROM_BOTTOM }
'.animation-style-cross-dissolve[platform=ios]': { transition: Ti.UI.iOS.AnimationStyle.CROSS_DISSOLVE }
'.animation-style-none[platform=ios]': { transition: Ti.UI.iOS.AnimationStyle.NONE }
```

## autoAdjustScrollViewInsets

```scss
// Component(s): Ti.UI.Window
// Property(ies): autoAdjustScrollViewInsets - iOS Only
'.auto-adjust-scroll-view-inset[platform=ios]': { autoAdjustScrollViewInsets: true }
'.dont-auto-adjust-scroll-view-inset[platform=ios]': { autoAdjustScrollViewInsets: false }
```

## autocapitalization

```scss
// Component(s): Ti.UI.SearchBar, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): autocapitalization
'.uppercase': { autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_ALL }
'.normal-case': { autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE }
'.capitalize': { autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS }
'.sentences': { autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES }
```

## autocorrect

```scss
// Component(s): Ti.UI.SearchBar, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): autocorrect
'.autocorrect': { autocorrect: true }
'.no-autocorrect': { autocorrect: false }
'.dont-autocorrect': { autocorrect: false }
```

## autofillType

```scss
// Component(s): Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): autofillType
'.autofill-type-url': { autofillType: Ti.UI.AUTOFILL_TYPE_URL }
'.autofill-type-name': { autofillType: Ti.UI.AUTOFILL_TYPE_NAME }
'.autofill-type-phone': { autofillType: Ti.UI.AUTOFILL_TYPE_PHONE }
'.autofill-type-email': { autofillType: Ti.UI.AUTOFILL_TYPE_EMAIL }
'.autofill-type-address': { autofillType: Ti.UI.AUTOFILL_TYPE_ADDRESS }
'.autofill-type-username': { autofillType: Ti.UI.AUTOFILL_TYPE_USERNAME }
'.autofill-type-password': { autofillType: Ti.UI.AUTOFILL_TYPE_PASSWORD }
'.autofill-type-nickname': { autofillType: Ti.UI.AUTOFILL_TYPE_NICKNAME }
'.autofill-type-location': { autofillType: Ti.UI.AUTOFILL_TYPE_LOCATION }
'.autofill-type-job-title': { autofillType: Ti.UI.AUTOFILL_TYPE_JOB_TITLE }
'.autofill-type-given-name': { autofillType: Ti.UI.AUTOFILL_TYPE_GIVEN_NAME }
'.autofill-type-name-prefix': { autofillType: Ti.UI.AUTOFILL_TYPE_NAME_PREFIX }
'.autofill-type-middle-name': { autofillType: Ti.UI.AUTOFILL_TYPE_MIDDLE_NAME }
'.autofill-type-family-name': { autofillType: Ti.UI.AUTOFILL_TYPE_FAMILY_NAME }
'.autofill-type-name-suffix': { autofillType: Ti.UI.AUTOFILL_TYPE_NAME_SUFFIX }
'.autofill-type-sublocality': { autofillType: Ti.UI.AUTOFILL_TYPE_SUBLOCALITY }
'.autofill-type-postal-code': { autofillType: Ti.UI.AUTOFILL_TYPE_POSTAL_CODE }
'.autofill-type-card-number': { autofillType: Ti.UI.AUTOFILL_TYPE_CARD_NUMBER }
'.autofill-type-address-city': { autofillType: Ti.UI.AUTOFILL_TYPE_ADDRESS_CITY }
'.autofill-type-country-name': { autofillType: Ti.UI.AUTOFILL_TYPE_COUNTRY_NAME }
'.autofill-type-new-password': { autofillType: Ti.UI.AUTOFILL_TYPE_NEW_PASSWORD }
'.autofill-type-address-line1': { autofillType: Ti.UI.AUTOFILL_TYPE_ADDRESS_LINE1 }
'.autofill-type-address-line2': { autofillType: Ti.UI.AUTOFILL_TYPE_ADDRESS_LINE2 }
'.autofill-type-address-state': { autofillType: Ti.UI.AUTOFILL_TYPE_ADDRESS_STATE }
'.autofill-type-one-time-code': { autofillType: Ti.UI.AUTOFILL_TYPE_ONE_TIME_CODE }
'.autofill-type-organization-name': { autofillType: Ti.UI.AUTOFILL_TYPE_ORGANIZATION_NAME }
'.autofill-type-address-city-state': { autofillType: Ti.UI.AUTOFILL_TYPE_ADDRESS_CITY_STATE }
'.autofill-type-card-security-code': { autofillType: Ti.UI.AUTOFILL_TYPE_CARD_SECURITY_CODE }
'.autofill-type-card-expiration-day': { autofillType: Ti.UI.AUTOFILL_TYPE_CARD_EXPIRATION_DAY }
'.autofill-type-card-expiration-date': { autofillType: Ti.UI.AUTOFILL_TYPE_CARD_EXPIRATION_DATE }
'.autofill-type-card-expiration-year': { autofillType: Ti.UI.AUTOFILL_TYPE_CARD_EXPIRATION_YEAR }
'.autofill-type-card-expiration-month': { autofillType: Ti.UI.AUTOFILL_TYPE_CARD_EXPIRATION_MONTH }
```

## autoLink

```scss
// Component(s): Ti.UI.Label, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): autoLink
'.auto-link-all': { autoLink: Ti.UI.AUTOLINK_ALL }
'.auto-link-email-addresses': { autoLink: Ti.UI.AUTOLINK_EMAIL_ADDRESSES }
'.auto-link-map-addresses': { autoLink: Ti.UI.AUTOLINK_MAP_ADDRESSES }
'.auto-link-none': { autoLink: Ti.UI.AUTOLINK_NONE }
'.auto-link-phone-numbers': { autoLink: Ti.UI.AUTOLINK_PHONE_NUMBERS }
'.auto-link-urls': { autoLink: Ti.UI.AUTOLINK_URLS }
'.auto-link-calendar[platform=ios]': { autoLink: Ti.UI.AUTOLINK_CALENDAR }
```

## autoreverse

```scss
// Component(s): Ti.UI.Animation
// Property(ies): autoreverse
'.autoreverse': { autoreverse: true }
'.no-autoreverse': { autoreverse: false }
```

## autorotate

```scss
// Component(s): Ti.UI.ImageView
// Property(ies): autorotate
'.autorotate': { autorotate: true }
'.dont-autorotate': { autorotate: false }
```

## backgroundBlendMode

```scss
// Component(s): Ti.UI.MaskedImage
// Property(ies): mode ( Background Blend Mode )
'.bg-blend-clear': { mode: Ti.UI.BLEND_MODE_CLEAR }
'.bg-blend-copy': { mode: Ti.UI.BLEND_MODE_COPY }
'.bg-blend-darken': { mode: Ti.UI.BLEND_MODE_DARKEN }
'.bg-blend-destination-atop': { mode: Ti.UI.BLEND_MODE_DESTINATION_ATOP }
'.bg-blend-destination-in': { mode: Ti.UI.BLEND_MODE_DESTINATION_IN }
'.bg-blend-destination-out': { mode: Ti.UI.BLEND_MODE_DESTINATION_OUT }
'.bg-blend-destination-over': { mode: Ti.UI.BLEND_MODE_DESTINATION_OVER }
'.bg-blend-lighten': { mode: Ti.UI.BLEND_MODE_LIGHTEN }
'.bg-blend-multiply': { mode: Ti.UI.BLEND_MODE_MULTIPLY }
'.bg-blend-normal': { mode: Ti.UI.BLEND_MODE_NORMAL }
'.bg-blend-overlay': { mode: Ti.UI.BLEND_MODE_OVERLAY }
'.bg-blend-plus-lighter': { mode: Ti.UI.BLEND_MODE_PLUS_LIGHTER }
'.bg-blend-screen': { mode: Ti.UI.BLEND_MODE_SCREEN }
'.bg-blend-source-atop': { mode: Ti.UI.BLEND_MODE_SOURCE_ATOP }
'.bg-blend-source-in': { mode: Ti.UI.BLEND_MODE_SOURCE_IN }
'.bg-blend-source-out': { mode: Ti.UI.BLEND_MODE_SOURCE_OUT }
'.bg-blend-xor': { mode: Ti.UI.BLEND_MODE_XOR }
'.bg-blend-color[platform=ios]': { mode: Ti.UI.BLEND_MODE_COLOR }
'.bg-blend-color-burn[platform=ios]': { mode: Ti.UI.BLEND_MODE_COLOR_BURN }
'.bg-blend-color-dodge[platform=ios]': { mode: Ti.UI.BLEND_MODE_COLOR_DODGE }
'.bg-blend-diference[platform=ios]': { mode: Ti.UI.BLEND_MODE_DIFFERENCE }
'.bg-blend-exclusion[platform=ios]': { mode: Ti.UI.BLEND_MODE_EXCLUSION }
'.bg-blend-hard-light[platform=ios]': { mode: Ti.UI.BLEND_MODE_HARD_LIGHT }
'.bg-blend-hue[platform=ios]': { mode: Ti.UI.BLEND_MODE_HUE }
'.bg-blend-luminosity[platform=ios]': { mode: Ti.UI.BLEND_MODE_LUMINOSITY }
'.bg-blend-plus-darker[platform=ios]': { mode: Ti.UI.BLEND_MODE_PLUS_DARKER }
'.bg-blend-saturation[platform=ios]': { mode: Ti.UI.BLEND_MODE_SATURATION }
'.bg-blend-soft-light[platform=ios]': { mode: Ti.UI.BLEND_MODE_SOFT_LIGHT }
```

## backgroundLinearGradient

```scss
// Component(s): Ti.UI.MaskedImage
// Property(ies): backgroundGradient - Linear
'.bg-linear': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '50%', y: '100%' }, endPoint: { x: '50%', y: '0%' } } }
'.bg-linear-to-t': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '0%', y: '0%' }, endPoint: { x: '0%', y: '100%' } } }
'.bg-linear-to-tr': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '100%', y: '0%' }, endPoint: { x: '0%', y: '100%' } } }
'.bg-linear-to-r': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '100%', y: '0%' }, endPoint: { x: '0%', y: '0%' } } }
'.bg-linear-to-br': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '100%', y: '100%' }, endPoint: { x: '0%', y: '0%' } } }
'.bg-linear-to-b': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '100%', y: '100%' }, endPoint: { x: '100%', y: '0%' } } }
'.bg-linear-to-bl': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '0%', y: '100%' }, endPoint: { x: '100%', y: '0%' } } }
'.bg-linear-to-l': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '0%', y: '0%' }, endPoint: { x: '100%', y: '0%' } } }
'.bg-linear-to-tl': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '0%', y: '0%' }, endPoint: { x: '100%', y: '100%' } } }

// Component(s): Ti.UI.MaskedImage
// Property(ies): backgroundGradient - Gradient
'.bg-gradient': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '50%', y: '100%' }, endPoint: { x: '50%', y: '0%' } } }
'.bg-gradient-to-t': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '0%', y: '0%' }, endPoint: { x: '0%', y: '100%' } } }
'.bg-gradient-to-tr': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '100%', y: '0%' }, endPoint: { x: '0%', y: '100%' } } }
'.bg-gradient-to-r': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '100%', y: '0%' }, endPoint: { x: '0%', y: '0%' } } }
'.bg-gradient-to-br': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '100%', y: '100%' }, endPoint: { x: '0%', y: '0%' } } }
'.bg-gradient-to-b': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '100%', y: '100%' }, endPoint: { x: '100%', y: '0%' } } }
'.bg-gradient-to-bl': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '0%', y: '100%' }, endPoint: { x: '100%', y: '0%' } } }
'.bg-gradient-to-l': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '0%', y: '0%' }, endPoint: { x: '100%', y: '0%' } } }
'.bg-gradient-to-tl': { backgroundGradient: { type: 'linear', backfillStart: true, startPoint: { x: '0%', y: '0%' }, endPoint: { x: '100%', y: '100%' } } }
```

## backgroundRadialGradient

```scss
// Component(s): Ti.UI.ListItem, Ti.UI.View
// Property(ies): backgroundGradient: type, startRadius, endRadius, backfillStart, backfillEnd - iOS Only
'.bg-radial[platform=ios]': { backgroundGradient: { type: 'radial', backfillStart: true, backfillEnd: true, startRadius: '125%', endRadius: '0%' } }
'.bg-radial-to-b[platform=ios]': { backgroundGradient: { type: 'radial', backfillStart: true, backfillEnd: true, startRadius: '150%', endRadius: '0%', startPoint: { x: '50%', y: '0%' }, endPoint: { x: '50%', y: '0%' } } }
'.bg-radial-to-bl[platform=ios]': { backgroundGradient: { type: 'radial', backfillStart: true, backfillEnd: true, startRadius: '150%', endRadius: '0%', startPoint: { x: '100%', y: '0%' }, endPoint: { x: '100%', y: '0%' } } }
'.bg-radial-to-l[platform=ios]': { backgroundGradient: { type: 'radial', backfillStart: true, backfillEnd: true, startRadius: '150%', endRadius: '0%', startPoint: { x: '100%', y: '50%' }, endPoint: { x: '100%', y: '50%' } } }
'.bg-radial-to-tl[platform=ios]': { backgroundGradient: { type: 'radial', backfillStart: true, backfillEnd: true, startRadius: '150%', endRadius: '0%', startPoint: { x: '100%', y: '100%' }, endPoint: { x: '100%', y: '100%' } } }
'.bg-radial-to-t[platform=ios]': { backgroundGradient: { type: 'radial', backfillStart: true, backfillEnd: true, startRadius: '150%', endRadius: '0%', startPoint: { x: '50%', y: '100%' }, endPoint: { x: '50%', y: '100%' } } }
'.bg-radial-to-tr[platform=ios]': { backgroundGradient: { type: 'radial', backfillStart: true, backfillEnd: true, startRadius: '150%', endRadius: '0%', startPoint: { x: '0%', y: '100%' }, endPoint: { x: '0%', y: '100%' } } }
'.bg-radial-to-r[platform=ios]': { backgroundGradient: { type: 'radial', backfillStart: true, backfillEnd: true, startRadius: '150%', endRadius: '0%', startPoint: { x: '0%', y: '50%' }, endPoint: { x: '0%', y: '50%' } } }
'.bg-radial-to-br[platform=ios]': { backgroundGradient: { type: 'radial', backfillStart: true, backfillEnd: true, startRadius: '150%', endRadius: '0%', startPoint: { x: '0%', y: '0%' }, endPoint: { x: '0%', y: '0%' } } }
```

## backgroundRepeat

```scss
// Component(s): Ti.UI.View
// Property(ies): backgroundRepeat
'.bg-repeat': { backgroundRepeat: true }
'.bg-dont-repeat': { backgroundRepeat: false }
'.background-repeat': { backgroundRepeat: true }
'.background-dont-repeat': { backgroundRepeat: false }
```

## borderStyle

```scss
// Component(s): Ti.UI.Picker[android], Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): borderStyle
'.border-style-bezel': { borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL }
'.border-style-filled': { borderStyle: Ti.UI.INPUT_BORDERSTYLE_FILLED }
'.border-style-line': { borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE }
'.border-style-none': { borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE }
'.border-style-rounded': { borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED }
'.border-style-underlined': { borderStyle: Ti.UI.INPUT_BORDERSTYLE_UNDERLINED }
```

## bubbleParent

```scss
// Component(s): Ti.Proxy
// Property(ies): bubbleParent
'.bubble-parent': { bubbleParent: true }
'.dont-bubble-parent': { bubbleParent: false }
```

## buttonStyle

```scss
// Component(s): Ti.UI.Button
// Property(ies): style
'.button-style-filled': { style: Ti.UI.BUTTON_STYLE_FILLED }
'.button-style-option-negative': { style: Ti.UI.BUTTON_STYLE_OPTION_NEGATIVE }
'.button-style-option-neutral': { style: Ti.UI.BUTTON_STYLE_OPTION_NEUTRAL }
'.button-style-option-positive': { style: Ti.UI.BUTTON_STYLE_OPTION_POSITIVE }
'.button-style-outlined': { style: Ti.UI.BUTTON_STYLE_OUTLINED }
'.button-style-text': { style: Ti.UI.BUTTON_STYLE_TEXT }
```

## cacheMode

```scss
// Component(s): Ti.UI.WebView
// Property(ies): cacheMode - Android Only
'.cache-mode[platform=android]': { cacheMode: Ti.UI.Android.WEBVIEW_LOAD_DEFAULT }
'.cache-mode-no-cache[platform=android]': { cacheMode: Ti.UI.Android.WEBVIEW_LOAD_NO_CACHE }
'.cache-mode-cache-only[platform=android]': { cacheMode: Ti.UI.Android.WEBVIEW_LOAD_CACHE_ONLY }
'.cache-mode-cache-else-network[platform=android]': { cacheMode: Ti.UI.Android.WEBVIEW_LOAD_CACHE_ELSE_NETWORK }
'.webview-load[platform=android]': { cacheMode: Ti.UI.Android.WEBVIEW_LOAD_DEFAULT }
'.webview-load-no-cache[platform=android]': { cacheMode: Ti.UI.Android.WEBVIEW_LOAD_NO_CACHE }
'.webview-load-cache-only[platform=android]': { cacheMode: Ti.UI.Android.WEBVIEW_LOAD_CACHE_ONLY }
'.webview-load-cache-else-network[platform=android]': { cacheMode: Ti.UI.Android.WEBVIEW_LOAD_CACHE_ELSE_NETWORK }
```

## cachePolicy

```scss
// Component(s): Ti.UI.WebView
// Property(ies): cachePolicy - Android Only
'.cache-policy-use-protocol-cache-only[platform=ios]': { cachePolicy: Ti.UI.iOS.CACHE_POLICY_USE_PROTOCOL_CACHE_POLICY }
'.cache-policy-ignoring-local-cache-data[platform=ios]': { cachePolicy: Ti.UI.iOS.CACHE_POLICY_RELOAD_IGNORING_LOCAL_CACHE_DATA }
'.cache-policy-return-cache-data-else-load[platform=ios]': { cachePolicy: Ti.UI.iOS.CACHE_POLICY_RETURN_CACHE_DATA_ELSE_LOAD }
'.cache-policy-return-cache-data-dont-load[platform=ios]': { cachePolicy: Ti.UI.iOS.CACHE_POLICY_RETURN_CACHE_DATA_DONT_LOAD }
```

## calendarViewShown

```scss
// Component(s): Ti.UI.Picker
// Property(ies): calendarViewShown - Android Only
'.calendar-view-shown[platform=android]': { calendarViewShown: true }
'.calendar-view-hidden[platform=android]': { calendarViewShown: false }
```

## canCancelEvents

```scss
// Component(s): Ti.UI.ScrollView
// Property(ies): canCancelEvents
'.can-cancel-events': { canCancelEvents: true }
'.cant-cancel-events': { canCancelEvents: false }
```

## cancelable

```scss
// Component(s): Ti.UI.Android.ProgressIndicator
// Property(ies): cancelable - Android Only
'.cancelable[platform=android]': { cancelable: true }
```

## canceledOnTouchOutside

```scss
// Component(s): Ti.UI.Android.ProgressIndicator
// Property(ies): canceledOnTouchOutside - Android Only
'.canceled-on-touch-outside[platform=android]': { canceledOnTouchOutside: true }
```

## canDelete

```scss
// Component(s): Ti.UI.DashboardItem
// Property(ies): canDelete - iOS Only
'.can-delete[platform=ios]': { canDelete: true }
'.cant-delete[platform=ios]': { canDelete: false }
```

## canEdit

```scss
// Component(s): Ti.UI.ListItem
// Property(ies): canEdit
'.can-edit': { canEdit: true }
'.cant-edit': { canEdit: false }
```

## canInsert

```scss
// Component(s): Ti.UI.ListItem
// Property(ies): canInsert
'.can-insert': { canInsert: true }
'.cant-insert': { canInsert: false }
```

## canMove

```scss
// Component(s): Ti.UI.ListItem
// Property(ies): canMove
'.can-move': { canMove: true }
'.cant-move': { canMove: false }
```

## canScroll

```scss
// Component(s): Ti.UI.ListView
// Property(ies): canScroll
'.can-scroll': { canScroll: true }
'.cant-scroll': { canScroll: false }
```

## caseInsensitiveSearch

```scss
// Component(s): Ti.UI.ListView
// Property(ies): caseInsensitiveSearch
'.case-sensitive-search': { caseInsensitiveSearch: false }
'.case-insensitive-search': { caseInsensitiveSearch: true }
```

## checkable

```scss
// Component(s): Ti.Android.MenuItem
// Property(ies): checkable - Android Only
'.checable[platform=android]': { checkable: true }
'.unchecable[platform=android]': { checkable: false }
```

## clearButtonMode

```scss
// Component(s): Ti.UI.TextField
// Property(ies): clearButtonMode - iOS Only
'.clear-button-mode-always[platform=ios]': { clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS }
'.clear-button-mode-never[platform=ios]': { clearButtonMode: Ti.UI.INPUT_BUTTONMODE_NEVER }
'.clear-button-mode-on-blur[platform=ios]': { clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONBLUR }
'.clear-button-mode-on-focus[platform=ios]': { clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS }
```

## clearOnEdit

```scss
// Component(s): Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): clearOnEdit - Android Only
'.clear-on-edit[platform=android]': { clearOnEdit: true }
'.dont-clear-on-edit[platform=android]': { clearOnEdit: false }
```

## clipMode

```scss
// Component(s): Ti.UI.View
// Property(ies): clipMode - iOS Only
'.clip-enabled[platform=ios]': { clipMode: Ti.UI.iOS.CLIP_MODE_ENABLED }
'.clip-disabled[platform=ios]': { clipMode: Ti.UI.iOS.CLIP_MODE_DISABLED }
```

## constraint

```scss
// Component(s): Ti.UI.Animation
// Property(ies): A custom property to use it with the Animation module
'.horizontal-constraint': { constraint: 'horizontal' }
'.vertical-constraint': { constraint: 'vertical' }
```


## contentHeightAndWidth

```scss
// Component(s): Ti.UI.ScrollView
// Property(ies): contentWidth, contentHeight
'.content-auto': { contentWidth: Ti.UI.SIZE, contentHeight: Ti.UI.SIZE }
'.content-screen': { contentWidth: Ti.UI.FILL, contentHeight: Ti.UI.FILL }
```

## datePickerStyle

```scss
// Component(s): Ti.UI.Picker
// Property(ies): datePickerStyle
'.date-picker-style-automatic': { datePickerStyle: Ti.UI.DATE_PICKER_STYLE_AUTOMATIC }
'.date-picker-style-wheels': { datePickerStyle: Ti.UI.DATE_PICKER_STYLE_WHEELS }
'.date-picker-style-compact': { datePickerStyle: Ti.UI.DATE_PICKER_STYLE_COMPACT }
'.date-picker-style-inline': { datePickerStyle: Ti.UI.DATE_PICKER_STYLE_INLINE }
```

## defaultItemTemplate

```scss
// Component(s): Ti.UI.ListView
// Property(ies): defaultItemTemplate
'.list-item-template': { defaultItemTemplate: Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT }
'.list-item-template-contacts[platform=ios]': { defaultItemTemplate: Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS }
'.list-item-template-settings[platform=ios]': { defaultItemTemplate: Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS }
'.list-item-template-subtitle[platform=ios]': { defaultItemTemplate: Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE }
```

## dimBackgroundForSearch

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): dimBackgroundForSearch - iOS Only
'.dim-background-for-search[platform=ios]': { dimBackgroundForSearch: true }
'.dont-dim-background-for-search[platform=ios]': { dimBackgroundForSearch: false }
```

## disableBounce

```scss
// Component(s): Ti.UI.ListView, Ti.UI.ScrollableView, Ti.UI.ScrollView, Ti.UI.WebView
// Property(ies): disableBounce - iOS Only
'.disable-bounce[platform=ios]': { disableBounce: true }
'.enable-bounce[platform=ios]': { disableBounce: false }
```

## disableContextMenu

```scss
// Component(s): Ti.UI.WebView
// Property(ies): disableContextMenu - Android Only
'.disable-context-menu[platform=android]': { disableContextMenu: true }
'.dont-disable-context-menu[platform=android]': { disableContextMenu: false }
```

## displayCaps

```scss
// Property(ies): width, height
// Component(s): Ti.UI.ActivityIndicator, Ti.UI.Animation, Ti.UI.iPad.Popover, Ti.UI.View
// Description: width and height properties using Ti.Platform.displayCaps platformWidth and platformHeight values
'.platform-w': { width: Ti.Platform.displayCaps.platformWidth }
'.platform-h': { height: Ti.Platform.displayCaps.platformHeight }
'.inverted-platform-w[platform=ios]': { width: Ti.Platform.displayCaps.platformHeight }
'.inverted-platform-h[platform=ios]': { height: Ti.Platform.displayCaps.platformWidth }
'.inverted-platform-w[platform=android]': { width: Ti.Platform.displayCaps.platformWidth }
'.inverted-platform-h[platform=android]': { height: Ti.Platform.displayCaps.platformHeight }
```

## displayHomeAsUp

```scss
// Component(s): Ti.Android.ActionBar
// Property(ies): displayHomeAsUp - Android Only
'.display-home-as-up[platform=android]': { displayHomeAsUp: true }
'.dont-display-home-as-up[platform=android]': { displayHomeAsUp: false }
```

## draggingType

```scss
// Component(s): For the Animation Component
// Property(ies): draggingType
'.drag-apply': { draggingType: 'apply' }
'.drag-animate': { draggingType: 'animate' }
```

## drawerIndicatorEnabled

```scss
// Component(s): Ti.UI.Android.DrawerLayout
// Property(ies): drawerIndicatorEnabled - Android Only
'.drawer-indicator-enabled[platform=android]': { drawerIndicatorEnabled: true }
'.drawer-indicator-disabled[platform=android]': { drawerIndicatorEnabled: false }
```

## drawerLockMode

```scss
// Component(s): Ti.UI.Android.DrawerLayout
// Property(ies): drawerLockMode - Android Only
'.drawer-lock-mode-locked-closed[platform=android]': { drawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_LOCKED_CLOSED }
'.drawer-lock-mode-locked-open[platform=android]': { drawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_LOCKED_OPEN }
'.drawer-lock-mode-undefined[platform=android]': { drawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_UNDEFINED }
'.drawer-lock-mode-unlocked[platform=android]': { drawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_UNLOCKED }
```

## dropShadow

## duration

```scss
// Component(s): Ti.UI.Notification
// Property(ies): duration - Android Only
'.notification-duration-long[platform=android]': { duration: Ti.UI.NOTIFICATION_DURATION_LONG }
'.notification-duration-short[platform=android]': { duration: Ti.UI.NOTIFICATION_DURATION_SHORT }
```

## editable

```scss
// Component(s): Ti.UI.DashboardView, Ti.UI.SearchBar, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): editable
'.editable': { editable: true }
'.none-editable': { editable: false }
```

## editing

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): editing - iOS Only
'.editing': { editing: true }
'.no-editing': { editing: true }
```

## ellipsize

```scss
// Component(s): Ti.UI.Label
// Property(ies): ellipsize
'.ellipsize-end': { ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END }
'.ellipsize-clip': { ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_CLIP }
'.ellipsize-none': { ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_NONE }
'.ellipsize-start': { ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_START }
'.ellipsize-middle': { ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_MIDDLE }
'.ellipsize-marquee': { ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_MARQUEE }
'.ellipsize-char-wrap': { ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_CHAR_WRAP }
'.ellipsize-word-wrap': { ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_WORD_WRAP }

// Component(s): Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): ellipsize
'.ellipsize': { ellipsize: true }
'.no-ellipsize': { ellipsize: false }
```

## enableCopy

```scss
// Component(s): Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): enableCopy
'.enable-copy': { enableCopy: true }
'.disable-copy': { enableCopy: false }
```

## enabled

```scss
// Component(s): Ti.UI.Button, Ti.UI.iOS.Stepper, Ti.Android.MenuItem, Ti.UI.Slider, Ti.UI.Switch
// Property(ies): enabled
'.enabled': { enabled: true }
'.disabled': { enabled: false }
```

## enableJavascriptInterface

```scss
// Component(s): Ti.UI.WebView
// Property(ies): enableJavascriptInterface - Android Only
'.enable-javascript-interfase[platform=android]': { enableJavascriptInterface: true }
'.disable-javascript-interfase[platform=android]': { enableJavascriptInterface: false }
'.enable-js-interfase[platform=android]': { enableJavascriptInterface: true }
'.disable-js-interfase[platform=android]': { enableJavascriptInterface: false }
```

## enableReturnKey

```scss
// Component(s): Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): enableReturnKey
'.enable-return-key': { enableReturnKey: true }
'.disable-return-key': { enableReturnKey: false }
```

## enableZoomControls

```scss
// Component(s): Ti.UI.ImageView. Ti.UI.WebView
// Property(ies): enableZoomControls - Android Only
'.enable-zoom-control[platform=android]': { enableZoomControls: true }
'.disable-zoom-control[platform=android]': { enableZoomControls: false }
```

## exitOnClose

```scss
// Component(s): Ti.UI.TabGroup, Ti.UI.Window
// Property(ies): exitOnClose - Android Only
'.exit-on-close[platform=android]': { exitOnClose: true }
'.dont-exit-on-close[platform=android]': { exitOnClose: false }
```

## extendBackground

```scss
// Component(s): Ti.UI.Toolbar
// Property(ies): extendBackground
'.extend-background': { extendBackground: true }
'.dont-extend-background': { extendBackground: false }
```

## extendEdges

```scss
// Component(s): Ti.UI.Window
// Property(ies): extendEdges - iOS Only
'.extend-edges-all[platform=ios]': { extendEdges: [ Ti.UI.EXTEND_EDGE_ALL ] }
'.extend-edges-bottom[platform=ios]': { extendEdges: [ Ti.UI.EXTEND_EDGE_BOTTOM ] }
'.extend-edges-left[platform=ios]': { extendEdges: [ Ti.UI.EXTEND_EDGE_LEFT ] }
'.extend-edges-none[platform=ios]': { extendEdges: [ Ti.UI.EXTEND_EDGE_NONE ] }
'.extend-edges-right[platform=ios]': { extendEdges: [ Ti.UI.EXTEND_EDGE_RIGHT ] }
'.extend-edges-top[platform=ios]': { extendEdges: [ Ti.UI.EXTEND_EDGE_TOP ] }
```

## extendSafeArea

```scss
// Component(s): Ti.UI.Window
// Property(ies): extendSafeArea
'.extend-safe-area': { extendSafeArea: true }
'.dont-extend-safe-area': { extendSafeArea: false }
```
## fastScroll

```scss
// Component(s): Ti.UI.ListView
// Property(ies): fastScroll - Android Only
'.fast-scroll[platform=android]': { fastScroll: true }
'.slow-scroll[platform=android]': { fastScroll: false }
```

## filterAnchored

```scss
// Component(s): Ti.UI.TableView
// Property(ies): filterAnchored
'.filter-anchored': { filterAnchored: true }
'.dont-filter-anchored': { filterAnchored: false }
```

## filterAttribute

```scss
// Component(s): Ti.UI.TableView
// Property(ies): filterAttribute
'.filter-attribute': { filterAttribute: true }
'.dont-filter-attribute': { filterAttribute: false }
```

## filterCaseInsensitive

```scss
// Component(s): Ti.UI.TableView
// Property(ies): filterCaseInsensitive
'.filter-case-sensitive': { filterCaseInsensitive: false }
'.filter-case-insensitive': { filterCaseInsensitive: true }
```

## filterTouchesWhenObscured

```scss
// Component(s): Ti.UI.View
// Property(ies): filterTouchesWhenObscured - Android Only
'.filter-touches-when-obscured[platform=android]': { filterTouchesWhenObscured: true }
'.dont-filter-touches-when-obscured[platform=android]': { filterTouchesWhenObscured: false }
```

## flags

```scss
// Component(s): Ti.Android.Intent
// Property(ies): flags - Android Only
'.flag-activity-brought-to-front[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_BROUGHT_TO_FRONT }
'.flag-activity-clear-top[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_CLEAR_TOP }
'.flag-activity-clear-when-task-reset[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET }
'.flag-activity-exclude-from-recents[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS }
'.flag-activity-forward-result[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_FORWARD_RESULT }
'.flag-activity-launched-from-history[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY }
'.flag-activity-multiple-task[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_MULTIPLE_TASK }
'.flag-activity-new-task[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_NEW_TASK }
'.flag-activity-no-animation[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_NO_ANIMATION }
'.flag-activity-no-history[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_NO_HISTORY }
'.flag-activity-no-user-action[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_NO_USER_ACTION }
'.flag-activity-previous-is-top[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_PREVIOUS_IS_TOP }
'.flag-activity-reorder-to-front[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_REORDER_TO_FRONT }
'.flag-activity-reset-task-if-needed[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED }
'.flag-activity-single-top[platform=android]': { flags: Ti.Android.FLAG_ACTIVITY_SINGLE_TOP }
'.flag-auto-cancel[platform=android]': { flags: Ti.Android.FLAG_AUTO_CANCEL }
'.flag-cancel-current[platform=android]': { flags: Ti.Android.FLAG_CANCEL_CURRENT }
'.flag-debug-log-resolution[platform=android]': { flags: Ti.Android.FLAG_DEBUG_LOG_RESOLUTION }
'.flag-from-background[platform=android]': { flags: Ti.Android.FLAG_FROM_BACKGROUND }
'.flag-grant-read-uri-permission[platform=android]': { flags: Ti.Android.FLAG_GRANT_READ_URI_PERMISSION }
'.flag-grant-write-uri-permission[platform=android]': { flags: Ti.Android.FLAG_GRANT_WRITE_URI_PERMISSION }
'.flag-immutable[platform=android]': { flags: Ti.Android.FLAG_IMMUTABLE }
'.flag-insistent[platform=android]': { flags: Ti.Android.FLAG_INSISTENT }
'.flag-mutable[platform=android]': { flags: Ti.Android.FLAG_MUTABLE }
'.flag-no-clear[platform=android]': { flags: Ti.Android.FLAG_NO_CLEAR }
'.flag-no-create[platform=android]': { flags: Ti.Android.FLAG_NO_CREATE }
'.flag-one-shot[platform=android]': { flags: Ti.Android.FLAG_ONE_SHOT }
'.flag-ongoing-event[platform=android]': { flags: Ti.Android.FLAG_ONGOING_EVENT }
'.flag-only-alert-once[platform=android]': { flags: Ti.Android.FLAG_ONLY_ALERT_ONCE }
'.flag-receiver-registered-only[platform=android]': { flags: Ti.Android.FLAG_RECEIVER_REGISTERED_ONLY }
'.flag-show-lights[platform=android]': { flags: Ti.Android.FLAG_SHOW_LIGHTS }
'.flag-update-current[platform=android]': { flags: Ti.Android.FLAG_UPDATE_CURRENT }
```

## flagSecure

```scss
// Component(s): Ti.UI.Window
// Property(ies): flagSecure - Android Only
'.flag-secure[platform=android]': { flagSecure: true }
'.flag-not-secure[platform=android]': { flagSecure: false }
```

## flip

```scss
// Component(s): For the Animation Component
// Property(ies): flip
'.flip-horizontal': { flip: 'horizontal' }
'.flip-vertical': { flip: 'vertical' }
```

## focusable

```scss
// Component(s): Ti.UI.View
// Property(ies): focusable - Android Only
'.focusable[platform=android]': { focusable: true }
'.no-focusable[platform=android]': { focusable: false }
```

## fontStyle

```scss
// Component(s): Ti.UI.ActivityIndicator, Ti.UI.Button, Ti.UI.Label, Ti.UI.ListItem, Ti.UI.Picker, Ti.UI.PickerColumn, Ti.UI.PickerRow, Ti.UI.ProgressBar, Ti.UI.Switch, Ti.UI.TableViewRow, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): fontStyle
'.italic': { font: { fontStyle: 'italic' } }
'.not-italic': { font: { fontStyle: 'normal' } }
```

## footerDividersEnabled

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): footerDividersEnabled - Android Only
'.footer-dividers-enabled[platform=android]': { footerDividersEnabled: true }
'.footer-dividers-disabled[platform=android]': { footerDividersEnabled: false }
```

## format24

```scss
// Component(s): Ti.UI.Picker
// Property(ies): format24 - Android Only
'.format-12[platform=android]': { format24: false }
'.format-24[platform=android]': { format24: true }
```

## fullscreen

```scss
// Component(s): Ti.Media.VideoPlayer[android], Ti.UI.TextArea, Ti.UI.TextField, Ti.UI.Window
// Property(ies): fullscreen
'.fullscreen': { fullscreen: true }
'.fullscreen-disabled': { fullscreen: false }
```

## gravity

```scss
// Component(s): Ti.UI.Notification
// Property(ies): gravity - Android Only
'.gravity-axis-clip[platform=android]': { gravity: Ti.UI.Android.GRAVITY_AXIS_CLIP }
'.gravity-axis-pull-after[platform=android]': { gravity: Ti.UI.Android.GRAVITY_AXIS_PULL_AFTER }
'.gravity-axis-pull-before[platform=android]': { gravity: Ti.UI.Android.GRAVITY_AXIS_PULL_BEFORE }
'.gravity-axis-specified[platform=android]': { gravity: Ti.UI.Android.GRAVITY_AXIS_SPECIFIED }
'.gravity-axis-x-shift[platform=android]': { gravity: Ti.UI.Android.GRAVITY_AXIS_X_SHIFT }
'.gravity-axis-y-shift[platform=android]': { gravity: Ti.UI.Android.GRAVITY_AXIS_Y_SHIFT }
'.gravity-bottom[platform=android]': { gravity: Ti.UI.Android.GRAVITY_BOTTOM }
'.gravity-center-horizontal[platform=android]': { gravity: Ti.UI.Android.GRAVITY_CENTER_HORIZONTAL }
'.gravity-center-vertical[platform=android]': { gravity: Ti.UI.Android.GRAVITY_CENTER_VERTICAL }
'.gravity-center[platform=android]': { gravity: Ti.UI.Android.GRAVITY_CENTER }
'.gravity-clip-horizontal[platform=android]': { gravity: Ti.UI.Android.GRAVITY_CLIP_HORIZONTAL }
'.gravity-clip-vertical[platform=android]': { gravity: Ti.UI.Android.GRAVITY_CLIP_VERTICAL }
'.gravity-display-clip-horizontal[platform=android]': { gravity: Ti.UI.Android.GRAVITY_DISPLAY_CLIP_HORIZONTAL }
'.gravity-display-clip-vertical[platform=android]': { gravity: Ti.UI.Android.GRAVITY_DISPLAY_CLIP_VERTICAL }
'.gravity-end[platform=android]': { gravity: Ti.UI.Android.GRAVITY_END }
'.gravity-fill-horizontal[platform=android]': { gravity: Ti.UI.Android.GRAVITY_FILL_HORIZONTAL }
'.gravity-fill-vertical[platform=android]': { gravity: Ti.UI.Android.GRAVITY_FILL_VERTICAL }
'.gravity-fill[platform=android]': { gravity: Ti.UI.Android.GRAVITY_FILL }
'.gravity-horizontal-gravity-mask[platform=android]': { gravity: Ti.UI.Android.GRAVITY_HORIZONTAL_GRAVITY_MASK }
'.gravity-left[platform=android]': { gravity: Ti.UI.Android.GRAVITY_LEFT }
'.gravity-no-gravity[platform=android]': { gravity: Ti.UI.Android.GRAVITY_NO_GRAVITY }
'.gravity-relative-horizontal-gravity-mask[platform=android]': { gravity: Ti.UI.Android.GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK }
'.gravity-relative-layout-direction[platform=android]': { gravity: Ti.UI.Android.GRAVITY_RELATIVE_LAYOUT_DIRECTION }
'.gravity-right[platform=android]': { gravity: Ti.UI.Android.GRAVITY_RIGHT }
'.gravity-start[platform=android]': { gravity: Ti.UI.Android.GRAVITY_START }
'.gravity-top[platform=android]': { gravity: Ti.UI.Android.GRAVITY_TOP }
'.gravity-vertical-gravity-mask[platform=android]': { gravity: Ti.UI.Android.GRAVITY_VERTICAL_GRAVITY_MASK }
```

## gridColumnsStartEnd

```scss
// Component(s): Ti.UI.ActivityIndicator, Ti.UI.Animation, Ti.UI.iPad.Popover, Ti.UI.View, Ti.UI.Window
// Property(ies): width - For Grid Column Start/End
'.col-span-1': { width: '8.333334%' }
'.col-span-2': { width: '16.666667%' }
'.col-span-3': { width: '25%' }
'.col-span-4': { width: '33.333334%' }
'.col-span-5': { width: '41.666667%' }
'.col-span-6': { width: '50%' }
'.col-span-7': { width: '58.333334%' }
'.col-span-8': { width: '66.666667%' }
'.col-span-9': { width: '75%' }
'.col-span-10': { width: '83.333334%' }
'.col-span-11': { width: '91.666667%' }
'.col-span-12': { width: '100%' }

// Component(s): Ti.UI.ActivityIndicator, Ti.UI.Animation, Ti.UI.iPad.Popover, Ti.UI.View, Ti.UI.Window
// Property(ies): height - For Grid Row Start/End
'.row-span-1': { height: '8.333334%' }
'.row-span-2': { height: '16.666667%' }
'.row-span-3': { height: '25%' }
'.row-span-4': { height: '33.333334%' }
'.row-span-5': { height: '41.666667%' }
'.row-span-6': { height: '50%' }
'.row-span-7': { height: '58.333334%' }
'.row-span-8': { height: '66.666667%' }
'.row-span-9': { height: '75%' }
'.row-span-10': { height: '83.333334%' }
'.row-span-11': { height: '91.666667%' }
'.row-span-12': { height: '100%' }
```

## gridFlow

```scss
// Component(s): Ti.UI.View
// Property(ies): layout
// Description: Grid Flow - layout
'.grid': { layout: 'horizontal' }
'.grid-flow-col': { layout: 'horizontal' }
'.grid-flow-row': { layout: 'vertical' }
```

## gridSystem

```scss
// Component(s): Ti.UI.ActivityIndicator, Ti.UI.Animation, Ti.UI.iPad.Popover, Ti.UI.View, Ti.UI.Window
// Property(ies): width - For Grid Template Columns
'.grid-cols-1': { width: '100%' }
'.grid-cols-2': { width: '50%' }
'.grid-cols-3': { width: '33.333334%' }
'.grid-cols-4': { width: '25%' }
'.grid-cols-5': { width: '20%' }
'.grid-cols-6': { width: '16.666667%' }
'.grid-cols-7': { width: '14.285714%' }
'.grid-cols-8': { width: '12.5%' }
'.grid-cols-9': { width: '11.111111%' }
'.grid-cols-10': { width: '10%' }
'.grid-cols-11': { width: '9.090909%' }
'.grid-cols-12': { width: '8.333334%' }

// Component(s): Ti.UI.ActivityIndicator, Ti.UI.Animation, Ti.UI.iPad.Popover, Ti.UI.View, Ti.UI.Window
// Property(ies): height - For Grid Template Rows
'.grid-rows-1': { height: '100%' }
'.grid-rows-2': { height: '50%' }
'.grid-rows-3': { height: '33.333334%' }
'.grid-rows-4': { height: '25%' }
'.grid-rows-5': { height: '20%' }
'.grid-rows-6': { height: '16.666667%' }
'.grid-rows-7': { height: '14.285714%' }
'.grid-rows-8': { height: '12.5%' }
'.grid-rows-9': { height: '11.111111%' }
'.grid-rows-10': { height: '10%' }
'.grid-rows-11': { height: '9.090909%' }
'.grid-rows-12': { height: '8.333334%' }
```

## hasCheck

```scss
// Component(s): Ti.UI.TableViewRow
// Property(ies): hasCheck
'.has-check': { hasCheck: true }
'.dont-have-check': { hasCheck: false }
```

## hasChild

```scss
// Component(s): Ti.UI.TableViewRow
// Property(ies): hasChild
'.has-child': { hasChild: true }
'.dont-have-child': { hasChild: false }
```

## hasDetail

```scss
// Component(s): Ti.UI.TableViewRow
// Property(ies): hasDetail
'.has-detail': { hasDetail: true }
'.dont-have-detail': { hasDetail: false }
```

## headerDividersEnabled

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): headerDividersEnabled - Android Only
'.header-dividers-enabled[platform=android]': { headerDividersEnabled: true }
'.header-dividers-disabled[platform=android]': { headerDividersEnabled: false }
```

## hiddenBehavior

```scss
// Component(s): Ti.UI.View
// Property(ies): hiddenBehavior - Android Only
'.hidden-behavior[platform=android]': { hiddenBehavior: true }
'.no-hidden-behavior[platform=android]': { hiddenBehavior: false }
```

## hideLoadIndicator

```scss
// Component(s): Ti.UI.WebView
// Property(ies): hideLoadIndicator - iOS Only
'.hide-load-indicator[platform=ios]': { hideLoadIndicator: true }
'.show-load-indicator[platform=ios]': { hideLoadIndicator: false }
```

## hidesBackButton

```scss
// Component(s): Ti.UI.Window
// Property(ies): hidesBackButton
'.hides-back-button': { hidesBackButton: true }
'.shows-back-button': { hidesBackButton: false }
```

## hidesBarsOnSwipe

```scss
// Component(s): Ti.UI.Window
// Property(ies): hidesBarsOnSwipe - iOS Only
'.hides-bars-on-swipe[platform=ios]': { hidesBarsOnSwipe: true }
'.shows-bars-on-swipe[platform=ios]': { hidesBarsOnSwipe: false }
```

## hidesBarsOnTap

```scss
// Component(s): Ti.UI.Window
// Property(ies): hidesBarsOnTap - iOS Only
'.hides-bars-on-tap[platform=ios]': { hidesBarsOnTap: true }
'.shows-bars-on-tap[platform=ios]': { hidesBarsOnTap: false }
```

## hidesBarsWhenKeyboardAppears

```scss
// Component(s): Ti.UI.Window
// Property(ies): hidesBarsWhenKeyboardAppears - iOS Only
'.hides-bars-when-keyboard-appears[platform=ios]': { hidesBarsWhenKeyboardAppears: true }
'.shows-bars-when-keyboard-appears[platform=ios]': { hidesBarsWhenKeyboardAppears: false }
```

## hideSearchOnSelection

```scss
// Component(s): Ti.UI.TableView
// Property(ies): hideSearchOnSelection - iOS Only
'.hide-search-on-selection[platform=ios]': { hideSearchOnSelection: true }
'.show-search-on-selection[platform=ios]': { hideSearchOnSelection: false }
```

## hideShadow

```scss
// Component(s): Ti.UI.Window
// Property(ies): hideShadow - iOS Only
'.hide-shadow[platform=ios]': { hideShadow: true }
'.show-shadow[platform=ios]': { hideShadow: false }
```

## hidesSearchBarWhenScrolling

```scss
// Component(s): Ti.UI.Window
// Property(ies): hidesSearchBarWhenScrolling - iOS Only
'.hides-search-bar-when-scrolling[platform=ios]': { hidesSearchBarWhenScrolling: true }
'.shows-search-bar-when-scrolling[platform=ios]': { hidesSearchBarWhenScrolling: false }
```

## hintType

```scss
// Component(s): Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): hintType - Android Only
'.hint-type-static[platform=android]': { hintType: Ti.UI.HINT_TYPE_STATIC }
'.hint-type-animated[platform=android]': { hintType: Ti.UI.HINT_TYPE_ANIMATED }
```

## hires

```scss
// Component(s): Ti.UI.ImageView. Ti.UI.WebView
// Property(ies): hires - iOS Only
'.hires[platform=ios]': { hires: true }
'.lowres[platform=ios]': { hires: false }
```

## homeButtonEnabled

```scss
// Component(s): Ti.Android.ActionBar
// Property(ies): homeButtonEnabled - Android Only
'.home-button-enabled[platform=android]': { homeButtonEnabled: true }
'.home-button-disabled[platform=android]': { homeButtonEnabled: false }
```

## homeIndicatorAutoHidden

```scss
// Component(s): Ti.UI.Window
// Property(ies): homeIndicatorAutoHidden - iOS Only
'.home-indicator-auto-hidden[platform=ios]': { homeIndicatorAutoHidden: true }
'.home-indicator-always-visible[platform=ios]': { homeIndicatorAutoHidden: false }
```

## horizontalWrap

```scss
// Component(s): Ti.UI.View
// Property(ies): horizontalWrap - Android Only
'.horizontal-wrap[platform=android]': { horizontalWrap: true }
'.no-horizontal-wrap[platform=android]': { horizontalWrap: false }
```

## html

```scss
// Component(s): Ti.UI.EmailDialog
// Property(ies): html
'.html': { html: true }
```

## icon

```scss
// Component(s): Ti.UI.ShortcutItem
// Property(ies): icon - iOS Only
'.shortcut-icon-type-add[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_ADD' }
'.shortcut-icon-type-alarm[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_ALARM' }
'.shortcut-icon-type-audio[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_AUDIO' }
'.shortcut-icon-type-bookmark[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_BOOKMARK' }
'.shortcut-icon-type-capture-photo[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_PHOTO' }
'.shortcut-icon-type-capture-video[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_VIDEO' }
'.shortcut-icon-type-cloud[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_CLOUD' }
'.shortcut-icon-type-compose[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_COMPOSE' }
'.shortcut-icon-type-confirmation[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_CONFIRMATION' }
'.shortcut-icon-type-contact[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_CONTACT' }
'.shortcut-icon-type-date[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_DATE' }
'.shortcut-icon-type-favorite[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_FAVORITE' }
'.shortcut-icon-type-home[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_HOME' }
'.shortcut-icon-type-invitation[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_INVITATION' }
'.shortcut-icon-type-location[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_LOCATION' }
'.shortcut-icon-type-love[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_LOVE' }
'.shortcut-icon-type-mail[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_MAIL' }
'.shortcut-icon-type-mark-location[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_MARK_LOCATION' }
'.shortcut-icon-type-message[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_MESSAGE' }
'.shortcut-icon-type-pause[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_PAUSE' }
'.shortcut-icon-type-play[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_PLAY' }
'.shortcut-icon-type-prohibit[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_PROHIBIT' }
'.shortcut-icon-type-search[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_SEARCH' }
'.shortcut-icon-type-share[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_SHARE' }
'.shortcut-icon-type-shuffle[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_SHUFFLE' }
'.shortcut-icon-type-task-completed[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_TASK_COMPLETED' }
'.shortcut-icon-type-task[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_TASK' }
'.shortcut-icon-type-time[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_TIME' }
'.shortcut-icon-type-update[platform=ios]': { icon: 'Ti.UI.iOS.SHORTCUT_ICON_TYPE_UPDATE' }
```

## iconified

```scss
// Component(s): Ti.UI.Android.SearchView, Ti.UI.Android.SearchBar
// Property(ies): iconified
'.iconified': { iconified: true }
```

## iconifiedByDefault

```scss
// Component(s): Ti.UI.Android.SearchView, Ti.UI.SearchBar
// Property(ies): iconifiedByDefault
'.iconified-by-default': { iconifiedByDefault: true }
```

## iconIsMask

```scss
// Component(s): Ti.UI.Tab
// Property(ies): iconIsMask - iOS Only
'.icon-is-mask[platform=ios]': { iconIsMask: true }
'.icon-is-not-mask[platform=ios]': { iconIsMask: false }
```

## ignoreSslError

```scss
// Component(s): Ti.UI.WebView
// Property(ies): ignoreSslError
'.ignore-ssl-error': { ignoreSslError: true }
'.dont-ignore-ssl-error': { ignoreSslError: false }
```

## imageTouchFeedback

```scss
// Component(s): Ti.UI.ImageView
// Property(ies): imageTouchFeedback - Android Only
'.image-touch-feedback[platform=android]': { imageTouchFeedback: true }
'.no-image-touch-feedback[platform=android]': { imageTouchFeedback: false }
```

## includeFontPadding

```scss
// Component(s): Ti.UI.Label
// Property(ies): includeFontPadding - Android Only
'.include-font-padding[platform=android]': { includeFontPadding: true }
'.dont-include-font-padding[platform=android]': { includeFontPadding: false }
```

## includeOpaqueBars

```scss
// Component(s): Ti.UI.Window
// Property(ies): includeOpaqueBars - iOS Only
'.include-opaque-bars[platform=ios]': { includeOpaqueBars: true }
'.exclude-opaque-bars[platform=ios]': { includeOpaqueBars: false }
```

## inputType

```scss
// Component(s): Ti.UI.TextField
// Property(ies): inputType - Android Only
'.input-type-class-number[platform=android]': { inputType: Ti.UI.INPUT_TYPE_CLASS_NUMBER }
'.input-type-class-text[platform=android]': { inputType: Ti.UI.INPUT_TYPE_CLASS_TEXT }
```

## items

```scss
// Component(s): Ti.UI.ActivityIndicator, Ti.UI.Animaiton, Ti.UI.View, Ti.UI.Window
// Property(ies): top, bottom, width(FILL), height(FILL)
// Description: top, bottom, width, height properties for aligning items in a Grid System
'.items-start': { top: 0 }
'.items-end': { bottom: 0 }
'.items-center': { width: Ti.UI.FILL, height: Ti.UI.FILL }
```

## keepScreenOn

```scss
// Component(s): Ti.UI.View
// Property(ies): keepScreenOn - Android Only
'.keep-screen-on[platform=android]': { keepScreenOn: true }
'.dont-keep-screen-on[platform=android]': { keepScreenOn: false }
```

## keepSectionsInSearch

```scss
// Component(s): Ti.UI.ListView
// Property(ies): keepSectionsInSearch - iOS Only
'.keep-sections-in-search[platform=ios]': { keepSectionsInSearch: true }
'.dont-keep-sections-in-search[platform=ios]': { keepSectionsInSearch: false }
```

## keyboardAppearance

```scss
// Component(s): Ti.UI.AlertDialog, Ti.UI.SearchBar, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): keyboardAppearance - iOS Only
'.keyboard-appearance[platform=ios]': { keyboardAppearance: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT }
'.keyboard-appearance-dark[platform=ios]': { keyboardAppearance: Ti.UI.KEYBOARD_APPEARANCE_DARK }
'.keyboard-appearance-light[platform=ios]': { keyboardAppearance: Ti.UI.KEYBOARD_APPEARANCE_LIGHT }
```

## keyboardDismissMode

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): keyboardDismissMode - iOS Only
'.keyboard-dismiss-mode-none[platform=ios]': { keyboardDismissMode: Ti.UI.iOS.KEYBOARD_DISMISS_MODE_NONE }
'.keyboard-dismiss-mode-on-drag[platform=ios]': { keyboardDismissMode: Ti.UI.iOS.KEYBOARD_DISMISS_MODE_ON_DRAG }
'.keyboard-dismiss-mode-interactive[platform=ios]': { keyboardDismissMode: Ti.UI.iOS.KEYBOARD_DISMISS_MODE_INTERACTIVE }
```

## keyboardDisplayRequiresUserAction

```scss
// Component(s): Ti.UI.WebView
// Property(ies): keyboardDisplayRequiresUserAction - iOS Only
'.keyboard-display-requires-user-action[platform=ios]': { keyboardDisplayRequiresUserAction: true }
'.keyboard-display-dont-require-user-action[platform=ios]': { keyboardDisplayRequiresUserAction: false }
```

## keyboardType

```scss
// Component(s): Ti.UI.AlertDialog, Ti.UI.SearchBar, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): keyboardType
'.keyboard-type': { keyboardType: Ti.UI.KEYBOARD_TYPE_DEFAULT }
'.keyboard-type-ascii': { keyboardType: Ti.UI.KEYBOARD_TYPE_ASCII }
'.keyboard-type-decimal-pad': { keyboardType: Ti.UI.KEYBOARD_TYPE_DECIMAL_PAD }
'.keyboard-type-email': { keyboardType: Ti.UI.KEYBOARD_TYPE_EMAIL }
'.keyboard-type-namephone-pad': { keyboardType: Ti.UI.KEYBOARD_TYPE_NAMEPHONE_PAD }
'.keyboard-type-number-pad': { keyboardType: Ti.UI.KEYBOARD_TYPE_NUMBER_PAD }
'.keyboard-type-numbers-punctuation': { keyboardType: Ti.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION }
'.keyboard-type-phone-pad': { keyboardType: Ti.UI.KEYBOARD_TYPE_PHONE_PAD }
'.keyboard-type-url': { keyboardType: Ti.UI.KEYBOARD_TYPE_URL }
'.keyboard-type-appearance[platform=ios]': { keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT }
'.keyboard-type-appearance-dark[platform=ios]': { keyboardType: Ti.UI.KEYBOARD_APPEARANCE_DARK }
'.keyboard-type-appearance-light[platform=ios]': { keyboardType: Ti.UI.KEYBOARD_APPEARANCE_LIGHT }
'.keyboard-type-twitter[platform=ios]': { keyboardType: Ti.UI.KEYBOARD_TYPE_TWITTER }
'.keyboard-type-websearch[platform=ios]': { keyboardType: Ti.UI.KEYBOARD_TYPE_WEBSEARCH }
```

## largeTitleDisplayMode

```scss
// Component(s): Ti.UI.Window
// Property(ies): largeTitleDisplayMode - iOS Only
'.large-title-display-always[platform=ios]': { largeTitleDisplayMode: Ti.UI.iOS.LARGE_TITLE_DISPLAY_MODE_ALWAYS }
'.large-title-display-automatic[platform=ios]': { largeTitleDisplayMode: Ti.UI.iOS.LARGE_TITLE_DISPLAY_MODE_AUTOMATIC }
'.large-title-display-never[platform=ios]': { largeTitleDisplayMode: Ti.UI.iOS.LARGE_TITLE_DISPLAY_MODE_NEVER }
```

## largeTitleEnabled

```scss
// Component(s): Ti.UI.Window
// Property(ies): largeTitleEnabled - iOS Only
'.large-title-enabled[platform=ios]': { largeTitleEnabled: true }
'.large-title-disabled[platform=ios]': { largeTitleEnabled: false }
```

## layout

```scss
// Component(s): Ti.UI.OptionBar, Ti.UI.View
// Property(ies): layout
'.composite': { layout: 'composite' }
'.horizontal': { layout: 'horizontal' }
'.vertical': { layout: 'vertical' }
```

## lazyLoadingEnabled

```scss
// Component(s): Ti.UI.ListView
// Property(ies): lazyLoadingEnabled - iOS Only
'.lazy-loading-enabled[platform=ios]': { lazyLoadingEnabled: true }
'.lazy-loading-disabled[platform=ios]': { lazyLoadingEnabled: false }
```

## leftButtonMode

```scss
// Component(s): Ti.UI.TextField
// Property(ies): leftButtonMode - iOS Only
'.left-button-mode-always[platform=ios]': { leftButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS }
'.left-button-mode-never[platform=ios]': { leftButtonMode: Ti.UI.INPUT_BUTTONMODE_NEVER }
'.left-button-mode-on-blur[platform=ios]': { leftButtonMode: Ti.UI.INPUT_BUTTONMODE_ONBLUR }
'.left-button-mode-on-focus[platform=ios]': { leftButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS }
```

## leftDrawerLockMode

```scss
// Component(s): Ti.UI.Android.DrawerLayout
// Property(ies): leftDrawerLockMode - Android Only
'.left-drawer-lock-mode-locked-closed[platform=android]': { leftDrawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_LOCKED_CLOSED }
'.left-drawer-lock-mode-locked-open[platform=android]': { leftDrawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_LOCKED_OPEN }
'.left-drawer-lock-mode-undefined[platform=android]': { leftDrawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_UNDEFINED }
'.left-drawer-lock-mode-unlocked[platform=android]': { leftDrawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_UNLOCKED }
```

## lightTouchEnabled

```scss
// Component(s): Ti.UI.WebView
// Property(ies): lightTouchEnabled - Android Only
'.light-touch-enabled[platform=android]': { lightTouchEnabled: true }
'.light-touch-disabled[platform=android]': { lightTouchEnabled: false }
```

## listViewStyle

```scss
// Component(s): Ti.UI.ListView
// Property(ies): style - iOS Only
'.list-view-style-plain[platform=ios]': { style: Ti.UI.iOS.ListViewStyle.PLAIN }
'.list-view-style-group[platform=ios]': { style: Ti.UI.iOS.ListViewStyle.GROUPED }
'.list-view-style-inset-grouped[platform=ios]': { style: Ti.UI.iOS.ListViewStyle.INSET_GROUPED }
```

## loginKeyboardType

```scss
// Component(s): Ti.UI.AlertDialog
// Property(ies): loginKeyboardType
'.login-keyboard-type-ascii': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_ASCII }
'.login-keyboard-type-decimal-pad': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_DECIMAL_PAD }
'.login-keyboard-type': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_DEFAULT }
'.login-keyboard-type-email': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_EMAIL }
'.login-keyboard-type-namephone-pad': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_NAMEPHONE_PAD }
'.login-keyboard-type-number-pad': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_NUMBER_PAD }
'.login-keyboard-type-numbers-punctuation': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION }
'.login-keyboard-type-phone-pad': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_PHONE_PAD }
'.login-keyboard-type-url': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_URL }
'.login-keyboard-type-appearance-dark[platform=ios]': { loginKeyboardType: Ti.UI.KEYBOARD_APPEARANCE_DARK }
'.login-keyboard-type-appearance-light[platform=ios]': { loginKeyboardType: Ti.UI.KEYBOARD_APPEARANCE_LIGHT }
'.login-keyboard-type-appearance[platform=ios]': { loginKeyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT }
'.login-keyboard-type-twitter[platform=ios]': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_TWITTER }
'.login-keyboard-type-websearch[platform=ios]': { loginKeyboardType: Ti.UI.KEYBOARD_TYPE_WEBSEARCH }
```

## loginReturnKeyType

```scss
// Component(s): Ti.UI.AlertDialog
// Property(ies): loginReturnKeyType
'.login-return-key-type': { loginReturnKeyType: Ti.UI.RETURNKEY_DEFAULT }
'.login-return-key-type-go': { loginReturnKeyType: Ti.UI.RETURNKEY_GO }
'.login-return-key-type-done': { loginReturnKeyType: Ti.UI.RETURNKEY_DONE }
'.login-return-key-type-join': { loginReturnKeyType: Ti.UI.RETURNKEY_JOIN }
'.login-return-key-type-next': { loginReturnKeyType: Ti.UI.RETURNKEY_NEXT }
'.login-return-key-type-send': { loginReturnKeyType: Ti.UI.RETURNKEY_SEND }
'.login-return-key-type-route': { loginReturnKeyType: Ti.UI.RETURNKEY_ROUTE }
'.login-return-key-type-yahoo': { loginReturnKeyType: Ti.UI.RETURNKEY_YAHOO }
'.login-return-key-type-google': { loginReturnKeyType: Ti.UI.RETURNKEY_GOOGLE }
'.login-return-key-type-search': { loginReturnKeyType: Ti.UI.RETURNKEY_SEARCH }
'.login-return-key-type-emergency-call': { loginReturnKeyType: Ti.UI.RETURNKEY_EMERGENCY_CALL }
'.login-return-key-type-continue[platform=ios]': { loginReturnKeyType: Ti.UI.RETURNKEY_CONTINUE }
```

## mixedContentMode

```scss
// Component(s): Ti.UI.WebView
// Property(ies): mixedContentMode - Android Only
'.mixed-content-mode[platform=android]': { mixedContentMode: true }
'.unmixed-content-mode[platform=android]': { mixedContentMode: false }
```

## modal

```scss
// Component(s): Ti.UI.Window
// Property(ies): modal
'.modal': { modal: true }
'.regular': { modal: false }
```

## moveable

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): moveable
'.moveable': { moveable: true }
'.unmovable': { moveable: false }
```

## moving

```scss
// Component(s): Ti.UI.TableView
// Property(ies): moving
'.moving': { moving: true }
```

## nativeSpinner

```scss
// Component(s): Ti.UI.Picker
// Property(ies): nativeSpinner - Android Only
'.native-spinner[platform=android]': { nativeSpinner: true }
```

## navBarHidden

```scss
// Component(s): Ti.UI.Window
// Property(ies): navBarHidden
'.nav-bar-hidden': { navBarHidden: true }
'.nav-bar-visible': { navBarHidden: false }
```

## navigationMode

```scss
// Component(s): Ti.Android.ActionBar
// Property(ies): navigationMode
'.navigation-mode-standard[platform=android]': { navigationMode: Ti.Android.NAVIGATION_MODE_STANDARD }
'.navigation-mode-tabs[platform=android]': { navigationMode: Ti.Android.NAVIGATION_MODE_TABS }
```

## orientationModes

```scss
// Component(s): Ti.UI.Window
// Property(ies): orientationModes
'.orientation-left': { orientationModes: [ Ti.UI.LANDSCAPE_LEFT ] }
'.orientation-right': { orientationModes: [ Ti.UI.LANDSCAPE_RIGHT ] }
'.orientation-portrait': { orientationModes: [ Ti.UI.PORTRAIT ] }
'.orientation-upside-portrait': { orientationModes: [ Ti.UI.UPSIDE_PORTRAIT ] }
'.orientation-landscape': { orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT ] }

// Component(s): Ti.UI.Window
// Property(ies): orientationModes (Alternative)
'.portrait': { orientationModes: [ Ti.UI.PORTRAIT ] }
'.upside-portrait': { orientationModes: [ Ti.UI.UPSIDE_PORTRAIT ] }
'.landscape-left': { orientationModes: [ Ti.UI.LANDSCAPE_LEFT ] }
'.landscape-right': { orientationModes: [ Ti.UI.LANDSCAPE_RIGHT ] }
'.landscape': { orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT ] }
```

## overlayEnabled

```scss
// Component(s): Ti.UI.ScrollableView
// Property(ies): overlayEnabled - iOS Only
'.overlay-enabled[platform=ios]': { overlayEnabled: true }
'.overlay-disabled[platform=ios]': { overlayEnabled: false }
```

## overrideCurrentAnimation

```scss
// Component(s): Ti.UI.View
// Property(ies): overrideCurrentAnimation - Android Only
'.override-current-animation[platform=android]': { overrideCurrentAnimation: true }
'.dont-override-current-animation[platform=android]': { overrideCurrentAnimation: false }
```

## overScrollMode

```scss
// Component(s): Ti.UI.ScrollableView, Ti.UI.ScrollView, Ti.UI.TableView, Ti.UI.WebView
// Property(ies): overScrollMode - Android Only
'.over-scroll-always[platform=android]': { overScrollMode: Ti.UI.Android.OVER_SCROLL_ALWAYS }
'.over-scroll-if-content-scrolls[platform=android]': { overScrollMode: Ti.UI.Android.OVER_SCROLL_IF_CONTENT_SCROLLS }
'.over-scroll-never[platform=android]': { overScrollMode: Ti.UI.Android.OVER_SCROLL_NEVER }
```

## pagingControlOnTop

```scss
// Component(s): Ti.UI.ScrollableView
// Property(ies): pagingControlOnTop - iOS Only
'.paging-control-on-top': { pagingControlOnTop: true }
'.paging-control-on-bottom': { pagingControlOnTop: false }
```

## passwordKeyboardType

```scss
// Component(s): Ti.UI.AlertDialog
// Property(ies): passwordKeyboardType
'.password-keyboard-type': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_DEFAULT }
'.password-keyboard-type-ascii': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_ASCII }
'.password-keyboard-type-decimal-pad': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_DECIMAL_PAD }
'.password-keyboard-type-email': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_EMAIL }
'.password-keyboard-type-namephone-pad': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_NAMEPHONE_PAD }
'.password-keyboard-type-number-pad': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_NUMBER_PAD }
'.password-keyboard-type-numbers-punctuation': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION }
'.password-keyboard-type-phone-pad': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_PHONE_PAD }
'.password-keyboard-type-url': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_URL }
'.password-keyboard-type-appearance-dark[platform=ios]': { passwordKeyboardType: Ti.UI.KEYBOARD_APPEARANCE_DARK }
'.password-keyboard-type-appearance-light[platform=ios]': { passwordKeyboardType: Ti.UI.KEYBOARD_APPEARANCE_LIGHT }
'.password-keyboard-type-appearance[platform=ios]': { passwordKeyboardType: Ti.UI.KEYBOARD_APPEARANCE_DEFAULT }
'.password-keyboard-type-twitter[platform=ios]': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_TWITTER }
'.password-keyboard-type-websearch[platform=ios]': { passwordKeyboardType: Ti.UI.KEYBOARD_TYPE_WEBSEARCH }
```

## passwordMask

```scss
// Component(s): Ti.UI.TableView
// Property(ies): passwordMask
'.password-mask': { passwordMask: true }
'.password-unmask': { passwordMask: false }
```

## pickerType

```scss
// Component(s): Ti.UI.Picker
// Property(ies): type (Picker Type)
'.picker-type-count-down-timer': { type: Ti.UI.PICKER_TYPE_COUNT_DOWN_TIMER }
'.picker-type-date': { type: Ti.UI.PICKER_TYPE_DATE }
'.picker-type-date-and-time': { type: Ti.UI.PICKER_TYPE_DATE_AND_TIME }
'.picker-type-plain': { type: Ti.UI.PICKER_TYPE_PLAIN }
'.picker-type-time': { type: Ti.UI.PICKER_TYPE_TIME }
```

## placement

```scss
// Component(s): Ti.UI.ActivityIndicator, Ti.UI.Animation, Ti.UI.View, Ti.UI.Window
// Property(ies): top, right, bottom, left
'.top-auto': { top: Ti.UI.SIZE }
'.left-auto': { left: Ti.UI.SIZE }
'.right-auto': { right: Ti.UI.SIZE }
'.bottom-auto': { bottom: Ti.UI.SIZE }
'.inset-x-0': { right: 0, left: 0 }
'.inset-y-0': { top: 0, bottom: 0 }
'.inset-0': { top: 0, right: 0, bottom: 0, left: 0 }
'.inset-x-auto': { right: Ti.UI.SIZE, left: Ti.UI.SIZE }
'.inset-y-auto': { top: Ti.UI.SIZE, bottom: Ti.UI.SIZE }
'.inset-auto': { top: Ti.UI.SIZE, right: Ti.UI.SIZE, bottom: Ti.UI.SIZE, left: Ti.UI.SIZE }
```

## pluginState

```scss
// Component(s): Ti.UI.WebView
// Property(ies): pluginState - Android Only
'.webview-plugins-off[platform=android]': { pluginState: Ti.UI.Android.WEBVIEW_PLUGINS_OFF }
'.webview-plugins-on[platform=android]': { pluginState: Ti.UI.Android.WEBVIEW_PLUGINS_ON }
'.webview-plugins-on-demand[platform=android]': { pluginState: Ti.UI.Android.WEBVIEW_PLUGINS_ON_DEMAND }
```

## preventCornerOverlap

```scss
// Component(s): Ti.UI.Android.CardView
// Property(ies): preventCornerOverlap - Android Only
'.prevent-corner-overlap[platform=android]': { preventCornerOverlap: true }
'.dont-prevent-corner-overlap[platform=android]': { preventCornerOverlap: false }
```

## preventDefaultImage

```scss
// Component(s): Ti.UI.ImageView
// Property(ies): preventDefaultImage - iOS Only
'.prevent-default-image[platform=ios]': { preventDefaultImage: true }
'.display-default-image[platform=ios]': { preventDefaultImage: false }
```

## previewActionStyle

```scss
// Component(s): Ti.UI.iOS.PreviewAction, Ti.UI.iOS.PreviewActionGroup
// Property(ies): style - iOS Only
'.preview-action-style[platform=ios]': { style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_DEFAULT }
'.preview-action-style-selected[platform=ios]': { style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_SELECTED }
'.preview-action-style-destrutive[platform=ios]': { style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_DESTRUCTIVE }
```

## progressBarStyle

```scss
// Component(s): Ti.UI.ProgressBar
// Property(ies): style - iOS Only
'.progress-bar-style-bar[platform=ios]': { style: Ti.UI.iOS.ProgressBarStyle.BAR }
'.progress-bar-style[platform=ios]': { style: Ti.UI.iOS.ProgressBarStyle.DEFAULT }
'.progress-bar-style-plain[platform=ios]': { style: Ti.UI.iOS.ProgressBarStyle.PLAIN }
```

## location

```scss
// Component(s): Ti.UI.Android.ProgressIndicator
// Property(ies): location - Android Only
'.location-dialog[platform=android]': { location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG }
'.location-statur-bar[platform=android]': { location: Ti.UI.Android.PROGRESS_INDICATOR_STATUS_BAR }
```

## progressIndicatorType

```scss
// Component(s): Ti.UI.Android.ProgressIndicator
// Property(ies): type - Android Only
'.type-determinant[platform=android]': { type: Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT }
'.type-indeterminant[platform=android]': { type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT }
```

## pruneSectionsOnEdit

```scss
// Component(s): Ti.UI.ListView
// Property(ies): pruneSectionsOnEdit - iOS Only
'.prune-sections-on-edit[platform=ios]': { pruneSectionsOnEdit: true }
'.dont-prune-sections-on-edit[platform=ios]': { pruneSectionsOnEdit: false }
```

## rDrawable

```scss
// Component(s): Ti.Android.R
// Property(ies): icon - Android Only
'.r-drawable-alert-dark-frame[platform=android]': { icon: Ti.Android.R.drawable.alert_dark_frame }
'.r-drawable-alert-light-frame[platform=android]': { icon: Ti.Android.R.drawable.alert_light_frame }
'.r-drawable-arrow-down-float[platform=android]': { icon: Ti.Android.R.drawable.arrow_down_float }
'.r-drawable-arrow-up-float[platform=android]': { icon: Ti.Android.R.drawable.arrow_up_float }
'.r-drawable-bottom-bar[platform=android]': { icon: Ti.Android.R.drawable.bottom_bar }
'.r-drawable-btn-default[platform=android]': { icon: Ti.Android.R.drawable.btn_default }
'.r-drawable-btn-default-small[platform=android]': { icon: Ti.Android.R.drawable.btn_default_small }
'.r-drawable-btn-dialog[platform=android]': { icon: Ti.Android.R.drawable.btn_dialog }
'.r-drawable-btn-dropdown[platform=android]': { icon: Ti.Android.R.drawable.btn_dropdown }
'.r-drawable-btn-minus[platform=android]': { icon: Ti.Android.R.drawable.btn_minus }
'.r-drawable-btn-plus[platform=android]': { icon: Ti.Android.R.drawable.btn_plus }
'.r-drawable-btn-radio[platform=android]': { icon: Ti.Android.R.drawable.btn_radio }
'.r-drawable-btn-star[platform=android]': { icon: Ti.Android.R.drawable.btn_star }
'.r-drawable-btn-star-big-off[platform=android]': { icon: Ti.Android.R.drawable.btn_star_big_off }
'.r-drawable-btn-star-big-on[platform=android]': { icon: Ti.Android.R.drawable.btn_star_big_on }
'.r-drawable-button-onoff-indicator-off[platform=android]': { icon: Ti.Android.R.drawable.button_onoff_indicator_off }
'.r-drawable-button-onoff-indicator-on[platform=android]': { icon: Ti.Android.R.drawable.button_onoff_indicator_on }
'.r-drawable-checkbox-off-background[platform=android]': { icon: Ti.Android.R.drawable.checkbox_off_background }
'.r-drawable-checkbox-on-background[platform=android]': { icon: Ti.Android.R.drawable.checkbox_on_background }
'.r-drawable-dark-header[platform=android]': { icon: Ti.Android.R.drawable.dark_header }
'.r-drawable-dialog-frame[platform=android]': { icon: Ti.Android.R.drawable.dialog_frame }
'.r-drawable-dialog-holo-dark-frame[platform=android]': { icon: Ti.Android.R.drawable.dialog_holo_dark_frame }
'.r-drawable-dialog-holo-light-frame[platform=android]': { icon: Ti.Android.R.drawable.dialog_holo_light_frame }
'.r-drawable-divider-horizontal-bright[platform=android]': { icon: Ti.Android.R.drawable.divider_horizontal_bright }
'.r-drawable-divider-horizontal-dark[platform=android]': { icon: Ti.Android.R.drawable.divider_horizontal_dark }
'.r-drawable-divider-horizontal-dim-dark[platform=android]': { icon: Ti.Android.R.drawable.divider_horizontal_dim_dark }
'.r-drawable-divider-horizontal-textfield[platform=android]': { icon: Ti.Android.R.drawable.divider_horizontal_textfield }
'.r-drawable-edit-text[platform=android]': { icon: Ti.Android.R.drawable.edit_text }
'.r-drawable-editbox-background[platform=android]': { icon: Ti.Android.R.drawable.editbox_background }
'.r-drawable-editbox-background-normal[platform=android]': { icon: Ti.Android.R.drawable.editbox_background_normal }
'.r-drawable-editbox-dropdown-dark-frame[platform=android]': { icon: Ti.Android.R.drawable.editbox_dropdown_dark_frame }
'.r-drawable-editbox-dropdown-light-frame[platform=android]': { icon: Ti.Android.R.drawable.editbox_dropdown_light_frame }
'.r-drawable-gallery-thumb[platform=android]': { icon: Ti.Android.R.drawable.gallery_thumb }
'.r-drawable-ic-btn-speak-now[platform=android]': { icon: Ti.Android.R.drawable.ic_btn_speak_now }
'.r-drawable-ic-delete[platform=android]': { icon: Ti.Android.R.drawable.ic_delete }
'.r-drawable-ic-dialog-alert[platform=android]': { icon: Ti.Android.R.drawable.ic_dialog_alert }
'.r-drawable-ic-dialog-dialer[platform=android]': { icon: Ti.Android.R.drawable.ic_dialog_dialer }
'.r-drawable-ic-dialog-email[platform=android]': { icon: Ti.Android.R.drawable.ic_dialog_email }
'.r-drawable-ic-dialog-info[platform=android]': { icon: Ti.Android.R.drawable.ic_dialog_info }
'.r-drawable-ic-dialog-map[platform=android]': { icon: Ti.Android.R.drawable.ic_dialog_map }
'.r-drawable-ic-input-add[platform=android]': { icon: Ti.Android.R.drawable.ic_input_add }
'.r-drawable-ic-input-delete[platform=android]': { icon: Ti.Android.R.drawable.ic_input_delete }
'.r-drawable-ic-input-get[platform=android]': { icon: Ti.Android.R.drawable.ic_input_get }
'.r-drawable-ic-lock-idle-alarm[platform=android]': { icon: Ti.Android.R.drawable.ic_lock_idle_alarm }
'.r-drawable-ic-lock-idle-charging[platform=android]': { icon: Ti.Android.R.drawable.ic_lock_idle_charging }
'.r-drawable-ic-lock-idle-lock[platform=android]': { icon: Ti.Android.R.drawable.ic_lock_idle_lock }
'.r-drawable-ic-lock-idle-low-battery[platform=android]': { icon: Ti.Android.R.drawable.ic_lock_idle_low_battery }
'.r-drawable-ic-lock-lock[platform=android]': { icon: Ti.Android.R.drawable.ic_lock_lock }
'.r-drawable-ic-lock-power-off[platform=android]': { icon: Ti.Android.R.drawable.ic_lock_power_off }
'.r-drawable-ic-lock-silent-mode[platform=android]': { icon: Ti.Android.R.drawable.ic_lock_silent_mode }
'.r-drawable-ic-lock-silent-mode-off[platform=android]': { icon: Ti.Android.R.drawable.ic_lock_silent_mode_off }
'.r-drawable-ic-media-ff[platform=android]': { icon: Ti.Android.R.drawable.ic_media_ff }
'.r-drawable-ic-media-next[platform=android]': { icon: Ti.Android.R.drawable.ic_media_next }
'.r-drawable-ic-media-pause[platform=android]': { icon: Ti.Android.R.drawable.ic_media_pause }
'.r-drawable-ic-media-play[platform=android]': { icon: Ti.Android.R.drawable.ic_media_play }
'.r-drawable-ic-media-previous[platform=android]': { icon: Ti.Android.R.drawable.ic_media_previous }
'.r-drawable-ic-media-rew[platform=android]': { icon: Ti.Android.R.drawable.ic_media_rew }
'.r-drawable-ic-menu-add[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_add }
'.r-drawable-ic-menu-agenda[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_agenda }
'.r-drawable-ic-menu-always-landscape-portrait[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_always_landscape_portrait }
'.r-drawable-ic-menu-call[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_call }
'.r-drawable-ic-menu-camera[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_camera }
'.r-drawable-ic-menu-close-clear-cancel[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_close_clear_cancel }
'.r-drawable-ic-menu-compass[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_compass }
'.r-drawable-ic-menu-crop[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_crop }
'.r-drawable-ic-menu-day[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_day }
'.r-drawable-ic-menu-delete[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_delete }
'.r-drawable-ic-menu-directions[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_directions }
'.r-drawable-ic-menu-edit[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_edit }
'.r-drawable-ic-menu-gallery[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_gallery }
'.r-drawable-ic-menu-help[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_help }
'.r-drawable-ic-menu-info-details[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_info_details }
'.r-drawable-ic-menu-manage[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_manage }
'.r-drawable-ic-menu-mapmode[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_mapmode }
'.r-drawable-ic-menu-month[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_month }
'.r-drawable-ic-menu-more[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_more }
'.r-drawable-ic-menu-my-calendar[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_my_calendar }
'.r-drawable-ic-menu-mylocation[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_mylocation }
'.r-drawable-ic-menu-myplaces[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_myplaces }
'.r-drawable-ic-menu-preferences[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_preferences }
'.r-drawable-ic-menu-recent-history[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_recent_history }
'.r-drawable-ic-menu-report-image[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_report_image }
'.r-drawable-ic-menu-revert[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_revert }
'.r-drawable-ic-menu-rotate[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_rotate }
'.r-drawable-ic-menu-save[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_save }
'.r-drawable-ic-menu-search[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_search }
'.r-drawable-ic-menu-send[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_send }
'.r-drawable-ic-menu-set-as[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_set_as }
'.r-drawable-ic-menu-share[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_share }
'.r-drawable-ic-menu-slideshow[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_slideshow }
'.r-drawable-ic-menu-sort-alphabetically[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_sort_alphabetically }
'.r-drawable-ic-menu-sort-by-size[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_sort_by_size }
'.r-drawable-ic-menu-today[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_today }
'.r-drawable-ic-menu-upload[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_upload }
'.r-drawable-ic-menu-upload-you-tube[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_upload_you_tube }
'.r-drawable-ic-menu-view[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_view }
'.r-drawable-ic-menu-week[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_week }
'.r-drawable-ic-menu-zoom[platform=android]': { icon: Ti.Android.R.drawable.ic_menu_zoom }
'.r-drawable-ic-notification-clear-all[platform=android]': { icon: Ti.Android.R.drawable.ic_notification_clear_all }
'.r-drawable-ic-notification-overlay[platform=android]': { icon: Ti.Android.R.drawable.ic_notification_overlay }
'.r-drawable-ic-partial-secure[platform=android]': { icon: Ti.Android.R.drawable.ic_partial_secure }
'.r-drawable-ic-popup-disk-full[platform=android]': { icon: Ti.Android.R.drawable.ic_popup_disk_full }
'.r-drawable-ic-popup-reminder[platform=android]': { icon: Ti.Android.R.drawable.ic_popup_reminder }
'.r-drawable-ic-popup-sync[platform=android]': { icon: Ti.Android.R.drawable.ic_popup_sync }
'.r-drawable-ic-search-category-default[platform=android]': { icon: Ti.Android.R.drawable.ic_search_category_default }
'.r-drawable-ic-secure[platform=android]': { icon: Ti.Android.R.drawable.ic_secure }
'.r-drawable-list-selector-background[platform=android]': { icon: Ti.Android.R.drawable.list_selector_background }
'.r-drawable-menu-frame[platform=android]': { icon: Ti.Android.R.drawable.menu_frame }
'.r-drawable-menu-full-frame[platform=android]': { icon: Ti.Android.R.drawable.menu_full_frame }
'.r-drawable-menuitem-background[platform=android]': { icon: Ti.Android.R.drawable.menuitem_background }
'.r-drawable-picture-frame[platform=android]': { icon: Ti.Android.R.drawable.picture_frame }
'.r-drawable-presence-audio-away[platform=android]': { icon: Ti.Android.R.drawable.presence_audio_away }
'.r-drawable-presence-audio-busy[platform=android]': { icon: Ti.Android.R.drawable.presence_audio_busy }
'.r-drawable-presence-audio-online[platform=android]': { icon: Ti.Android.R.drawable.presence_audio_online }
'.r-drawable-presence-away[platform=android]': { icon: Ti.Android.R.drawable.presence_away }
'.r-drawable-presence-busy[platform=android]': { icon: Ti.Android.R.drawable.presence_busy }
'.r-drawable-presence-invisible[platform=android]': { icon: Ti.Android.R.drawable.presence_invisible }
'.r-drawable-presence-offline[platform=android]': { icon: Ti.Android.R.drawable.presence_offline }
'.r-drawable-presence-online[platform=android]': { icon: Ti.Android.R.drawable.presence_online }
'.r-drawable-presence-video-away[platform=android]': { icon: Ti.Android.R.drawable.presence_video_away }
'.r-drawable-presence-video-busy[platform=android]': { icon: Ti.Android.R.drawable.presence_video_busy }
'.r-drawable-presence-video-online[platform=android]': { icon: Ti.Android.R.drawable.presence_video_online }
'.r-drawable-progress-horizontal[platform=android]': { icon: Ti.Android.R.drawable.progress_horizontal }
'.r-drawable-progress-indeterminate-horizontal[platform=android]': { icon: Ti.Android.R.drawable.progress_indeterminate_horizontal }
'.r-drawable-radiobutton-off-background[platform=android]': { icon: Ti.Android.R.drawable.radiobutton_off_background }
'.r-drawable-radiobutton-on-background[platform=android]': { icon: Ti.Android.R.drawable.radiobutton_on_background }
'.r-drawable-screen-background-dark[platform=android]': { icon: Ti.Android.R.drawable.screen_background_dark }
'.r-drawable-screen-background-dark-transparent[platform=android]': { icon: Ti.Android.R.drawable.screen_background_dark_transparent }
'.r-drawable-screen-background-light[platform=android]': { icon: Ti.Android.R.drawable.screen_background_light }
'.r-drawable-screen-background-light-transparent[platform=android]': { icon: Ti.Android.R.drawable.screen_background_light_transparent }
'.r-drawable-spinner-background[platform=android]': { icon: Ti.Android.R.drawable.spinner_background }
'.r-drawable-spinner-dropdown-background[platform=android]': { icon: Ti.Android.R.drawable.spinner_dropdown_background }
'.r-drawable-star-big-off[platform=android]': { icon: Ti.Android.R.drawable.star_big_off }
'.r-drawable-star-big-on[platform=android]': { icon: Ti.Android.R.drawable.star_big_on }
'.r-drawable-star-off[platform=android]': { icon: Ti.Android.R.drawable.star_off }
'.r-drawable-star-on[platform=android]': { icon: Ti.Android.R.drawable.star_on }
'.r-drawable-stat-notify-call-mute[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_call_mute }
'.r-drawable-stat-notify-chat[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_chat }
'.r-drawable-stat-notify-error[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_error }
'.r-drawable-stat-notify-missed-call[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_missed_call }
'.r-drawable-stat-notify-more[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_more }
'.r-drawable-stat-notify-sdcard[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_sdcard }
'.r-drawable-stat-notify-sdcard-prepare[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_sdcard_prepare }
'.r-drawable-stat-notify-sdcard-usb[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_sdcard_usb }
'.r-drawable-stat-notify-sync[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_sync }
'.r-drawable-stat-notify-sync-noanim[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_sync_noanim }
'.r-drawable-stat-notify-voicemail[platform=android]': { icon: Ti.Android.R.drawable.stat_notify_voicemail }
'.r-drawable-stat-sys-data-bluetooth[platform=android]': { icon: Ti.Android.R.drawable.stat_sys_data_bluetooth }
'.r-drawable-stat-sys-download[platform=android]': { icon: Ti.Android.R.drawable.stat_sys_download }
'.r-drawable-stat-sys-download-done[platform=android]': { icon: Ti.Android.R.drawable.stat_sys_download_done }
'.r-drawable-stat-sys-headset[platform=android]': { icon: Ti.Android.R.drawable.stat_sys_headset }
'.r-drawable-stat-sys-speakerphone[platform=android]': { icon: Ti.Android.R.drawable.stat_sys_speakerphone }
'.r-drawable-stat-sys-upload[platform=android]': { icon: Ti.Android.R.drawable.stat_sys_upload }
'.r-drawable-stat-sys-upload-done[platform=android]': { icon: Ti.Android.R.drawable.stat_sys_upload_done }
'.r-drawable-stat-sys-warning[platform=android]': { icon: Ti.Android.R.drawable.stat_sys_warning }
'.r-drawable-status-bar-item-app-background[platform=android]': { icon: Ti.Android.R.drawable.status_bar_item_app_background }
'.r-drawable-status-bar-item-background[platform=android]': { icon: Ti.Android.R.drawable.status_bar_item_background }
'.r-drawable-sym-action-call[platform=android]': { icon: Ti.Android.R.drawable.sym_action_call }
'.r-drawable-sym-action-chat[platform=android]': { icon: Ti.Android.R.drawable.sym_action_chat }
'.r-drawable-sym-action-email[platform=android]': { icon: Ti.Android.R.drawable.sym_action_email }
'.r-drawable-sym-call-incoming[platform=android]': { icon: Ti.Android.R.drawable.sym_call_incoming }
'.r-drawable-sym-call-missed[platform=android]': { icon: Ti.Android.R.drawable.sym_call_missed }
'.r-drawable-sym-call-outgoing[platform=android]': { icon: Ti.Android.R.drawable.sym_call_outgoing }
'.r-drawable-sym-contact-card[platform=android]': { icon: Ti.Android.R.drawable.sym_contact_card }
'.r-drawable-sym-def-app-icon[platform=android]': { icon: Ti.Android.R.drawable.sym_def_app_icon }
'.r-drawable-title-bar[platform=android]': { icon: Ti.Android.R.drawable.title_bar }
'.r-drawable-title-bar-tall[platform=android]': { icon: Ti.Android.R.drawable.title_bar_tall }
'.r-drawable-toast-frame[platform=android]': { icon: Ti.Android.R.drawable.toast_frame }
'.r-drawable-zoom-plate[platform=android]': { icon: Ti.Android.R.drawable.zoom_plate }
```

## requestedOrientation

```scss
// Component(s): Ti.Android.Activity
// Property(ies): requestedOrientation - Android Only
'.requested-orientation-behind[platform=android]': { requestedOrientation: Ti.Android.SCREEN_ORIENTATION_BEHIND }
'.requested-orientation-landscape[platform=android]': { requestedOrientation: Ti.Android.SCREEN_ORIENTATION_LANDSCAPE }
'.requested-orientation-nosensor[platform=android]': { requestedOrientation: Ti.Android.SCREEN_ORIENTATION_NOSENSOR }
'.requested-orientation-portrait[platform=android]': { requestedOrientation: Ti.Android.SCREEN_ORIENTATION_PORTRAIT }
'.requested-orientation-sensor[platform=android]': { requestedOrientation: Ti.Android.SCREEN_ORIENTATION_SENSOR }
'.requested-orientation-unspecified[platform=android]': { requestedOrientation: Ti.Android.SCREEN_ORIENTATION_UNSPECIFIED }
'.requested-orientation-user[platform=android]': { requestedOrientation: Ti.Android.SCREEN_ORIENTATION_USER }
```

## resultsSeparatorStyle

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): resultsSeparatorStyle - iOS Only
'.results-separator-style-none[platform=ios]': { resultsSeparatorStyle: Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE }
'.results-separator-style-single-line[platform=ios]': { resultsSeparatorStyle: Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE }
```

## returnKeyType

```scss
// Component(s): Ti.UI.AlertDialog, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): returnKeyType
'.return-key-type': { returnKeyType: Ti.UI.RETURNKEY_DEFAULT }
'.return-key-type-go': { returnKeyType: Ti.UI.RETURNKEY_GO }
'.return-key-type-done': { returnKeyType: Ti.UI.RETURNKEY_DONE }
'.return-key-type-join': { returnKeyType: Ti.UI.RETURNKEY_JOIN }
'.return-key-type-next': { returnKeyType: Ti.UI.RETURNKEY_NEXT }
'.return-key-type-send': { returnKeyType: Ti.UI.RETURNKEY_SEND }
'.return-key-type-route': { returnKeyType: Ti.UI.RETURNKEY_ROUTE }
'.return-key-type-yahoo': { returnKeyType: Ti.UI.RETURNKEY_YAHOO }
'.return-key-type-google': { returnKeyType: Ti.UI.RETURNKEY_GOOGLE }
'.return-key-type-search': { returnKeyType: Ti.UI.RETURNKEY_SEARCH }
'.return-key-type-emergency-call': { returnKeyType: Ti.UI.RETURNKEY_EMERGENCY_CALL }
'.return-key-type-continue[platform=ios]': { returnKeyType: Ti.UI.RETURNKEY_CONTINUE }
```

## reverse

```scss
// Component(s): Ti.UI.ImageView
// Property(ies): reverse
'.reverse': { reverse: true }
'.no-reverse': { reverse: false }
```

## rightButtonMode

```scss
// Component(s): Ti.UI.TextField
// Property(ies): rightButtonMode - iOS Only
'.right-button-mode-always[platform=ios]': { rightButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS }
'.right-button-mode-never[platform=ios]': { rightButtonMode: Ti.UI.INPUT_BUTTONMODE_NEVER }
'.right-button-mode-on-blur[platform=ios]': { rightButtonMode: Ti.UI.INPUT_BUTTONMODE_ONBLUR }
'.right-button-mode-on-focus[platform=ios]': { rightButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS }
```

## rightDrawerLockMode

```scss
// Component(s): Ti.UI.Android.DrawerLayout
// Property(ies): rightDrawerLockMode - Android Only
'.right-drawer-lock-mode-locked-closed[platform=android]': { rightDrawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_LOCKED_CLOSED }
'.right-drawer-lock-mode-locked-open[platform=android]': { rightDrawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_LOCKED_OPEN }
'.right-drawer-lock-mode-undefined[platform=android]': { rightDrawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_UNDEFINED }
'.right-drawer-lock-mode-unlocked[platform=android]': { rightDrawerLockMode: Ti.UI.Android.DrawerLayout.LOCK_MODE_UNLOCKED }
```

## scalesPageToFit

```scss
// Component(s): Ti.UI.WebView
// Property(ies): scalesPageToFit
'.scales-page-to-fit': { scalesPageToFit: true }
'.dont-scale-page-to-fit': { scalesPageToFit: false }
```

## scrollable

```scss
// Component(s): Ti.UI.TableView
// Property(ies): scrollable
'.scrollable': { scrollable: true }
'.unscrollable': { scrollable: false }
```

## scrollIndicators

```scss
// Component(s): Ti.UI.ScrollView
// Property(ies): showHorizontalScrollIndicator, showVerticalScrollIndicator
'.overflow-x-scroll': { showHorizontalScrollIndicator: true }
'.overflow-y-scroll': { showVerticalScrollIndicator: true }
'.overflow-x-hidden': { showHorizontalScrollIndicator: false }
'.overflow-y-hidden': { showVerticalScrollIndicator: false }
'.overflow-scroll': { showHorizontalScrollIndicator: true, showVerticalScrollIndicator: true }
'.overflow-hidden': { showHorizontalScrollIndicator: false, showVerticalScrollIndicator: false }
```

## scrollIndicatorStyle

```scss
// Component(s): Ti.UI.ListView, Ti.UI.ScrollView, Ti.UI.TableView
// Property(ies): scrollIndicatorStyle - iOS Only
'.scrolling-indicator-style-black[platform=ios]': { scrollIndicatorStyle: Ti.UI.iOS.ScrollIndicatorStyle.BLACK }
'.scrolling-indicator-style[platform=ios]': { scrollIndicatorStyle: Ti.UI.iOS.ScrollIndicatorStyle.DEFAULT }
'.scrolling-indicator-style-white[platform=ios]': { scrollIndicatorStyle: Ti.UI.iOS.ScrollIndicatorStyle.WHITE }
```

## scrollingEnabled

```scss
// Component(s): Ti.UI.ScrollableView, Ti.UI.ScrollView
// Property(ies): scrollingEnabled
'.scrolling-enabled': { scrollingEnabled: true }
'.scrolling-disabled': { scrollingEnabled: false }
```

## scrollsToTop

```scss
// Component(s): Ti.UI.ScrollView, Ti.UI.TableView, Ti.UI.TextArea, Ti.UI.WebView
// Property(ies): scrollsToTop - iOS Only
'.scrolls-to-top[platform=ios]': { scrollsToTop: true }
'.dont-scrolls-to-top[platform=ios]': { scrollsToTop: false }
```

## scrollType

```scss
// Component(s): Ti.UI.ScrollView
// Property(ies): scrollType - Android Only
'.scroll-type-horizontal[platform=android]': { scrollType: 'horizontal' }
'.scroll-type-vertical[platform=android]': { scrollType: 'vertical' }
```

## searchAsChild

```scss
// Component(s): Ti.UI.TableView
// Property(ies): searchAsChild - Android Only
'.search-as-child[platform=android]': { searchAsChild: true }
'.dont-search-as-child[platform=android]': { searchAsChild: false }
```

## searchBarStyle

```scss
// Component(s): Ti.UI.SearchBar
// Property(ies): style - iOS Only
'.search-bar-style-minimal[platform=ios]': { style: Ti.UI.iOS.SEARCH_BAR_STYLE_MINIMAL }
'.search-bar-style-prominent[platform=ios]': { style: Ti.UI.iOS.SEARCH_BAR_STYLE_PROMINENT }
```

## searchHidden

```scss
// Component(s): Ti.UI.TableView
// Property(ies): searchHidden - iOS Only
'.search-hidden[platform=ios]': { searchHidden: true }
'.search-visible[platform=ios]': { searchHidden: false }
```

## selectionGranularity

```scss
// Component(s): Ti.UI.WebView
// Property(ies): selectionGranularity - iOS Only
'.selection-granularity-dynamic[platform=ios]': { selectionGranularity: Ti.UI.iOS.SELECTION_GRANULARITY_DYNAMIC }
'.selection-granularity-character[platform=ios]': { selectionGranularity: Ti.UI.iOS.SELECTION_GRANULARITY_CHARACTER }
```

## selectionOpens

```scss
// Component(s): Ti.UI.Picker
// Property(ies): selectionOpens - Android Only
'.selection-opens[platform=android]': { selectionOpens: true }
'.selection-dont-open[platform=android]': { selectionOpens: false }
```

## selectionStyle

```scss
// Component(s): Ti.UI.ListItem, Ti.UI.TableViewRow
// Property(ies): selectionStyle
'.selection-style': { selectionStyle: Ti.UI.SELECTION_STYLE_DEFAULT }
'.selection-style-none': { selectionStyle: Ti.UI.SELECTION_STYLE_NONE }
```

## separatorStyle

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): separatorStyle
'.separator-style-none': { separatorStyle: Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE }
'.separator-style-single-line': { separatorStyle: Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE }
```

## shiftMode

```scss
// Component(s): Ti.UI.TabGroup
// Property(ies): shiftMode - Android Only
'.shift-mode[platform=android]': { shiftMode: true }
'.shift-mode-disabled[platform=android]': { shiftMode: false }
```

## showAsAction

```scss
// Component(s): Ti.Android.MenuItem
// Property(ies): showAsAction - Android Only
'.show-as-action-always[platform=android]': { showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS }
'.show-as-action-collapse[platform=android]': { showAsAction: Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW }
'.show-as-action-if-room[platform=android]': { showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM }
'.show-as-action-never[platform=android]': { showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER }
'.show-as-action-with-text[platform=android]': { showAsAction: Ti.Android.SHOW_AS_ACTION_WITH_TEXT }
```

## showBookmark

```scss
// Component(s): Ti.UI.SearchBar
// Property(ies): showBookmark - iOS Only
'.show-bookmark[platform=ios]': { showBookmark: true }
'.hide-bookmark[platform=ios]': { showBookmark: false }
```

## showCancel

```scss
// Component(s): Ti.UI.SearchBar
// Property(ies): showCancel
'.show-cancel': { showCancel: true }
'.hide-cancel': { showCancel: false }
```

## showHorizontalScrollIndicator

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): showHorizontalScrollIndicator
'.show-horizontal-scrolling-indicator': { showHorizontalScrollIndicator: true }
'.hide-horizontal-scrolling-indicator': { showHorizontalScrollIndicator: false }
```


## showPagingControl

```scss
// Component(s): Ti.UI.ScrollableView
// Property(ies): showPagingControl
'.show-paging-control': { showPagingControl: true }
'.hide-paging-control': { showPagingControl: false }
```

## showSearchBarInNavBar

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): showSearchBarInNavBar - iOS Only
'.show-search-in-nav[platform=ios]': { showSearchBarInNavBar: true }
'.show-search-bar-in-nav-bar[platform=ios]': { showSearchBarInNavBar: true }
'.hide-search-in-nav[platform=ios]': { showSearchBarInNavBar: false }
'.hide-search-bar-in-nav-bar[platform=ios]': { showSearchBarInNavBar: false }
```

## showSelectionCheck

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): showSelectionCheck - Android Only
'.show-selection-check[platform=android]': { showSelectionCheck: true }
'.hide-selection-check[platform=android]': { showSelectionCheck: false }
```

## showUndoRedoActions

```scss
// Component(s): Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): showUndoRedoActions - iOS Only
'.show-undo-redo-actions[platform=ios]': { showUndoRedoActions: true }
'.hide-undo-redo-actions[platform=ios]': { showUndoRedoActions: false }
```

## showVerticalScrollIndicator

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView
// Property(ies): showVerticalScrollIndicator
'.show-vertical-scrolling-indicator': { showVerticalScrollIndicator: true }
'.hide-vertical-scrolling-indicator': { showVerticalScrollIndicator: false }
```

## smoothScrollOnTabClick

```scss
// Component(s): Ti.UI.TabGroup
// Property(ies): smoothScrollOnTabClick - Android Only
'.smooth-scroll[platform=android]': { smoothScrollOnTabClick: true }
'.smooth-scroll-disabled[platform=android]': { smoothScrollOnTabClick: false }
```

## statusBarStyle

```scss
// Component(s): Ti.UI.Window
// Property(ies): statusBarStyle - iOS Only
'.status-bar[platform=ios]': { statusBarStyle: Ti.UI.iOS.StatusBar.DEFAULT }
'.status-bar-dark[platform=ios]': { statusBarStyle: Ti.UI.iOS.StatusBar.DARK_CONTENT }
'.status-bar-light[platform=ios]': { statusBarStyle: Ti.UI.iOS.StatusBar.LIGHT_CONTENT }
'.status-bar-animation-fade[platform=ios]': { statusBarStyle: Ti.UI.iOS.StatusBar.ANIMATION_STYLE_FADE }
'.status-bar-animation-none[platform=ios]': { statusBarStyle: Ti.UI.iOS.StatusBar.ANIMATION_STYLE_NONE }
'.status-bar-animation-slide[platform=ios]': { statusBarStyle: Ti.UI.iOS.StatusBar.ANIMATION_STYLE_SLIDE }
```

## submitEnabled

```scss
// Component(s): Ti.UI.Android.SearchView
// Property(ies): submitEnabled - Android Only
'.submit-enabled[platform=android]': { submitEnabled: true }
'.submit-disabled[platform=android]': { submitEnabled: false }
```

## suppressReturn

```scss
// Component(s): Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): suppressReturn - iOS Only
'.suppress-return[platform=ios]': { suppressReturn: true }
'.dont-suppress-return[platform=ios]': { suppressReturn: false }
```

## sustainedPerformanceMode

```scss
// Component(s): Ti.UI.Window
// Property(ies): sustainedPerformanceMode - Android Only
'.sustained-performance-mode[platform=android]': { sustainedPerformanceMode: true }
```

## swipeToClose

```scss
// Component(s): Ti.UI.Window
// Property(ies): swipeToClose - iOS Only
'.swipe-to-close[platform=ios]': { swipeToClose: true }
'.dont-swipe-to-close[platform=ios]': { swipeToClose: false }
```

## switchStyle

```scss
// Component(s): Ti.UI.Switch
// Property(ies): style
'.search-bar-style-checkox': { style: Ti.UI.SWITCH_STYLE_CHECKBOX }
'.search-bar-style-chip': { style: Ti.UI.SWITCH_STYLE_CHIP }
'.search-bar-style-slider': { style: Ti.UI.SWITCH_STYLE_SLIDER }
'.search-bar-style-toggle-button': { style: Ti.UI.SWITCH_STYLE_TOGGLE_BUTTON }
```

## systemButton

```scss
// Component(s): Ti.UI.ImageView. Ti.UI.WebView
// Property(ies): systemButton - iOS Only
'.system-button-action[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.ACTION }
'.system-button-activity[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.ACTIVITY }
'.system-button-add[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.ADD }
'.system-button-bookmarks[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.BOOKMARKS }
'.system-button-camera[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.CAMERA }
'.system-button-cancel[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.CANCEL }
'.system-button-compose[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.COMPOSE }
'.system-button-contact_add[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.CONTACT_ADD }
'.system-button-disclosure[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.DISCLOSURE }
'.system-button-done[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.DONE }
'.system-button-edit[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.EDIT }
'.system-button-fast-forward[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.FAST_FORWARD }
'.system-button-fixed-space[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.FIXED_SPACE }
'.system-button-flexible-space[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE }
'.system-button-info-dark[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.INFO_DARK }
'.system-button-info-light[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.INFO_LIGHT }
'.system-button-organize[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.ORGANIZE }
'.system-button-pause[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.PAUSE }
'.system-button-play[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.PLAY }
'.system-button-refresh[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.REFRESH }
'.system-button-reply[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.REPLY }
'.system-button-rewind[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.REWIND }
'.system-button-save[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.SAVE }
'.system-button-spinner[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.SPINNER }
'.system-button-stop[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.STOP }
'.system-button-trash[platform=ios]': { systemButton: Ti.UI.iOS.SystemButton.TRASH }
```

## tabBarHidden

```scss
// Component(s): Ti.UI.Window
// Property(ies): tabBarHidden - iOS Only
'.tab-bar-hidden[platform=ios]': { tabBarHidden: true }
'.tab-bar-visible[platform=ios]': { tabBarHidden: false }
```

## tabbedBarStyle

```scss
// Component(s): Ti.UI.TabbedBar
// Property(ies): style
'.tabbed-bar-style-bar': { style: Ti.UI.BUTTON_STYLE_FILLED }
'.tabbed-bar-style-bordered': { style: Ti.UI.BUTTON_STYLE_OPTION_NEGATIVE }
'.tabbed-bar-style-done': { style: Ti.UI.BUTTON_STYLE_OPTION_NEUTRAL }
'.tabbed-bar-style-plain': { style: Ti.UI.BUTTON_STYLE_TEXT }
'.tabbed-bar-style[platform=android]': { style: Ti.UI.Android.TABS_STYLE_DEFAULT }
'.tabbed-bar-style-bottom-navigation[platform=android]': { style: Ti.UI.Android.TABS_STYLE_BOTTOM_NAVIGATION }
```

## tabGroupStyle

```scss
// Component(s): Ti.UI.TabGroup
// Property(ies): style - Android Only
'.tabs-style[platform=android]': { style: Ti.UI.Android.TABS_STYLE_DEFAULT }
'.tabs-style-bottom-navigation[platform=android]': { style: Ti.UI.Android.TABS_STYLE_BOTTOM_NAVIGATION }
```

## tableViewStyle

```scss
// Component(s): Ti.UI.TableView
// Property(ies): style - iOS Only
'.table-view-style-grouped[platform=ios]': { style: Ti.UI.iOS.TableViewStyle.GROUPED }
'.table-view-style-plain[platform=ios]': { style: Ti.UI.iOS.TableViewStyle.PLAIN }
'.table-view-style-inset-group[platform=ios]': { style: Ti.UI.iOS.TableViewStyle.INSET_GROUPED }
```

## tabsTranslucent

```scss
// Component(s): Ti.UI.TabGroup
// Property(ies): tabsTranslucent - iOS Only
'.tabs-translucent[platform=ios]': { tabsTranslucent: true }
'.tabs-opaque[platform=ios]': { tabsTranslucent: false }
```

## textAlign

```scss
// Component(s): Ti.UI.Button, Ti.UI.Label, Ti.UI.Switch, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): textAlign
'.text-left': { textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT }
'.text-right': { textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT }
'.text-center': { textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER }
'.text-justify': { textAlign: Ti.UI.TEXT_ALIGNMENT_JUSTIFY }
```

## theme

```scss
// Component(s): Ti.UI.Window
// Property(ies): theme - Android Only
'.theme-titanium[platform=android]': { theme: "Theme.Titanium" }
'.theme-titanium-day-night[platform=android]': { theme: "Theme.Titanium.DayNight" }
'.theme-titanium-day-night-no-title-bar[platform=android]': { theme: "Theme.Titanium.DayNight.NoTitleBar" }
'.theme-titanium-day-night-fullscreen[platform=android]': { theme: "Theme.Titanium.DayNight.Fullscreen" }
'.theme-titanium-day-night-solid[platform=android]': { theme: "Theme.Titanium.DayNight.Solid" }
'.theme-titanium-day-night-solid-no-title-bar[platform=android]': { theme: "Theme.Titanium.DayNight.Solid.NoTitleBar" }
'.theme-titanium-day-night-solid-fullscreen[platform=android]': { theme: "Theme.Titanium.DayNight.Solid.Fullscreen" }
'.theme-titanium-dark[platform=android]': { theme: "Theme.Titanium.Dark" }
'.theme-titanium-dark-no-title-bar[platform=android]': { theme: "Theme.Titanium.Dark.NoTitleBar" }
'.theme-titanium-dark-fullscreen[platform=android]': { theme: "Theme.Titanium.Dark.Fullscreen" }
'.theme-titanium-dark-solid[platform=android]': { theme: "Theme.Titanium.Dark.Solid" }
'.theme-titanium-dark-solid-no-title-bar[platform=android]': { theme: "Theme.Titanium.Dark.Solid.NoTitleBar" }
'.theme-titanium-dark-solid-fullscreen[platform=android]': { theme: "Theme.Titanium.Dark.Solid.Fullscreen" }
'.theme-titanium-light[platform=android]': { theme: "Theme.Titanium.Light" }
'.theme-titanium-light-no-title-bar[platform=android]': { theme: "Theme.Titanium.Light.NoTitleBar" }
'.theme-titanium-light-fullscreen[platform=android]': { theme: "Theme.Titanium.Light.Fullscreen" }
'.theme-titanium-light-solid[platform=android]': { theme: "Theme.Titanium.Light.Solid" }
'.theme-titanium-light-solid-no-title-bar[platform=android]': { theme: "Theme.Titanium.Light.Solid.NoTitleBar" }
'.theme-titanium-light-solid-fullscreen[platform=android]': { theme: "Theme.Titanium.Light.Solid.Fullscreen" }
'.theme-app-derived-no-title-bar[platform=android]': { theme: "'Theme.AppDerived.NoTitleBar'" }
'.theme-app-derived-fullscreen[platform=android]': { theme: "'Theme.AppDerived.Fullscreen'" }
'.theme-app-derived-translucent[platform=android]': { theme: "'Theme.AppDerived.Translucent'" }
'.theme-app-derived-translucent-no-title-bar[platform=android]': { theme: "'Theme.AppDerived.Translucent.NoTitleBar'" }
'.theme-app-derived-translucent-fullscreen[platform=android]': { theme: "'Theme.AppDerived.Translucent.Fullscreen'" }
```

## tiMedia

```scss
// Ti.Media
// Component(s): Ti.Media
// Property(ies): audioSessionCategory - iOS Only
'.audio-session-category-record[platform=ios]': { audioSessionCategory: Ti.Media.AUDIO_SESSION_CATEGORY_RECORD }
'.audio-session-category-ambient[platform=ios]': { audioSessionCategory: Ti.Media.AUDIO_SESSION_CATEGORY_AMBIENT }
'.audio-session-category-playback[platform=ios]': { audioSessionCategory: Ti.Media.AUDIO_SESSION_CATEGORY_PLAYBACK }
'.audio-session-category-solo-ambient[platform=ios]': { audioSessionCategory: Ti.Media.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT }
'.audio-session-category-play-record[platform=ios]': { audioSessionCategory: Ti.Media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD }

// Component(s): Ti.Media.AudioPlayer, Ti.Media.Sound
// Property(ies): audioType - Android Only
'.audio-type-ring[platform=android]': { audioType: Ti.Media.Sound.AUDIO_TYPE_RING }
'.audio-type-alarm[platform=android]': { audioType: Ti.Media.Sound.AUDIO_TYPE_ALARM }
'.audio-type-media[platform=android]': { audioType: Ti.Media.Sound.AUDIO_TYPE_MEDIA }
'.audio-type-voice[platform=android]': { audioType: Ti.Media.Sound.AUDIO_TYPE_VOICE }
'.audio-type-signalling[platform=android]': { audioType: Ti.Media.Sound.AUDIO_TYPE_SIGNALLING }
'.audio-type-notification[platform=android]': { audioType: Ti.Media.Sound.AUDIO_TYPE_NOTIFICATION }

// Component(s): Ti.Media.MusicPlayer
// Property(ies): repeatMode - iOS Only
'.music-repeat-mode-all[platform=ios]': { repeatMode: Ti.Media.MUSIC_PLAYER_REPEAT_ALL }
'.music-repeat-mode[platform=ios]': { repeatMode: Ti.Media.MUSIC_PLAYER_REPEAT_DEFAULT }
'.music-repeat-mode-none[platform=ios]': { repeatMode: Ti.Media.MUSIC_PLAYER_REPEAT_NONE }
'.music-repeat-mode-one[platform=ios]': { repeatMode: Ti.Media.MUSIC_PLAYER_REPEAT_ONE }

// Component(s): Ti.Media.MusicPlayer
// Property(ies): shuffleMode - iOS Only
'.music-shuffle-albums[platform=ios]': { shuffleMode: Ti.Media.MUSIC_PLAYER_SHUFFLE_ALBUMS }
'.music-shuffle[platform=ios]': { shuffleMode: Ti.Media.MUSIC_PLAYER_SHUFFLE_DEFAULT }
'.music-shuffle-none[platform=ios]': { shuffleMode: Ti.Media.MUSIC_PLAYER_SHUFFLE_NONE }
'.music-shuffle-songs[platform=ios]': { shuffleMode: Ti.Media.MUSIC_PLAYER_SHUFFLE_SONGS }

// Component(s): Ti.UI.ImageView
// Property(ies): scalingMode
// Description: Background Size for compatibility with Tailwind classes
'.bg-auto': { scalingMode: Ti.Media.IMAGE_SCALING_NONE }
'.bg-cover': { scalingMode: Ti.Media.IMAGE_SCALING_ASPECT_FILL }
'.bg-contain': { scalingMode: Ti.Media.IMAGE_SCALING_ASPECT_FIT }

// Component(s): Ti.UI.ImageView
// Property(ies): scalingMode
// Description: Object Fit for compatibility with Tailwind classes
'.object-auto': { scalingMode: Ti.Media.IMAGE_SCALING_AUTO }
'.object-fill': { scalingMode: Ti.Media.IMAGE_SCALING_FILL }
'.object-none': { scalingMode: Ti.Media.IMAGE_SCALING_NONE }
'.object-cover': { scalingMode: Ti.Media.IMAGE_SCALING_ASPECT_FILL }
'.object-contain': { scalingMode: Ti.Media.IMAGE_SCALING_ASPECT_FIT }

// Component(s): Ti.UI.ImageView
// Property(ies): scalingMode
// Description: Image Scaling Mode
'.image-scaling-auto': { scalingMode: Ti.Media.IMAGE_SCALING_AUTO }
'.image-scaling-none': { scalingMode: Ti.Media.IMAGE_SCALING_NONE }
'.image-scaling-fill': { scalingMode: Ti.Media.IMAGE_SCALING_FILL }
'.image-scaling-cover': { scalingMode: Ti.Media.IMAGE_SCALING_ASPECT_FILL }
'.image-scaling-contain': { scalingMode: Ti.Media.IMAGE_SCALING_ASPECT_FIT }

// Component(s): Ti.Media.VideoPlayer
// Property(ies): scalingMode
// Description: Video Scaling Mode
'.video-scaling-resize': { scalingMode: Ti.Media.VIDEO_SCALING_RESIZE }
'.video-scaling-contain': { scalingMode: Ti.Media.VIDEO_SCALING_RESIZE_ASPECT }
'.video-scaling-cover': { scalingMode: Ti.Media.VIDEO_SCALING_RESIZE_ASPECT_FILL }

// Component(s): Ti.Media.VideoPlayer
// Property(ies): repeatMode
// Description: Determines how the movie player repeats when reaching the end of playback.
'.video-repeat-mode-one': { repeatMode: Ti.Media.VIDEO_REPEAT_MODE_ONE }
'.video-repeat-mode-none': { repeatMode: Ti.Media.VIDEO_REPEAT_MODE_NONE }
```

## titleAttributesShadow

```scss
// Component(s): Ti.UI.TabGroup, Ti.UI.Window
// Property(ies): titleAttributes: shadow, color, blurRadius, offset - iOS Only
'.title-attributes-shadow-xs[platform=ios]': { titleAttributes: { shadow: { color: '#80000000', blurRadius: 1, offset: { width: 0, height: 0 } } } }
'.title-attributes-shadow-sm[platform=ios]': { titleAttributes: { shadow: { color: '#80000000', blurRadius: 2, offset: { width: 0, height: 1 } } } }
'.title-attributes-shadow[platform=ios]': { titleAttributes: { shadow: { color: '#80000000', blurRadius: 4, offset: { width: 0, height: 2 } } } }
'.title-attributes-shadow-md[platform=ios]': { titleAttributes: { shadow: { color: '#80000000', blurRadius: 6, offset: { width: 0, height: 3 } } } }
'.title-attributes-shadow-lg[platform=ios]': { titleAttributes: { shadow: { color: '#80000000', blurRadius: 8, offset: { width: 0, height: 4 } } } }
'.title-attributes-shadow-xl[platform=ios]': { titleAttributes: { shadow: { color: '#80000000', blurRadius: 12, offset: { width: 0, height: 6 } } } }
'.title-attributes-shadow-2xl[platform=ios]': { titleAttributes: { shadow: { color: '#80000000', blurRadius: 14, offset: { width: 0, height: 8 } } } }
'.title-attributes-shadow-none[platform=ios]': { titleAttributes: { shadow: { color: null, blurRadius: null, offset: { width: 0, height: 0 } } } }
```

## toolbarEnabled

```scss
// Component(s): Ti.UI.Android.DrawerLayout
// Property(ies): toolbarEnabled - Android Only
'.toolbar-enabled[platform=android]': { toolbarEnabled: true }
'.toolbar-disabled[platform=android]': { toolbarEnabled: false }
```

## touchEnabled

```scss
// Component(s): Ti.UI.View
// Property(ies): touchEnabled
'.touch-enabled': { touchEnabled: true }
'.touch-disabled': { touchEnabled: false }
'.pointer-events-auto': { touchEnabled: true }
'.pointer-events-none': { touchEnabled: false }
```

## touchFeedback

```scss
// Component(s): Ti.UI.ListView, Ti.UI.TableView, Ti.UI.View
// Property(ies): touchFeedback - Android Only
'.touch-feedback[platform=android]': { touchFeedback: true }
'.dont-touch-feedback[platform=android]': { touchFeedback: false }
```

## transition

```scss
// Component(s): Ti.UI.Animation
// Property(ies): curve
'.ease-in': { curve: Ti.UI.ANIMATION_CURVE_EASE_IN }
'.ease-out': { curve: Ti.UI.ANIMATION_CURVE_EASE_OUT }
'.ease-linear': { curve: Ti.UI.ANIMATION_CURVE_LINEAR }
'.ease-in-out': { curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT }
```

## translucent

```scss
// Component(s): Ti.UI.iOS.Toolbar, Ti.UI.TabGroup, Ti.UI.Toolbar, Ti.UI.Window
// Property(ies): translucent - iOS Only
'.translucent[platform=ios]': { translucent: true }
'.translucent-disabled[platform=ios]': { translucent: false }
```

## useCompatPadding

```scss
// Component(s): Ti.UI.Android.CardView
// Property(ies): useCompatPadding - Android Only
'.use-compat-padding[platform=android]': { useCompatPadding: true }
'.dont-use-compat-padding[platform=android]': { useCompatPadding: false }
```

## useSpinner

```scss
// Component(s): Ti.UI.Picker
// Property(ies): useSpinner
'.use-spinner': { useSpinner: true }
'.dont-use-spinner': { useSpinner: false }
```

## verticalAlign

```scss
// Component(s): Ti.UI.Button, Ti.UI.Label, Ti.UI.Switch, Ti.UI.TextArea, Ti.UI.TextField
// Property(ies): verticalAlign
'.align-top': { verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP }
'.align-middle': { verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER }
'.align-bottom': { verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM }
```

## verticalBounce

```scss
// Component(s): Ti.UI.ScrollView
// Property(ies): verticalBounce - iOS Only
'.vertical-bounce[platform=ios]': { verticalBounce: true }
'.no-vertical-bounce[platform=ios]': { verticalBounce: false }
```

## verticalMargin

```scss
// Component(s): Ti.UI.Notification
// Property(ies): horizontalMargin - Android Only
'.horizontal-center[platform=android]': { horizontalMargin: '0' }
'.horizontal-left[platform=android]': { horizontalMargin: '-0.5' }
'.horizontal-right[platform=android]': { horizontalMargin: '0.5' }

// Component(s): Ti.UI.Notification
// Property(ies): verticalMargin - Android Only
'.vertical-center[platform=android]': { verticalMargin: '0' }
'.vertical-top[platform=android]': { verticalMargin: '-0.5' }
'.vertical-bottom[platform=android]': { verticalMargin: '0.5' }
```

## viewShadow

```scss
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


## visible

```scss
// Component(s): Ti.Android.MenuItem, Ti.UI.Animation, Ti.UI.Picker, Ti.UI.ScrollableView, Ti.UI.ShortcutItem, Ti.UI.View
// Property(ies): visible
'.block': { visible: true }
'.hidden': { visible: false }
'.visible': { visible: true }
'.invisible': { visible: false }
```

## willHandleTouches

```scss
// Component(s): Ti.UI.WebView
// Property(ies): willHandleTouches - iOS Only
'.will-handle-touches[platform=ios]': { willHandleTouches: true }
'.will-not-handle-touches[platform=ios]': { willHandleTouches: false }
```

## willScrollOnStatusTap

```scss
// Component(s): Ti.UI.ListView
// Property(ies): willScrollOnStatusTap - iOS Only
'.will-scroll-on-status-tap[platform=ios]': { willScrollOnStatusTap: true }
'.will-not-scroll-on-status-tap[platform=ios]': { willScrollOnStatusTap: false }
```

## windowPixelFormat

```scss
// Component(s): Ti.UI.Window
// Property(ies): windowPixelFormat - Android Only
'.pixel-format-a-8[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_A_8 }
'.pixel-format-la-88[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_LA_88 }
'.pixel-format-l-8[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_L_8 }
'.pixel-format-opaque[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_OPAQUE }
'.pixel-format-rgba-4444[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_RGBA_4444 }
'.pixel-format-rgba-5551[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_RGBA_5551 }
'.pixel-format-rgba-8888[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_RGBA_8888 }
'.pixel-format-rgbx-8888[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_RGBX_8888 }
'.pixel-format-rgb-332[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_RGB_332 }
'.pixel-format-rgb-565[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_RGB_565 }
'.pixel-format-rgb-888[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_RGB_888 }
'.pixel-format-translucent[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_TRANSLUCENT }
'.pixel-format-transparent[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_TRANSPARENT }
'.pixel-format-unknown[platform=android]': { windowPixelFormat: Ti.UI.Android.PIXEL_FORMAT_UNKNOWN }
```

## windowSoftInputMode

```scss
// Component(s): Ti.UI.TabGroup, Ti.UI.Window
// Property(ies): windowSoftInputMode - Android Only
'.window-soft-input-always-hidden[platform=android]': { windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN }
'.window-soft-input-always-visible[platform=android]': { windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE }
'.window-soft-input-hidden[platform=android]': { windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN }
'.window-soft-input-pan[platform=android]': { windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN }
'.window-soft-input-resize[platform=android]': { windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE }
'.window-soft-input-unspecified[platform=android]': { windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_STATE_UNSPECIFIED }
'.window-soft-input-visible[platform=android]': { windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_STATE_VISIBLE }
```

## wobble

```scss
// Component(s): Ti.UI.DashboardView
// Property(ies): wobble - iOS Only
'.wobble[platform=ios]': { wobble: true }
'.dont-wobble[platform=ios]': { wobble: false }
```
