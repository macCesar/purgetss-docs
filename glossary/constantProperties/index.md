# Constant Properties

Constant properties in Purge TSS are predefined values or enumerations that determine specific behaviors, styles, or states of UI elements. These properties accept only specific predefined values to ensure consistency and proper functionality.

## User Interface States
- **Style**: `style`, `textStyle`, `modalStyle`, `borderStyle`
- **Alignment**: `textAlign`, `verticalAlign`, `alignment`
- **Visibility**: `visibility`, `lockscreenVisibility`
- **Interface**: `userInterfaceStyle`, `overrideUserInterfaceStyle`

## Input and Keyboard
- **Keyboard Types**: `keyboardType`, `loginKeyboardType`, `passwordKeyboardType`
- **Return Key**: `returnKeyType`, `loginReturnKeyType`, `passwordReturnKeyType`
- **Input Behavior**: `autocapitalization`, `softKeyboardOnFocus`, `keyboardDismissMode`
- **Auto Fill**: `autofillType`

## Media and Content
- **Audio**: `audioType`, `audioSessionCategory`, `audioStreamType`
- **Video**: `videoQuality`, `mediaType`, `mediaTypes`
- **Camera**: `whichCamera`, `cameraFlashMode`
- **Quality**: `compression`, `scalingMode`

## Authorization and Security
- **Permissions**: 
  - Location: `locationServicesAuthorization`, `locationAccuracyAuthorization`
  - Media: `cameraAuthorization`, `calendarAuthorization`
  - Other: `contactsAuthorization`, `authorizationStatus`
- **Security**: `tlsVersion`, `pluginState`

## Navigation and Layout
- **Transitions**: 
  - Activity: `activityEnterTransition`, `activityExitTransition`
  - Shared Elements: `activitySharedElementEnterTransition`
- **Drawers**: `drawerLockMode`, `leftDrawerLockMode`, `rightDrawerLockMode`
- **Layout**: `layout`, `gravity`, `position`

## Notifications and Alerts
- **Settings**: `alertSetting`, `badgeSetting`, `soundSetting`
- **Display**: `alertStyle`, `importance`, `category`
- **Behavior**: `notificationCenterSetting`, `lockScreenSetting`, `carPlaySetting`
