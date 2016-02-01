var AppError = require('../error');
var assert = require('assert');

describe('error type', function () {

  describe('javascript error', function () {

    it('ReferenceError', function () {

      try{
        i++;
      } catch (e){
        assert.ok(e instanceof ReferenceError);
      }

    });

    it('SyntaxError', function () {

      try{
        var obj = {name:'',age:12};
      } catch (e){
        assert.ok(e instanceof SyntaxError);
      }

    });

    it('TypeError', function () {

      try{
        new {};
      } catch (e){
        assert.ok(e instanceof TypeError);
      }

    });

  });

  describe('user-defined error', function () {

    it('UnknownError', function () {

      try{
        throw new AppError.UnknownError();
      } catch (e){
        assert.ok(e instanceof AppError.UnknownError);
      }

    });

  });

});

