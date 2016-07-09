'use strict';

const pcb = require('../');
const co = require('co');
require('should');

describe('it works', function() {

  it('error', function(next) {
    const fn = co.wrap(function*() {
      throw new Error('boom');
    });

    const _fn = pcb(fn);
    _fn(function(err) {
      err.should.exist();
      err.should.be.Error();
      err.message.should.equal('boom');
      next();
    });
  });
});