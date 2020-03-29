// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const fs = require('fs')
const path = require('path')

const build = path.join(__dirname, '../../dist/bundle.js')
console.log('Build: ', build)

const read = fs.readFileSync(build, 'utf-8')
const template =
`// ==UserScript==
// @name        Doujin Event Viewer
// @namespace   Doujin Event Viewer
// @author      Aiko Fujimoto
// @description Adds Viewable Events to specific event dates
// @include     https://www.suruga-ya.jp/search*
// @include     https://www.suruga-ya.jp/product/detail/*
// @include     https://www.melonbooks.co.jp/detail/*
// @include     https://www.soundcloud.com/*
// @include     https://www.youtube.com/watch
// @include     https://www.discogs.com/*/release/*
// @version     ${require('../../package.json').version}
// @grant
// ==/UserScript==
${read}
`
fs.writeFileSync(build, template, 'utf-8')

console.log('Template built successfully.')
