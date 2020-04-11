// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import addEventsToDates from './lib/addEventsToDates'
import renameEvents from './lib/renameEvents'

// Support
import surugaya from './support/suruga-ya'
import melonbooks from './support/melonbooks'
import soundcloud from './support/soundcloud'
import youtube from './support/youtube'
import discogs from './support/discogs'

// Load Configurations for showing event names on dates
const load = [
  surugaya,
  melonbooks,
  discogs
]

// Load Configurations for replacing event names
const loadRenames = [
  soundcloud,
  youtube
]

load.forEach(addEventsToDates)
loadRenames.forEach(renameEvents)
