name = 'cloverstd'
drunk = true
greet = require 'greet'

describe "greet", ->
    it 'should greet a person by name', ->
        expect("hello, " + name).to.eql greet name
    it 'should greet a person flirtatiously if drunk', ->
        expect("hello " + name + ", you look sexy today").to.eql greet name, drunk
