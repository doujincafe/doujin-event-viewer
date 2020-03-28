// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import events from '../common/events'

const melonbooks = {
  url: /^(http?s:\/\/)(www\.melonbooks\.co\.jp\/detail\/detail.php\?product_id=\d{1,6})/gi,
  date: /(\d{4})(\u5E74)(\d{1,2})(\u6708)(\d{1,2})(\u65E5)/g,
  locale: 'ja',
  el: ['em.onsale span'],
  events: events
}

export default melonbooks
