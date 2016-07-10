'use strict';

const pcb = require('../');
const co = require('co');
const should = require('should');

describe('it works', function() {

  it('error', function(done) {
    const fn = co.wrap(function*() {
      throw new Error('boom');
    });

    const _fn = pcb(fn);
    _fn(function(err) {
      should.exist(err);
      err.should.be.Error();
      err.message.should.equal('boom');
      done();
    });
  });

  it('works', function(done) {
    const fn = co.wrap(function*(x) {
      return x + 1;
    });

    const _fn = pcb(fn);
    _fn(1, (err, res) => {
      should.not.exist(err);
      res.should.equal(2);
      done();
    });
  });

  it('error when cb is not function', function(done) {
    const _fn = pcb(x => Promise.resolve(x));

    try {
      _fn(1, 2);
    } catch (e) {
      e.should.be.instanceof(TypeError);
      e.message.should.match(/is not a function/);
      done();
    }
  });
});