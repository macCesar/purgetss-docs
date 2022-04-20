---
sidebar_position: 6
slug: platform-and-device-modifiers
---

# Platform and Device modifiers
You can specify different classes to any element using `Platform` and `Device` modifiers ( also called variants or prefixes ):

- Platform modifiers
  - `ios:`
  - `android:`

- Device modifiers
  - `tablet:`
  - `handheld:`

Lets say that you want to have different background color and font sizes, depending on the platform and device your app is running.

You can target them separately, and you can even combine them with arbitrary values, like: `ios:bg-(#53606b)`, `ios:text-(20px)`, `android:bg-(#8fb63e)` and `android:text-(24px)`.

```xml title="index.xml"
<Alloy>
  <Window class="tablet:bg-green-500 handheld:bg-blue-500">
    <View class="h-32 tablet:bg-green-100 handheld:bg-blue-100">
      <Label class="w-screen h-auto text-center ios:text-blue-800 ios:text-xl android:text-green-800 android:text-2xl">This is a Test</Label>
    </View>
  </Window>
</Alloy>
```

```css title="app.tss"
// PurgeTSS
// Created by César Estrada
// https://github.com/macCesar/purgeTSS

// Main styles
'View': { width: Ti.UI.SIZE, height: Ti.UI.SIZE }
'Window': { backgroundColor: '#ffffff' }
'.tablet:bg-green-100[formFactor=tablet]': { backgroundColor: '#dcfce7' }
'.tablet:bg-green-500[formFactor=tablet]': { backgroundColor: '#22c55e' }
'.handheld:bg-blue-100[formFactor=handheld]': { backgroundColor: '#dbeafe' }
'.handheld:bg-blue-500[formFactor=handheld]': { backgroundColor: '#3b82f6' }
'.ios:text-xl[platform=ios]': { font: { fontSize: 20 } }
'.android:text-2xl[platform=android]': { font: { fontSize: 24 } }
'.h-32': { height: 128 }
'.h-auto': { height: Ti.UI.SIZE }
'.text-center': { textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER }
'.android:text-green-800[platform=android]': { color: '#166534' }
'.ios:text-blue-800[platform=ios]': { color: '#1e40af' }
'.w-screen': { width: Ti.UI.FILL }
```
