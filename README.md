# Event Viewer

A Tampermonkey script for event viewer.

## Usage

1. Clone the repository
2. `yarn install`
3. `yarn build:tampermonkey`
4. Install the `dist/bundle.js` to Tampermonkey

### OR

Just create a new tampermonkey script and paste this

```js
// ==UserScript==
// @name        Doujin Event Viewer
// @namespace   Doujin Event Viewer
// @author      Aiko Fujimoto
// @description Adds Viewable Events to specific event dates
// @include     https://www.suruga-ya.jp/search*
// @include     https://www.suruga-ya.jp/product/detail/*
// @include     https://www.melonbooks.co.jp/detail/*
// @include     https://soundcloud.com/*/*
// @include     https://www.youtube.com/watch?v=*
// @include     https://www.discogs.com/*/release/*
// @version     1.3
// @require     https://raw.githubusercontent.com/aikoofujimotoo/doujin-event-viewer/master/dist/bundle.js
// @grant
// ==/UserScript==
```

## Browser Compatibility

This works on most modern browsers. This script doesn't support IE8 and below (Who uses those anyway).

## Issues

Got a problem? Open up a issue and I'll glad to look at it.

## License

[MIT](LICENSE)
