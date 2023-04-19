// ============================================================================
// Event Viewer
// Copyright (C) 2023 Aiko Fujimoto & Contributors
//
// Licensed under MIT
// ============================================================================

import { DateSupportType } from "../dateSupportType";

const discogs: DateSupportType[] = [
  {
    url: /^(http?s:\/\/)(www\.discogs\.com\/)(.*\/release\/\d{1,9})/gi,
    date: /^(\d{1,2})(\s)([a-z]{1,3})(\s)(\d{1,4})/gi,
    formatting: 'dd MMM yyyy',
    locale: 'en',
    el: ['.content a']
  }
]

export default discogs;
