// ============================================================================
// Event Viewer
// Copyright (C) 2021 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import $ from 'cash-dom'
import { DateTime, Settings, Interval } from 'luxon'
import events from '../common/events.json'

/**
 * Update
 * @param {Element} el target element to write events
 * @param {Object} obj Support config
 * @param {RegExp} obj.url A regex to match what URLs the config should run
 * @param {RegExp} obj.date A regex to match dates on target elements
 * @param {string} obj.formatting Custom date formatting
 * @param {string} obj.locale A 2 character locale string for date.
 */
const update = (el, obj) => {
  const dateFormat = obj.formatting || 'yyyy/MM/dd'
  const date = el.innerText.match(obj.date)

  // If locale is specified, then set the default date locale.
  if (obj.locale) Settings.defaultLocale = obj.locale

  // If not matched from regex, then bail.
  if (!date) return

  const filtered = events.filter((event) => {
    const { value } = event

    if (typeof value === 'object') {
      const from = DateTime.fromFormat(value.from, 'yyyy/MM/dd')
      const to = DateTime.fromFormat(value.to, 'yyyy/MM/dd').plus(1)
      const current = DateTime.fromFormat(date[0], dateFormat)

      return Interval.fromDateTimes(from, to).contains(current)
    }

    const current = DateTime.fromFormat(date[0], dateFormat)
    const eventDate = DateTime.fromFormat(value, 'yyyy/MM/dd')

    return current.equals(eventDate)
  })

  el.innerText += ` ${filtered.map(c => `[${c.evt}]`).join(' ')}`
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
