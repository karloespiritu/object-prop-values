'use strict'

module.exports = function(obj) {

  const keys = Object.keys(obj)
  const values = []

  keys.map((k) => values.push(obj[k]))

  return values
}