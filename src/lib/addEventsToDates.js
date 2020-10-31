// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import jQuery from 'jquery'
import { DateTime, Settings, Interval } from 'luxon'

/**
 * Add events to dates
 * @param {Object} support Support config
 * @param {RegExp} support.url A regex to match what URLs the config should run
 * @param {RegExp} support.date A regex to match dates on target elements
 * @param {string} support.formatting Custom date formatting
 * @param {string[]} support.el Array of target elements
 * @param {Object} support.events The list of events for matching
 * @param {string} support.locale A 2 character locale string for date.
 */
const addEventsToDates = (support) => {
  if (support.url.test(window.location.href)) {
    support.el.forEach(value => {
      const el = jQuery(value)
      const events = support.events

      for (const key in el) {
        if (Object.prototype.hasOwnProperty.call(el, key)) {
          // Do not entertain empty innertexts
          if (!el[key].innerText) return

          const date = el[key].innerText.match(support.date)
          const formatting = support.formatting || 'yyyy/MM/dd'

          if (date) {
            // Set the locale. Defaults to 'ja'
            if (support.locale) Settings.defaultLocale = support.locale

            // Find the date from events list.
            for (const event in events) {
              if (typeof events[event] === 'object') {
                const from = DateTime.fromString(events[event].from, 'yyyy/MM/dd')
                const to = DateTime.fromString(events[event].to, 'yyyy/MM/dd')
                const current = DateTime.fromString(date[0], formatting)

                if (Interval.fromDateTimes(from, to).contains(current)) {
                  el[key].innerHTML = el[key].innerText + ' [' + event + ']'
                }
              } else {
                const current = DateTime.fromString(date[0], formatting)
                const eventDate = DateTime.fromString(events[event], 'yyyy/MM/dd')

                if (current === eventDate) {
                  el[key].innerHTML = el[key].innerText + ' [' + event + ']'
                }
              }
            }
          }
        }
      }
    })
  }
}

export default addEventsToDates
