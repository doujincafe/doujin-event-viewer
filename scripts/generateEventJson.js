// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const fs = require('fs')
const path = require('path')
const formatToEventObject = require('../src/utils/formatToEventObject')

// Open target file containing events.
const targetData = fs.readFileSync(
  path.join(__dirname, './events.txt'),
  'utf-8'
)

const json = JSON.stringify(
  formatToEventObject(targetData),
  null,
  2
)

fs.writeFileSync(
  path.join(__dirname, '../src/common/events.json'),
  json,
  'utf-8'
)
