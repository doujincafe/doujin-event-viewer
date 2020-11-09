// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const discogs = {
  url: /^(http?s:\/\/)(www\.discogs\.com\/)(.*\/release\/\d{1,9})/gi,
  date: /^(\d{1,2})(\s)([a-z]{1,3})(\s)(\d{1,4})/gi,
  formatting: 'dd MMM yyyy',
  locale: 'en',
  el: ['.content a']
}

export default discogs
