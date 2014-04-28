# A minimal Circular Linked List in javascript

This **only** aims at solving iterating the list, in order to handle transformations use native array methods and reset the data structure.

```js
var CircularList = require('CircularList'');

var list = new CircularList([1, 2, 3, 4]);

list.next() // 1
list.next() // 2
list.prev() // 1
list.last() // 4

// Modify list by resetting

list.reset(list.toArray().slice(1)); // [1, 2, 3]
```

## Install

* `bower install CircularList`
* `npm install CircularList`

## Supported environments:

* node: `var CircularList = require('CircularList');`
* browser:
    * AMD: `define(['CircularList'], function(CircularList) {});`
    * Global: `window.CircularList`

## Run tests

`npm install; npm test`
