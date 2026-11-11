```css
// Property: state
// Description: Ti.Android.QuickSettingsService: Sets the state of the Tile.  Ti.Calendar.Alert: The current state of the alert.  GeocodedAddress: State name.  Ti.Media.AudioPlayer: Current state of playback, specified using one of the STATE constants defined on this object.  Ti.Network.Socket.TCP: Current state of the socket.  RowActionType: The state to show this edit action. Either &quot;trailing&quot; (default) or &quot;leading&quot;.
// Component(s): Ti.Android.QuickSettingsService, Ti.Calendar.Alert, GeocodedAddress, Ti.Media.AudioPlayer, Ti.Network.Socket.TCP, RowActionType
'.state-tile-unavailable[platform=android]': { state: Ti.Android.TILE_STATE_UNAVAILABLE }
'.state-tile-inactive[platform=android]': { state: Ti.Android.TILE_STATE_INACTIVE }
'.state-tile-active[platform=android]': { state: Ti.Android.TILE_STATE_ACTIVE }
'.state-calendar-dismissed': { state: Ti.Calendar.STATE_DISMISSED }
'.state-calendar-fired': { state: Ti.Calendar.STATE_FIRED }
'.state-calendar-scheduled': { state: Ti.Calendar.STATE_SCHEDULED }
'.state-audio-buffering': { state: Ti.Media.AUDIO_STATE_BUFFERING }
'.state-audio-initialized': { state: Ti.Media.AUDIO_STATE_INITIALIZED }
'.state-audio-paused': { state: Ti.Media.AUDIO_STATE_PAUSED }
'.state-audio-playing': { state: Ti.Media.AUDIO_STATE_PLAYING }
'.state-audio-starting': { state: Ti.Media.AUDIO_STATE_STARTING }
'.state-audio-stopped': { state: Ti.Media.AUDIO_STATE_STOPPED }
'.state-audio-stopping': { state: Ti.Media.AUDIO_STATE_STOPPING }
'.state-audio-waiting-for-data': { state: Ti.Media.AUDIO_STATE_WAITING_FOR_DATA }
'.state-audio-waiting-for-queue': { state: Ti.Media.AUDIO_STATE_WAITING_FOR_QUEUE }
'.state-network-socket-initialized': { state: Ti.Network.Socket.INITIALIZED }
'.state-network-socket-connected': { state: Ti.Network.Socket.CONNECTED }
'.state-network-socket-listening': { state: Ti.Network.Socket.LISTENING }
'.state-network-socket-closed': { state: Ti.Network.Socket.CLOSED }
'.state-network-socket-error': { state: Ti.Network.Socket.ERROR }
```
