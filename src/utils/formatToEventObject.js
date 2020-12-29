// ============================================================================
// Event Viewer
// Copyright (C) 2020 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const formatToEventObject = (text) => {
  if (typeof text !== 'string') throw new TypeError('Invalid text input.')

  // Split each lines by newline. This assumes that the input's EOL is
  // lf (unix)
  // Also removes empty lines so that we won't gonna throw up error when
  // we run it.
  return text.split('\n')
    .filter(item => {
      // Exclude lines starting with a hash sign and empty lines.
      // Hash sign is for comments.
      return item[0] !== '#' && item.length > 1
    })
    .map((value) => {
      // Split text by colon. This assumes the format is <name>: <date>
      const [name, eventDate] = value.split(':')

      // Remove any whitespaces in the date.
      const date = eventDate.replace(/\s/g, '')

      // If the date has dashes on it, this implies that it is a date range.
      if (date.indexOf('-') > 0) {
        const [from, to] = date.split('-')
        return {
          evt: name,
          value: {
            // Replace dots to forward slashes. This implies that year, month
            // and date is separated by dots.
            from: from.replace(/\./g, '/'),
            to: to.replace(/\./g, '/')
          }
        }
      } else {
        return {
          evt: name,
          value: date.replace(/\./g, '/')
        }
      }
    })
}

module.exports = formatToEventObject
