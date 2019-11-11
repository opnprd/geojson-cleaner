#!/usr/bin/env node

const { handleErrors, loadFile } = require('../dist/cli');
const { reducePrecision, transformCrs } = require('../dist/lib');

const [ , , inputFile ] = process.argv;

loadFile(inputFile)
  .then(JSON.parse)
  .then(transformCrs)
  .then(reducePrecision)
  .then(JSON.stringify)
  .then(console.log)
  .catch(handleErrors);
