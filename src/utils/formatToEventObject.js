// ============================================================================
// Event Viewer
// Copyright (C) 2021 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const formatToEventObject = (text) => {
  if (typeof text !== 'string') throw new TypeError('Invalid text input.')

  return text.split('\n')
    .filter(item => {
      return item[0] !== '#' && item.length > 1
    })
    .map((value) => {
      const [name, eventDate] = value.split(':')
      const date = eventDate.replace(/\s/g, '')

      if (!(date.indexOf('-') > 0)) {
        return {
          evt: name,
          value: date.replace(/\./g, '/')
        }
      }

      const [from, to] = date.split('-')
      return {
        evt: name,
        value: {
          from: from.replace(/\./g, '/'),
          to: to.replace(/\./g, '/')
        }
      }
    })
}

module.exports = formatToEventObject
