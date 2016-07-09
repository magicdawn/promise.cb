'use strict';

module.exports = function cbify(fn) {
  return function() {
    var args = [].slice.call(arguments);
    var cb = args.pop();

    // check
    if (!cb || typeof cb !== 'function') throw new TypeError('cb is not a function');

    fn.apply(this, args).then(function(res) {
      process.nextTick(function() {
        cb(undefined, res);
      });
    }, function(err) {
      process.nextTick(function() {
        cb(err);
      });
    });
  };
};