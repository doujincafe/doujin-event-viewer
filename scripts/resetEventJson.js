// ============================================================================
// Event Viewer
// Copyright (C) 2021 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const fs = require('fs')
const path = require('path')

fs.writeFileSync(
  path.join(__dirname, '../src/common/events.json'),
  "[]\n",
  'utf-8'
)
