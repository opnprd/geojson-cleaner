import reducePrecision from './reduce-precision';

import { point, polygon, featureCollection } from '../../test/fixtures/geojson.js';

it('should parse GeoJSON Points', () => {
  const reduced = reducePrecision(point);
  expect(reduced).toHaveProperty(['coordinates', 0], 1.98765);
  expect(reduced).toHaveProperty(['coordinates', 1], 1.98765);
});

it('should parse GeoJSON Polygons', () => {
  const reduced = reducePrecision(polygon);
  expect(reduced).toHaveProperty(['coordinates', 0, 0, 0], 1.98765);
  expect(reduced).toHaveProperty(['coordinates', 0, 0, 1], 1.98765);
  expect(reduced).toHaveProperty(['coordinates', 0, 1, 0], 101.98765);
  expect(reduced).toHaveProperty(['coordinates', 0, 1, 1], 1.98765);
  expect(reduced).toHaveProperty(['coordinates', 0, 2, 0], 101.98765);
  expect(reduced).toHaveProperty(['coordinates', 0, 2, 1], 101.98765);
  expect(reduced).toHaveProperty(['coordinates', 0, 3, 0], 1.98765);
  expect(reduced).toHaveProperty(['coordinates', 0, 3, 1], 101.98765);
  expect(reduced).toHaveProperty(['coordinates', 0, 4, 0], 1.98765);
  expect(reduced).toHaveProperty(['coordinates', 0, 4, 1], 1.98765);
});

it('should parse GeoJSON FeatureCollections', () => {
  const reduced = reducePrecision(featureCollection);
  expect(reduced).toHaveProperty(['features', 0, 'geometry', 'coordinates', 0], 1.98765);
  expect(reduced).toHaveProperty(['features', 0, 'geometry', 'coordinates', 1], 1.98765);
});