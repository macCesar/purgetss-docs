# Constant Properties

Constant properties in Purge TSS are predefined values or enumerations that determine specific behaviors, styles, or states of UI elements. These properties accept only specific predefined values to ensure consistency and proper functionality.

## User Interface States
- **Style**: `style`, `textStyle`, `modalStyle`, `borderStyle`, `animationStyle`, `scrollIndicatorStyle`
- **Alignment**: `textAlign`, `verticalAlign`, `alignment`, `gravity`
- **Visibility**: `visibility`, `lockscreenVisibility`, `hiddenBehavior`
- **Interface**: `userInterfaceStyle`, `overrideUserInterfaceStyle`, `largeTitleDisplayMode`

## Input and Keyboard
- **Keyboard Types**: `keyboardType`, `loginKeyboardType`, `passwordKeyboardType`, `inputType`
- **Return Key**: `returnKeyType`, `loginReturnKeyType`, `passwordReturnKeyType`
- **Input Behavior**: `autocapitalization`, `softKeyboardOnFocus`, `keyboardDismissMode`, `keyboardAppearance`
- **Auto Link**: `autoLink`, `selectionGranularity`, `breakStrategy`, `hyphenationFrequency`
- **Auto Fill**: `autofillType`

## Media and Content
- **Audio**: `audioType`, `audioSessionCategory`, `audioStreamType`, `repeatMode`, `shuffleMode`
- **Video**: `videoQuality`, `mediaType`, `mediaTypes`, `availablePhotoMediaTypes`, `moviePlayerStatus`
- **Camera**: `whichCamera`, `cameraFlashMode`, `availableCameras`, `availableCameraMediaTypes`
- **Quality**: `compression`, `scalingMode`, `playbackState`

## Authorization and Security
- **Permissions**:
  - Location: `locationServicesAuthorization`, `locationAccuracyAuthorization`, `accuracy`, `accuracyAuthorization`
  - Media: `cameraAuthorization`, `calendarAuthorization`
  - Other: `contactsAuthorization`, `authorizationStatus`, `availability`, `physicalSizeCategory`
- **Security**: `tlsVersion`, `pluginState`, `cachePolicy`, `cacheMode`

## Navigation and Layout
- **Transitions**:
  - Activity: `activityEnterTransition`, `activityExitTransition`, `activityReenterTransition`, `activityReturnTransition`
  - Shared Elements: `activitySharedElementEnterTransition`, `activitySharedElementExitTransition`, `activitySharedElementReenterTransition`, `activitySharedElementReturnTransition`
  - Modal: `modalTransitionStyle`, `transition`
- **Drawers**: `drawerLockMode`, `leftDrawerLockMode`, `rightDrawerLockMode`
- **Layout**: `layout`, `gravity`, `position`, `extendEdges`, `aspectRatio`, `collisionMode`
- **Buttons**: `systemButton`, `leftButtonMode`, `rightButtonMode`, `clearButtonMode`

## Notifications and Alerts
- **Settings**: `alertSetting`, `badgeSetting`, `soundSetting`, `criticalAlertSetting`, `providesAppNotificationSettings`
- **Display**: `alertStyle`, `importance`, `category`, `severity`, `showAsAction`
- **Behavior**: `notificationCenterSetting`, `lockScreenSetting`, `carPlaySetting`, `activationMode`, `pushMode`
- **Status**: `status`, `readyState`, `state`, `code`, `requestedOrientation`

## Scrolling and Selection
- **Scrollbars**: `scrollbars`, `overScrollMode`, `selectionStyle`, `separatorStyle`, `resultsSeparatorStyle`
- **Mode**: `mode`, `tabMode`, `decelerationRate`, `windowSoftInputMode`, `behavior`, `hintType`

## Formatting and Data
- **Format**: `format`, `frequency`, `charset`, `datePickerStyle`, `method`
- **Line Treatment**: `lineBreakMode`, `ellipsize`, `effect`, `curve`
- **Window Properties**: `windowPixelFormat`, `layerType`, `flags`, `options`, `defaults`
