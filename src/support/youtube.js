// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import eventRename from '../common/eventRename'

const youtube = {
  url: /^(http?s:\/\/)(www\.youtube\.com\/watch\?v=)([a-z|_|-|0-9]+)/gi,
  el: [
    'h1.title .ytd-video-primary-info-renderer',
    'yt-formatted-string.content.ytd-video-secondary-info-renderer'
  ],
  events: eventRename
}

export default youtube
