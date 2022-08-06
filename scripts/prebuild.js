// ============================================================================
// Event Viewer
// Copyright (C) 2021 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const fs = require('fs')
const path = require('path')

const eventTextPath = path.join(__dirname, './events.txt')

// Well fail the build process when event.txt file cannot be found.
if (!fs.existsSync(eventTextPath)) {
  throw new Error('Event data cannot be found.')
}

const data = fs.readFileSync(eventTextPath, 'utf-8')
  .split('\n')
  .filter(item => {
    return item[0] !== '#' && item.length > 1
  })
  .map(value => {
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

fs.writeFileSync(
  path.join(__dirname, '../src/common/events.json'),
  JSON.stringify(data, null, 2),
  'utf-8'
)
