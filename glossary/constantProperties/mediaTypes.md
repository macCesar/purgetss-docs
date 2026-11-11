```css
// Property: mediaTypes
// Description: Ti.App.iOS.SearchableItemAttributeSet: Media types present in the content.  MusicLibraryOptionsType: An array of media type constants defining selectable media.  CameraOptionsType: Array of media type constants to allow. Note: If you want to select live photos, iOS only  allows you to select existing live photos from the gallery, capturing new live photos is not supported by iOS public API, yet.  PhotoGalleryOptionsType: Array of media type constants to allow. Live photos is only supported on the iOS platform, starting with iOS 9.1. If you want to allow live photos with Titanium.Media.MEDIA_TYPE_LIVEPHOTO, you also need to specify at least Titanium.Media.MEDIA_TYPE_PHOTO as a fallback. If you do not allow live photos, they still can be selected, but will be represented as a normal static photo.  Ti.Media.VideoPlayer: The type of media in the player's current item first track.
// Component(s): Ti.App.iOS.SearchableItemAttributeSet, MusicLibraryOptionsType, CameraOptionsType, PhotoGalleryOptionsType, Ti.Media.VideoPlayer
'.media-types-music-type-all': { mediaTypes: [ Ti.Media.MUSIC_MEDIA_TYPE_ALL ] }
'.media-types-music-type-any-audio': { mediaTypes: [ Ti.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO ] }
'.media-types-music-type-audiobook': { mediaTypes: [ Ti.Media.MUSIC_MEDIA_TYPE_AUDIOBOOK ] }
'.media-types-music-type': { mediaTypes: [ Ti.Media.MUSIC_MEDIA_TYPE_MUSIC ] }
'.media-types-music-type-podcast': { mediaTypes: [ Ti.Media.MUSIC_MEDIA_TYPE_PODCAST ] }
'.media-types-type-photo': { mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ] }
'.media-types-type-livephoto': { mediaTypes: [ Ti.Media.MEDIA_TYPE_LIVEPHOTO ] }
'.media-types-type-video': { mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO ] }
'.media-types-video-type-audio': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_AUDIO ] }
'.media-types-video-type-closed-caption': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_CLOSED_CAPTION ] }
'.media-types-video-type-depth-data': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_DEPTH_DATA ] }
'.media-types-video-type-metadata': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_METADATA ] }
'.media-types-video-type-metadata-object': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_METADATA_OBJECT ] }
'.media-types-video-type-muxed': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_MUXED ] }
'.media-types-video-type-subtitle': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_SUBTITLE ] }
'.media-types-video-type-text': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_TEXT ] }
'.media-types-video-type-timecode': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_TIMECODE ] }
'.media-types-video-type': { mediaTypes: [ Ti.Media.VIDEO_MEDIA_TYPE_VIDEO ] }
```
