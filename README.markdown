# fd-prepend

[![Build Status](https://travis-ci.org/fp-dom/fd-prepend.svg)](https://travis-ci.org/fp-dom/fd-prepend) [![npm version](https://badge.fury.io/js/fd-prepend.svg)](http://badge.fury.io/js/fd-prepend)
> prepend DOM element in a functional way.


## Installation

`npm install fd-prepend --save`

## Usage

```js
let prepend = require('fd-prepend');
let elem = require('fd-elem');
let prependtoBody = prepend(document.body);

let p = elem('p', 'No, I am');

prependtoBody(p);

assert.equal(document.body.firstChild.innerText, 'No, I am'); // true.
```

## API

```
prepend :: parent -> child
```

A curried function that takes in:

* parent -> DOM element to which the child must be prepended.

* child  -> DOM element that needs to be prepended.



