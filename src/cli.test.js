import { loadFile, handleErrors } from './cli.js';
import path from 'path';

it('should load a file', async () => {
  const filename = path.resolve(__dirname, '../test/fixtures/test.geojson');
  const results = await loadFile(filename);
  expect(results).toMatch(/"type": "Point"/m);
  expect(results).toMatch(/"coordinates": \[350000, 550000\]/m);
});

it('should throw errors for unknown files', async () => {
  const filename = path.resolve(__dirname, 'NOT_A_FILE');
  expect(loadFile(filename)).rejects.toThrow();
});

it('handle errors', async () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const mockError = jest.spyOn(console, 'error').mockImplementation(() => {});

  await handleErrors(new Error('TEST ERROR'));
  expect(mockError).toHaveBeenCalledWith('TEST ERROR');
  expect(mockExit).toHaveBeenCalledWith(1);
});
