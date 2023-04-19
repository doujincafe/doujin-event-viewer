// ============================================================================
// Event Viewer
// Copyright (C) 2023 Aiko Fujimoto & Contributors
//
// Licensed under MIT
// ============================================================================

import { DateTime, Settings, Interval } from 'luxon';
import events from './events.json';
import { DateSupportType } from './support/dateSupportType';

type EventValueType = {
  evt: string;
  value: {
    from: string,
    to: string
  } | string;
};

function updateContent(element: HTMLElement, obj: DateSupportType) {
  // If locale is specified, then set the default date locale.
  if (obj.locale) Settings.defaultLocale = obj.locale;

  // If regex fails, quit.
  const date = element.innerText.match(obj.date);
  if (!date) return;

  const dateFormat = obj.formatting || 'yyyy/MM/dd';

  element.innerText += ' ' + events.filter((event: EventValueType) => {
    if (typeof event.value === 'object') {
      const from = DateTime.fromFormat(event.value.from, 'yyyy/MM/dd');
      const to = DateTime.fromFormat(event.value.to, 'yyyy/MM/dd').plus(1);
      const current = DateTime.fromFormat(date[0], dateFormat);

      return Interval.fromDateTimes(from, to).contains(current);
    }

    const current = DateTime.fromFormat(date[0], dateFormat);
    const eventDate = DateTime.fromFormat(event.value, 'yyyy/MM/dd');

    return current.equals(eventDate);
  }).map((event: EventValueType) => event.evt).join(' ');
}

export default function dateSupportHandler(obj: DateSupportType) {
  if (!window.location.href.match(obj.url)) return;
  obj.el.forEach(value => {
    const elements = document.querySelectorAll(value);

    for (const element of elements) {
      if (!(element as HTMLElement).innerText || !(element instanceof Element)) continue;
      updateContent(element as HTMLElement, obj);
    }
  })
}
