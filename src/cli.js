import { readFile } from 'fs';
import { promisify } from 'util';

import reducePrecision from './lib/actions/reduce-precision.js';
import transformCrs from './lib/actions/transform-crs.js';

export async function processGeoJSON(inputFile) {
  const result = promisify(readFile)(inputFile)
    .then(JSON.parse)
    .then(transformCrs)
    .then(reducePrecision)
    .then(JSON.stringify)
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
  return result;
}

