import proj4 from 'proj4';

import projections from './projections.js';

export default function getConverter(crs) {
  if (!Object.prototype.hasOwnProperty.call(projections, crs)) {
    throw new Error(`Unknown CRS '${crs}'`);
  }
  return (c) => proj4(projections[crs]).inverse(c);
}
