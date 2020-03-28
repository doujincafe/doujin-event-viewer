// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import * as jQuery from 'jquery'
import * as moment from 'moment'
import * as replaceAll from 'replaceall'

/**
 * @alias jQuery
 */
const $ = jQuery

/**
 * @class
 */
class Extension {
  /**
   * Rename events to much simpler and identifiable event names
   * @param {Object} support Support config
   * @param {RegExp} support.url A regex to match what URLs the config should run
   * @param {string[]} support.el Array of target elements
   * @param {Object} support.events The list of events for matching
   * @param {boolean} waitUntilReady Wait until the site is ready.
   * @static
   */
  static renameEvents (support) {
    if (support.url.test(window.location.href)) {
      support.el.forEach(value => {
        const el = $(value)

        console.log(el)
        if (support.waitUntilReady) {
          $(document).ready(() => {
            for (const key in support.events) {
              console.log(el.html())
              const content = replaceAll(support.events[key], key, el.html())
              el.html(content)
            }
          })
        } else {
          for (const key in support.events) {
            console.log(el.html())
            const content = replaceAll(support.events[key], key, el.html())
            el.html(content)
          }
        }
      })
    }
  }

  /**
   * Add events to dates
   * @param {Object} support Support config
   * @param {RegExp} support.url A regex to match what URLs the config should run
   * @param {RegExp} support.date A regex to match dates on target elements
   * @param {string} support.formatting Custom date formatting
   * @param {string[]} support.el Array of target elements
   * @param {Object} support.events The list of events for matching
   * @param {string} support.locale A 2 character locale string for date.
   * @static
   */
  static addEventsToDates (support) {
    if (support.url.test(window.location.href)) {
      support.el.forEach(value => {
        const el = $(value)
        const events = support.events

        if (el.length) {
          for (const key in el) {
            // eslint-disable-next-line
            if (el.hasOwnProperty(key)) {
              // Do not entertain empty innertexts
              if (!el[key].innerText) return false

              const date = el[key].innerText.match(support.date)
              const formatting = support.formatting ? support.formatting : 'YYYY/MM/DD'
              if (date) {
                // Set the locale. Defaults to 'ja'.
                if (support.locale) moment.locale(support.locale)

                // Find the date from events list.
                for (const event in events) {
                  if (typeof events[event] === 'object') {
                    const from = moment(events[event].from, 'YYYY/MM/DD').parseZone('Asia/Tokyo')
                    const to = moment(events[event].to, 'YYYY/MM/DD').parseZone('Asia/Tokyo')
                    const current = moment(date[0], formatting).parseZone('Asia/Tokyo')

                    if (moment(current, 'll').isBetween(from, to, null, '[]')) {
                      el[key].innerHTML = el[key].innerText + ' (' + event + ')'
                    }
                  } else {
                    const current = moment(date[0], formatting).parseZone('Asia/Tokyo')
                    const eventDate = moment(events[event], 'YYYY/MM/DD').parseZone('Asia/Tokyo')

                    if (moment(current).isSame(eventDate)) {
                      el[key].innerHTML = el[key].innerText + ' (' + event + ')'
                    }
                  }
                }
              }
            }
          }
        }
      })
    }
  }
}

export default Extension
