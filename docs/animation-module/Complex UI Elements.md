---
sidebar_position: 3
slug: complex-ui-elements
---

# Complex UI elements
Here's an example of the Animation module with a more complex UI.

You'll need to install FontAwesome Fonts in your project by running:

```bash
> purgetss fonts -v=fa
```

And copy the following code:
```xml title="index.xml"
<Alloy>
  <Window class="bg-purple-700 keep-screen-on dont-exit-on-close">
    <View id="navBar" class="w-24 ml-2 h-6/12">
      <View class="grid-flow-row mr-8 bg-white rounded-lg ios:shadow-lg" ios:onSingletap="doAction" android:onClick="doAction">
        <View class="ml-0 grid-rows-7 w-72">
          <View class="items-center horizontal bg-selected-purple-100" action="home">
            <Button class="w-16 h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled fas fa-home" />
            <Label class="text-purple-700 touch-disabled" text="Home" />
          </View>
        </View>

        <View class="ml-0 grid-rows-7 w-72">
          <View class="items-center horizontal bg-selected-purple-100" action="profile">
            <Button class="w-16 h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled fas fa-user" />
            <Label class="text-purple-700 touch-disabled" text="Profile" />
          </View>
        </View>

        <View class="ml-0 grid-rows-7 w-72">
          <View class="items-center horizontal bg-selected-purple-100" action="messages">
            <Button class="w-16 h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled fas fa-comment" />
            <Label class="text-purple-700 touch-disabled" text="Messages" />
          </View>
        </View>

        <View class="ml-0 grid-rows-7 w-72">
          <View class="items-center horizontal bg-selected-purple-100" action="help">
            <Button class="w-16 h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled fas fa-question-circle" />
            <Label class="text-purple-700 touch-disabled" text="Help" />
          </View>
        </View>

        <View class="ml-0 grid-rows-7 w-72">
          <View class="items-center horizontal bg-selected-purple-100" action="settings">
            <Button class="w-16 h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled fas fa-cog" />
            <Label class="text-purple-700 touch-disabled" text="Settings" />
          </View>
        </View>

        <View class="ml-0 grid-rows-7 w-72">
          <View class="items-center horizontal bg-selected-purple-100" action="password">
            <Button class="w-16 h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled fas fa-lock" />
            <Label class="text-purple-700 touch-disabled" text="Password" />
          </View>
        </View>

        <View class="ml-0 grid-rows-7 w-72">
          <View class="items-center horizontal bg-selected-purple-100" action="sign-out">
            <Button class="w-16 h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled fas fa-sign-out-alt" />
            <Label class="text-purple-700 touch-disabled" text="Sign Out" />
          </View>
        </View>
      </View>

      <Button id="chevy" class="w-10 h-10 text-xl text-purple-700 bg-white border-4 border-purple-700 fas rounded-10 fa-chevron-up mr-1.5" ios:onSingletap="doAnimation" android:onClick="doAnimation" />

      <Animation id="myAnimation" module="purgetss.ui" class="duration-150 open:w-72 close:w-24" />
      <Animation id="myAnimationChevron" module="purgetss.ui" class="duration-150 rotate-90 open:rotate-90 close:-rotate-90" />
    </View>

    <View id="myCard" class="w-8/12 h-24 mt-6 mr-6 ios:shadow-lg">
      <View class="bg-white rounded-lg vertical">
        <View class="w-screen h-auto" ios:onSingletap="myCardClicked" android:onClick="myCardClicked">
          <ImageView class="w-16 h-16 m-4 ml-4 rounded-16" image="https://randomuser.me/api/portraits/women/17.jpg" />

          <View class="h-auto ml-24 vertical">
            <Label class="ml-0 text-sm font-bold text-gray-800" text="Someone Famous" />
            <Label class="ml-0 text-xs font-bold text-gray-400" text="Website Designer" />
          </View>
        </View>

        <View class="w-screen mx-2 bg-gray-300 rounded-1 h-0.5" />

        <View class="h-48 grid-flow-row mt-2" ios:onSingletap="doAction" android:onClick="doAction">
          <View class="grid-rows-5 ml-0 w-72">
            <View class="items-center horizontal bg-selected-purple-100" action="profile">
              <Button class="h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled w-14 fas fa-user" />
              <Label class="text-sm text-purple-700 touch-disabled" text="Edit Profile" />
            </View>
          </View>

          <View class="grid-rows-5 ml-0 w-72">
            <View class="items-center horizontal bg-selected-purple-100" action="inbox">
              <Button class="h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled w-14 fas fa-inbox" />
              <Label class="text-sm text-purple-700 touch-disabled" text="Inbox" />
            </View>
          </View>

          <View class="grid-rows-5 ml-0 w-72">
            <View class="items-center horizontal bg-selected-purple-100" action="settings">
              <Button class="h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled w-14 fas fa-cog" />
              <Label class="text-sm text-purple-700 touch-disabled" text="Settings" />
            </View>
          </View>

          <View class="grid-rows-5 ml-0 w-72">
            <View class="items-center horizontal bg-selected-purple-100" action="support">
              <Button class="h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled w-14 fas fa-question-circle" />
              <Label class="text-sm text-purple-700 touch-disabled" text="Support" />
            </View>
          </View>

          <View class="grid-rows-5 ml-0 w-72">
            <View class="items-center horizontal bg-selected-purple-100" action="sign-out">
              <Button class="h-full ml-0 text-xl text-purple-700 bg-transparent border-transparent touch-disabled w-14 fas fa-sign-out-alt" />
              <Label class="text-sm text-purple-700 touch-disabled" text="Sign Out" />
            </View>
          </View>
        </View>
      </View>

      <View class="w-8 h-8 mb-0 mr-0 bg-blue-400 rounded-tl-br-md">
        <Button id="myCardChevron" class="text-white bg-transparent border-transparent fas fa-chevron-right" ios:onSingletap="myCardClicked" android:onClick="myCardClicked" />
      </View>

      <Animation id="myCardAnimation" module="purgetss.ui" class="duration-150 open:h-(298) close:h-24" />
      <Animation id="myCardAnimationChevron" module="purgetss.ui" class="duration-150 rotate-90 open:rotate-90 close:-rotate-90" />
    </View>

    <Label id="action" class="mx-2 mb-2 text-sm font-bold bg-purple-800 rounded-lg text-purple-50 h-14" />
  </Window>
</Alloy>
```

```typescript title="index.js"
$.index.open();

// Both animations has the `rotate-90` set,
// so we can use apply to `hide` the animation from showing at startup
$.myAnimationChevron.apply($.chevy);
$.myCardAnimationChevron.apply($.myCardChevron);

function doAnimation(e) {
  $.myAnimation.play($.navBar);
  $.myAnimationChevron.play($.chevy);
}

function myCardClicked() {
  $.myCardAnimation.play($.myCard);
  $.myCardAnimationChevron.play($.myCardChevron);
}

function doAction(e) {
  if (e.source.action) {
    $.action.text = `   do Action: ${e.source.action}`;
  }
}
```

![Complex UI with Animations](../images/complex-UI.gif)

***\* low framerate gif***
