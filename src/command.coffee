module.exports = ->
    parseArgs = require 'minimist'
    greet = require 'greet'
    argv = parseArgs(process.argv.slice(2))
    console.log greet argv._, argv.drunk
