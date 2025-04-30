# Boolean Properties

Boolean properties in Purge TSS are those that can only have two values: true or false. These properties are fundamental for controlling the behavior and appearance of elements in your application.

This section contains over 200 boolean properties organized into several key categories:

## Accessibility
Properties like `accessibilityEnabled`, `accessibilityHidden`, and `accessibilityDisableLongPress` that control how your app interacts with accessibility features.

## User Interface Controls
- **Navigation**: `navBarHidden`, `tabBarHidden`, `showSearchBarInNavBar`, `homeButtonEnabled`
- **Interaction**: `touchEnabled`, `scrollable`, `swipeable`, `bubbleParent`, `focusable`
- **Display**: `visible`, `animated`, `fullscreen`, `translucent`, `opaque`

## Media and Content
- **Playback**: `autoplay`, `looping`, `showControls`, `audioPlaying`, `audioFocus`
- **Images**: `imageIsMask`, `preventDefaultImage`, `iconIsMask`, `activeIconIsMask`
- **Video**: `allowsAirPlay`, `pictureInPictureEnabled`, `allowsInlineMediaPlayback`

## Security and Permissions
- **Authentication**: `authenticationRequired`, `secure`, `flagSecure`
- **File Access**: `allowFileAccess`, `allowTranscoding`, `allowBackground`
- **Location**: `locationServicesEnabled`, `trackSignificantLocationChange`, `showBackgroundLocationIndicator`

## Editing and Selection
- **Edit Mode**: `editable`, `allowEditing`, `requiresEditingToMove`, `clearOnEdit`
- **Selection**: `allowsSelection`, `allowMultipleSelections`, `selectionOpens`, `selectionIndicator`

## System Features
- **Keyboard**: `keyboardDisplayRequiresUserAction`, `keyboardVisible`, `submitEnabled`
- **Network**: `online`, `waitsForConnectivity`, `connected`
- **Device**: `keepScreenOn`, `idleTimerDisabled`, `forceTouchSupported`
