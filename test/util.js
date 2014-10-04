var requirejs = require('requirejs');
var assert = require('assert');

requirejs.config({  
    baseUrl: './src',  
    nodeRequire: require  
});

suite('util', function(){
    var util;

    setup(function (done){
        requirejs(['util'], function(mod) {
            util = mod;
            done();
        });
    });

    suite('format', function(){

        test('should format string', function(){
            var template = 'a${let1}c${let2}',
                params = {
                    let1: 'b',
                    let2: 'de'
                },
                result = util.format(template, params);

            assert.equal('abcde', result);
        });

        test('should format number', function(){
            var template = '${let0}1${let1}3',
                params = {
                    let0: 0,
                    let1: 2
                },
                result = util.format(template, params);

            assert.equal('0123', result);
        });

        test('should format null & undefined to blank', function(){
            var template = 'a${let1}c${let2}e',
                params = {
                    let1: null
                },
                result = util.format(template, params);

            assert.equal('ace', result);
        });

    });

    suite('finish', function(){

    });

    suite('curry', function(){

        var add = function(a, b, c){ return a + b + c; };

        test('should return function with same usage, with 0 arg given', function(){
            var addEx = util.curry(add);

            assert.equal(16, addEx(1, 5, 10));
            assert.equal(16, util.curry(addEx)(1, 5, 10));
        });

        test('should return function with 1 arg, with 1 arg given', function(){
            var addBy1 = util.curry(add, 1);

            assert.equal(16, addBy1(5, 10));
        });

        test('should return function with more arg, with more args given', function(){
            var addBy6 = util.curry(add, 1, 5);

            assert.equal(16, addBy6(10));
        });

        test('curried again should be ok', function(){
            var addBy1 = util.curry(add, 1),
                addBy6 = util.curry(addBy1, 5);

            assert.equal(16, addBy6(10));
        });

    });

    suite('currilize', function(){

        var add = function(a, b, c){ return a + b + c; };

        test('should return function with same usage', function(){
            var addEx = util.currilize(add);

            assert.equal(16, addEx(1, 5, 10));
        });

        test('should return function with same usage which can preserve args', function(){
            var addEx = util.currilize(add),
                addBy1 = addEx(1),
                addBy6 = addEx(1, 5);

            assert.equal(16, addBy1(5, 10));
            assert.equal(16, addBy6(10));
        });

        test('the ability to preserve args should be preserved', function(){
            var addEx = util.currilize(add);

            assert.equal(16, addEx(1)(5)(10));
        });

        test('currilized again should be ok', function(){
            var addEx = util.currilize(add),
                addExEx = util.currilize(addEx);

            assert.equal(16, addExEx(1, 5, 10));
            assert.equal(16, addExEx(1)(5, 10));
            assert.equal(16, addExEx(1)(5)(10));
            assert.equal(16, util.currilize(addExEx(1))(5, 10));
            assert.equal(16, util.currilize(addExEx(1))(5)(10));
        });

        test('expect-num can be passed', function(){
            var add = function(){
                var sum = 0;
                for(var i = 0; i < arguments.length; i++) sum += arguments[i];
                return sum;
            },
                addEx = util.currilize(add, 3);

            assert.equal(16, addEx(1)(5)(10));
        });

    });

    suite('λ', function(){

        test('should return function with described usage (simple calculate)', function(){
            var add = util.λ('a, b -> a + b');

            assert.equal(3, add(1, 2));
        });

        test('should work well with more args', function(){
            var addMore = util.λ('a, b, c, d -> a + b + c + d');

            assert.equal(10, addMore(1, 2, 3, 4));
        });

        test('should return function with described usage (call method)', function(){
            var trim = util.λ('s -> s.trim()');

            assert.equal('hello', trim('  hello '));
        });

        test('should work well with given mark', function(){
            var add = util.λ('a, b => a + b', '=>');

            assert.equal(3, add(1, 2));
        });

    });

    suite('toLen', function(){

        test('should return string with given length', function(){
            var result = util.toLen('1234', 2);

            assert.equal(2, result.length);
        });

        test('should use 0 to fill blank', function(){
            var result = util.toLen('12', 4);

            assert.equal('0012', result);
        });

        test('should work well with number given', function(){
            assert.equal(2, util.toLen(1234, 2).length);

            assert.equal('00', util.toLen(0, 2));
            assert.equal('01', util.toLen(1, 2));
            assert.equal('0012', util.toLen(12, 4));
        });

    });
});

