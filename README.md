# A minimal Circular List in javascript

[![Build Status](https://travis-ci.org/nervetattoo/CircularList.js.svg?branch=master)](https://travis-ci.org/nervetattoo/CircularList.js)

This **only** aims at iterating a list, in order to handle transformations use native array methods and reset the data structure.

```js
var CircularList = require('circularlist');

var list = new CircularList([1, 2, 3, 4]);

list.next() // 1
list.next() // 2
list.prev() // 1
list.last() // 4
list.next() // 1

// Modify list by resetting

list.reset(list.toArray().slice(1)); // [1, 2, 3]
```

## Install

* `bower install CircularList`
* `npm install CircularList`

## Supported environments:

* node: `var CircularList = require('circularlist');`
* browser:
    * AMD: `define(['CircularList'], function(CircularList) {});`
    * Global: `window.CircularList`

## Run tests

`npm install; npm test`
