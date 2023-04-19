// ============================================================================
// Event Viewer
// Copyright (C) 2023 Aiko Fujimoto & Contributors
//
// Licensed under MIT
// ============================================================================

import dateSupportHandler from './dateSupportHandler';
import surugaya from './support/dates/surugaya';
import melonbooks from './support/dates/melonbooks';
import discogs from './support/dates/discogs';
import { DateSupportType } from './support/dateSupportType';

function init(eventHandler: (obj: DateSupportType) => void, events: DateSupportType[]) {
  events.forEach(event => eventHandler(event));
}

init(dateSupportHandler, [
  ...surugaya,
  ...melonbooks,
  ...discogs
]);
