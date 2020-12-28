// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import $ from 'cash-dom'
import { DateTime, Settings, Interval } from 'luxon'
import events from '../common/events.json'

const update = (el, obj) => {
  const dateFormat = obj.formatting || 'yyyy/MM/dd'
  const date = el.innerText.match(obj.date)

  if (date) {
    if (obj.locale) Settings.defaultLocale = obj.locale

    for (let i = 0, l = events.length; i < l; i++) {
      const { evt, value } = events[i]

      if (typeof value === 'object') {
        const from = DateTime.fromFormat(value.from, 'yyyy/MM/dd')
        const to = DateTime.fromFormat(value.to, 'yyyy/MM/dd').plus(1)
        const current = DateTime.fromFormat(date[0], dateFormat)

        if (Interval.fromDateTimes(from, to).contains(current)) {
          el.innerText += ` [${evt}]`
        }
      } else {
        const current = DateTime.fromFormat(date[0], dateFormat)
        const eventDate = DateTime.fromFormat(value, 'yyyy/MM/dd')

        if (current.equals(eventDate)) {
          el.innerText += ` [${evt}]`
        }
      }
    }
  }
}

/**
 * Add events to dates
 * @param {Object} obj Support config
 * @param {RegExp} obj.url A regex to match what URLs the config should run
 * @param {RegExp} obj.date A regex to match dates on target elements
 * @param {string} obj.formatting Custom date formatting
 * @param {string[]} obj.el Array of target elements
 * @param {string} obj.locale A 2 character locale string for date.
 */
const addEventsToDates = (obj) => {
  if (window.location.href.match(obj.url)) {
    obj.el.forEach(value => {
      const el = $(value)

      for (const key in el) {
        if (Object.prototype.hasOwnProperty.call(el, key)) {
          // Do not entertain empty innertexts and non-Element properties.
          if (!el[key].innerText || !(el[key] instanceof Element)) return

          update(el[key], obj)
        }
      }
    })
  }
}

export default addEventsToDates
