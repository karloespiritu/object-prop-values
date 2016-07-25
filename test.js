'use strict'

const test = require('tape')
const objValues = require('./index')

const obj = {"a": 1, "b": "two", "c": 3, "d": {"e": 4, "f": 5}}

console.log(obj)
console.log(objValues(obj))