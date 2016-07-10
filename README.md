# promise.cb
> transform an async function to callback style

[![Build Status](https://img.shields.io/travis/magicdawn/promise.cb.svg?style=flat-square)](https://travis-ci.org/magicdawn/promise.cb)
[![Coverage Status](https://img.shields.io/coveralls/magicdawn/promise.cb.svg?style=flat-square)](https://coveralls.io/github/magicdawn/promise.cb)
[![npm version](https://img.shields.io/npm/v/promise.cb.svg?style=flat-square)](https://www.npmjs.com/package/promise.cb)
[![npm downloads](https://img.shields.io/npm/dm/promise.cb.svg?style=flat-square)](https://www.npmjs.com/package/promise.cb)
[![npm license](https://img.shields.io/npm/l/promise.cb.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install
```
npm i promise.cb --save
```

## API
```js
const pcb = require('promise.cb');
const cbFn = pcb(asyncFn);
```

## Example
```js
const pcb = require('promise.cb');

async function fn1 (){
  return 1
}

const fn2 = require('co').wrap(function*(){
  return 2;
});

function fn3(){
  return Promise.resolve(3);
}

const _fn1 = pcb(fn1);
const _fn2 = pcb(fn2);
const _fn3 = pcb(fn3);
const cb = (err, res) => {
  assert(!err);
  console.log(res);
};

_fn1(cb); // log 1
_fn2(cb); // log 2
_fn3(cb); // log 3
```

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org