import transformCrs from './transform-crs.js';

import { featureCollection } from '../../../test/fixtures/geojson';

import { osgbFeatureCollection } from '../../../test/fixtures/geojson-with-crs.js';

it('should return the passed object if no CRS', () => {
  const data = transformCrs(featureCollection);
  expect(data).toBe(featureCollection);
});

it('should convert the file if a CRS is set', () => {
  const data = transformCrs(osgbFeatureCollection);
  expect(data).not.toHaveProperty('crs');
  expect(data.features[0].geometry.coordinates[0]).toBeCloseTo(-2.780095);
  expect(data.features[0].geometry.coordinates[1]).toBeCloseTo(54.842304);
});