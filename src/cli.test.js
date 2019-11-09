import { processGeoJSON } from './cli.js';
import path from 'path';

it('should transform an input file', async () => {
  const filename = path.resolve(__dirname, '../test/fixtures/test.geojson');
  const results = await processGeoJSON(filename);
  expect(results).toMatch(/\[-2.78009,54.8423\]/);
});

it('handle errors', async () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const mockError = jest.spyOn(console, 'error').mockImplementation(() => {});

  const filename = path.resolve(__dirname, 'NOT_A_FILE');
  await processGeoJSON(filename);
  expect(mockError).toHaveBeenCalled();
  expect(mockExit).toHaveBeenCalledWith(1);
});
