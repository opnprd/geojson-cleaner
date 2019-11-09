import convert from './convert.js';

it('should convert from OSGB', () => {
  const result = convert('EPSG:27700')([350000,550000]);
  expect(result[0]).toBeCloseTo(-2.780095);
  expect(result[1]).toBeCloseTo(54.842304);
});

it('should throw an error if not known CRS', () => {
  expect(() => convert('DUFF:CRS')).toThrow('Unknown CRS \'DUFF:CRS\'');
});