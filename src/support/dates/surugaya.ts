// ============================================================================
// Event Viewer
// Copyright (C) 2023 Aiko Fujimoto & Contributors
//
// Licensed under MIT
// ============================================================================

import { DateSupportType } from "../dateSupportType";

const surugaya: DateSupportType[] = [
  {
    url: /^(http?s:\/\/)(www\.suruga-ya\.jp)\/(product\/detail\/.*)/gi,
    date: /\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/g,
    el: ['table.tbl_product_info td']
  },
  {
    url: /^http?s:\/\/www\.suruga-ya\.jp\/search(.*)/gi,
    date: /\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/g,
    el: ['.release_date']
  }
]

export default surugaya;
