// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

import jQuery from 'jquery'
import * as replaceAll from 'replaceall'

/**
 * Rename events to much simpler and identifiable event names.
 * @param {Object} support Support config
 * @param {RegExp} support.url A regex to match what URLs the config should run
 * @param {string[]} support.el Array of target elements.
 * @param {Object} support.events The list of events
 */
const renameEvents = (support) => {
  if (support.url.test(window.location.href)) {
    jQuery(() => {
      support.el.forEach(value => {
        const el = jQuery(value)
        for (const key in support.events) {
          const content = replaceAll(support.events[key], key, el.html())
          el.html(content)
        }
      })
    })
  }
}

export default renameEvents
