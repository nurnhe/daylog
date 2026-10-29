# Days

A private tracker for sober and drinking days. Log each day with one tap and see your current streak, your longest sober streak, a month calendar and totals.

**Use it as a phone app:** open https://nurnhe.github.io/daylog/app/ in Chrome on Android, then tap ⋮ → **Install app** (or **Add to Home screen**). It opens full screen with its own icon and works offline. On the home screen it is just called "Days".

## Features

- **Today:** your current streak (sober or drinking days in a row), two big buttons to log today, the last 7 days as dots, and your longest sober streak. If a recent day isn't logged, a reminder offers to fill it in.
- **Drinks:** on a drinking day, count what you drank by kind (beer, wine, spirits, cocktail, cider, other) with + and − buttons. Each glass, bottle, can or shot counts as one.
- **Calendar:** a month grid coloured by sober, drinking or not logged, with the number of drinks on drinking days. Tap any past day to change it.
- **Stats:** sober vs drinking days and drink totals for this week, this month and all time, what you drank by kind, and your recent streaks.
- **Settings:** when a day ends (4 am by default, so a late night counts for the evening before), Auto, Light or Dark colour theme (shared with the other apps on nurnhe.github.io, so switching it in one switches them all), and backup and restore.

## How streaks are counted

The streak counts back from today, or from yesterday if today isn't logged yet, for as long as the days are the same type. A drinking day ends a sober streak, and so does a day that isn't logged.

## Data

Everything is saved in the browser's `localStorage` on your device. Nothing is sent anywhere. **Settings → Save backup file** saves a backup, for example to move to a new phone.

## Files

The app lives in `app/`. The top-level `index.html` only redirects the old address to `app/`, and the top-level `sw.js` removes the service worker the app used before it moved.

- `app/days.html` is the page itself. The same file is published as a Claude artifact.
- `app/build.py` wraps it into `app/index.html` with the app manifest and offline support. Run `python3 app/build.py` after editing `app/days.html`, and bump the cache name in `app/sw.js` so installed phones pick up the change.
- `app/manifest.webmanifest`, `app/sw.js` and `app/icons/` make it installable and work offline.

## Credits

Navigation icons are inlined SVG from [Tabler Icons](https://github.com/tabler/tabler-icons) (MIT License). Fonts: Instrument Serif and Outfit, from Google Fonts (SIL Open Font License). Design follows [Skin Diary](https://github.com/nurnhe/skin-diary).
