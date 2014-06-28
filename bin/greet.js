#! /usr/bin/env node
var parseArgs = require('minimist')(process.argv.slice(2));
greet = require('greet')
console.log(greet(parseArgs._, parseArgs.drunk))
