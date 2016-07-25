'use strict'

const test = require('tape')
const objValues = require('./index')

test('array should contain all values of object', function(t) {

  const obj = {"a": 1, "b": "two", "c": 3}

  t.plan(1)
  // returns true if actual result is in objVals
  t.deepEqual([1, "two", 3], objValues(obj), "test 1")
  t.end()
})
