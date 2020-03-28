// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import events from '../common/events'

const surugaya = {
  url: /^(http?s:\/\/)(www\.suruga-ya\.jp\/)(search\?|product\/detail\/\d{1,9})/gi,
  date: /(\d{4})(-|\\|\/)(\d{1,2})(-|\\|\/)(\d{1,2})/gi,
  el: ['.t_contents', '.release_date'],
  events: events
}

export default surugaya
