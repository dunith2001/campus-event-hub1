# Campus Event Hub — Mobile Application Development Assignment 01

**Student Name:** D.C.Abeysinghe  
**Student ID:** ps/2022/004  
**Course:** Mobile Application Development — University of Kelaniya  
**Demo Video:** [ADD PUBLIC YOUTUBE OR GOOGLE DRIVE VIDEO LINK]

## App purpose
Campus Event Hub helps university students discover workshops, career sessions, academic events and volunteer activities in one place. Students can filter events, read details, bookmark interesting events and receive a local notification.

**Note:** All event information is illustrative, realistic hard-coded sample data, not verified live university schedules.

## Screens
1. **Home** — introduction, campus image, total event and saved-event counts.
2. **Events** — FlatList of all sample events, with a category-filter Modal.
3. **Event Details** — nested Stack detail route with event description and bookmark action.
4. **Saved** — shared-state list of bookmarked events.
5. **Settings** — foreground-return AppState status and notification instructions.

## React Native components and locations
| Component | File | Purpose |
|---|---|---|
| View, Text, Image, Pressable | `app/(tabs)/index.js` | Home UI and navigation |
| FlatList, Modal, Pressable | `app/(tabs)/events/index.js` | Event listing and filter dialog |
| View, Text, Pressable | `components/EventCard.js` | Reusable event card |
| Pressable, Text | `app/(tabs)/events/[id].js` | Bookmark interaction |
| FlatList | `app/(tabs)/saved/index.js` | Saved event listing |
| AppState | `context/EventContext.js` | Background-to-foreground listener |

## Expo Router file-based routing
```
app/
  _layout.js                  # Root Stack + shared provider
  (tabs)/
    _layout.js                # Bottom tab navigation
    index.js                  # Home tab
    events/
      _layout.js              # Nested Stack
      index.js                # Event listing
      [id].js                 # Dynamic detail route
    saved/index.js            # Saved tab
    settings/index.js         # Settings tab
```
The event cards navigate to `/events/[id]` using `router.push`. The nested Stack displays a back button; Android hardware back also returns to the list.

## Global state
`context/EventContext.js` wraps the app in `EventProvider` and shares `savedIds`, `toggleSaved` and `lastReturn` through React Context and `useState`. Saving an event in Details immediately updates the Home count and Saved tab. State is in-memory only and resets when the app fully restarts.

## AppState behavior
`AppState.addEventListener('change', ...)` tracks transitions. If the previous state was `background` or `inactive` and the next state is `active`, the provider records the current return time. Open Settings to see the updated message. The listener is removed on unmount.

## Notification research and implementation
The implementation follows the Expo Notifications API approach: set a foreground notification handler, configure an Android notification channel, inspect/request notification permission, then call `Notifications.scheduleNotificationAsync` with `trigger: null` to send an immediate local notification. The notification is initiated when an event is bookmarked; removing a bookmark does not send one. The helper is in `utils/notifications.js`. Permission can be denied; the bookmark still works and an alert explains notification failure. Test on a real Android/iOS device; web does not support this feature. Device/Expo Go behavior can vary by SDK and platform; use a development build if required.

## Local setup (JavaScript standard Expo template)
Prerequisites: Node.js LTS, npm, Expo Go or an Android/iOS development environment.
```bash
git clone https://github.com/YOUR-USERNAME/campus-event-hub.git
cd campus-event-hub
npm install
npx expo start
```
Use the QR code with Expo Go on a supported physical device or press `a` for Android emulator. To create a fresh standard Expo project for comparison: `npx create-expo-app@latest` and select a JavaScript-compatible Expo template (this repository already includes the project files). The project is configured with JavaScript `.js` files and Expo Router.

## Demonstration video checklist
1. Show Home with six populated sample events and the saved count.
2. Open Events, filter by Workshop, and close the Modal.
3. Open an event detail page; use the Stack back arrow.
4. Bookmark an event; show notification permission and local notification.
5. Switch to Saved and show the event; remove it and confirm the shared state updates.
6. Open Settings, background the app, return to the app, and show the updated timestamp.
7. Add the public/unlisted video URL above before submission.

## Submission
Push the final code and README to the `main` branch. Confirm the repo is publicly accessible and the video link works. Submit the single GitHub repo URL to eKel by **18 November 2026**.


## Expo SDK 58 setup

This source is configured to target **Expo SDK 58**. Install the matching dependency versions on your own machine before running. The SDK 58 build has **not been tested** in an emulator.

```bash
npm install
npx expo install --fix
npx expo-doctor
npx expo start -c
```

The initial `*` versions for React, React Native, and supporting libraries are temporary dependency-resolution placeholders. **Do not submit without checking** `npx expo-doctor`, testing the emulator, and committing the resulting `package-lock.json`. Expo Go SDK 58 should be used. Check notifications on your emulator, and use a development build if Expo Go does not support the feature.

## Demo Video

Watch the Campus Event Hub application demonstration:

[Watch Demo Video on Google Drive](https://drive.google.com/file/d/1NJShI_duLzeeFtM4CjZSqWPeG94oQInr/view?usp=drive_link)
