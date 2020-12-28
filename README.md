# Event Viewer

A [Tampermonkey](https://www.tampermonkey.net/) Script to display Doujin Event within dates on online doujin marketplaces such as Suruga-ya, Melonbooks and more.

__PS: The doujin events present here is not complete. If you wish to add more events, please open up a issue, write the events with their dates and then include sources to verify.__

## Usage

Just create a tampermonkey script and paste this code and it should work:

```js
// ==UserScript==
// @name        Doujin Event Viewer
// @namespace   Doujin Event Viewer
// @author      Aiko Fujimoto
// @description Adds Viewable Events to specific event dates
// @match       *://*/*
// @version     1.5.1
// @require     https://raw.githubusercontent.com/aikoofujimotoo/doujin-event-viewer/master/dist/bundle.js
// @grant
// ==/UserScript==
```

If you have troubles (like not getting updates), please consider using the compiled release instead. It can be found [here](https://github.com/aikoofujimotoo/releases/latest).

## Browser Compatibility

This works on most modern browsers. This script doesn't support IE8 and below (Who uses those anyway).

## License

[MIT](LICENSE)
