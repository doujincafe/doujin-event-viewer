// ============================================================================
// Event Viewer
// Copyright (C) 2021 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const melonbooks = {
  url: /^(http?s:\/\/)(www\.melonbooks\.co\.jp\/detail\/detail.php\?product_id=\d{1,6})/gi,
  date: /(\d{4})(\u5E74)(\d{1,2})(\u6708)(\d{1,2})(\u65E5)/g,
  formatting: 'yyyy年MM月dd日',
  locale: 'ja-JP',
  el: ['em.onsale span']
}

export default melonbooks
