import { readFile } from 'fs';
import { promisify } from 'util';

import reducePrecision from './lib/actions/reduce-precision.js';
import transformCrs from './lib/actions/transform-crs.js';

const [ , , inputFile, ...rest ] = process.argv;

promisify(readFile)(inputFile)
  .then(JSON.parse)
  .then(transformCrs)
  .then(reducePrecision)
  .then(JSON.stringify)
  .then(console.log)
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

