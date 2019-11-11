import { readFile } from 'fs';
import { promisify } from 'util';

export function handleErrors(err) {
  console.error(err.message);
  process.exit(1);
}

export async function loadFile(inputFile) {
  return promisify(readFile)(inputFile, 'utf-8');
}

