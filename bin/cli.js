#!/usr/bin/env node

const { processGeoJSON } = require('../dist/cli');

const [ , , inputFile ] = process.argv;

processGeoJSON(inputFile).then(console.log);
