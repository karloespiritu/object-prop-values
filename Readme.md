# object-prop-values

Get all property values of an object

## Install

```js
npm install --save object-prop-values
```

## Usage

```js
const objectPropValues = require('object-prop-values')
const obj = {a: 1, b: 'two', c: 3, d: 4}

objectPropValues(obj)
// => [ 1, 'two', 3, 4 ]

```