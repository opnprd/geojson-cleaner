import { transformCrs, reducePrecision } from './lib.js';

import { osgbFeatureCollection as sample } from '../test/fixtures/geojson-with-crs.js';

function getInput() {
  const { value } = document.getElementById('input');
  return JSON.parse(value);
}

function setInput(data) {
  document.getElementById('input').value = JSON.stringify(data, null, 2);
}

function setResult(data) {
  document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
}

export function cleanTextarea() {
  const input = getInput();
  const actions = [ transformCrs, reducePrecision ];
  const result = actions.reduce((acc, curr) => {
    return curr(acc);
  }, input);
  setResult(result);
}

export function preFill() {
  setInput(sample);
}