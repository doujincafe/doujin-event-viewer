// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import events from '../common/events'

const discogs = {
  url: /^(http?s:\/\/)(www\.discogs\.com\/)(.*\/release\/\d{1,9})/gi,
  date: /^(\d{1,2})(\s)([a-z]{1,3})(\s)(\d{1,4})/gi,
  formatting: 'DD/MMM/YYYY',
  el: ['.content a'],
  events: events
}

export default discogs
