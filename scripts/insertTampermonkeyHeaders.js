// ============================================================================
// Event Viewer
// Copyright (C) 2021 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

const code = fs.readFileSync(path.join(__dirname, '../dist/bundle.js'), 'utf-8')
const header =
    '// ==UserScript==\n' +
    '// @name        Doujin Event Viewer\n' +
    '// @namespace   Doujin Event Viewer\n' +
    '// @author      Aiko Fujimoto\n' +
    '// @description Adds Viewable Events to specific event dates\n' +
    '// @match       *://*/*\n' +
    '// @version     ' + pkg.version + '\n' +
    '// @grant\n' +
    '// ==/UserScript==\n'

const filename = `doujin-event-viewer-${pkg.version}.stable.user.js`
const outputPath = path.join(__dirname, `../dist/${filename}`)

fs.writeFileSync(outputPath, `${header}${code}`, 'utf-8')
