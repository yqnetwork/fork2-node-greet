//var expect = require("chai").expect

var name = 'cloverstd'
var drunk = true

describe('greet', function() {
    it ('should greet a person by name', function() {
        expect(require('greet')(name)).to.eql("hello, " + name);
    });
    it ('should greet a person flirtatiously if drunk', function() {
        expect(require('greet')(name, drunk)).to.eql("hello " + 
                name + ", you look sexy today");
    });
});
