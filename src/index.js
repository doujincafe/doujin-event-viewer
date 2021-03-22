// ============================================================================
// Event Viewer
// Copyright (C) 2021 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import addEventsToDates from './lib/addEventsToDates'
import renameEvents from './lib/renameEvents'

// Support
import surugaya from './support/surugaya'
import surugayaSearch from './support/surugayaSearch'
import melonbooks from './support/melonbooks'
import soundcloud from './support/soundcloud'
import youtube from './support/youtube'
import discogs from './support/discogs'

const init = (eventHandler, events, disabled = false) => {
  if (disabled) return
  events.forEach(eventHandler)
}

// Load Configurations for showing event names on dates
init(addEventsToDates, [
  surugaya,
  surugayaSearch,
  melonbooks,
  discogs
])

// Load Configurations for replacing event names
// This is disabled by default.
init(renameEvents, [soundcloud, youtube], true)

console.log('Up and running!')
