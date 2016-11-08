// var assert = require('assert');
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when value is not present', function(){
            // assert.equal(-1, [1,2,3].indexOf(4))
            console.log([1,2,3].indexOf(4))
        })
    })
});

describe("Counter", function() {

    it("should say Hi given a name", function() {
        sayHi("Tom").should.equal("Hi Tom");
    });

    it("should not say Hi if no input", function() {
        sayHi().should.equal("Nobody comes");
    });
});
