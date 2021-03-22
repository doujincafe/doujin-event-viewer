// ============================================================================
// Event Viewer
// Copyright (C) 2021 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import eventRename from '../common/eventRename'

const soundcloud = {
  url: /^(http?s:\/\/)(soundcloud.com\/)([a-z0-9]+\/[a-z0-9|-]+)/gi,
  el: ['div.sc-type-small', 'span.soundTitle__title span'],
  waitUntilReady: true,
  events: eventRename
}

export default soundcloud
