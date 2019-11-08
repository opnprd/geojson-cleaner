# geojson-cleaner

This small utility cleans geojson format files by applying the following actions:

- Convert non-WGS84 CRS into WGS84 ([EPSG:4326](https://epsg.io/4326)).
  At present, this is only implemented for OSGB 1937 ([EPSG:27700](https://epsg.io/27700)).
- Shorten coordinates to 5 decimal places, which
  provides accuracy of [around 1.1m at the equator](https://www.wolframalpha.com/input/?i=1e-5+degree)

To install globally, run

```
npm install --global @opnprd/geojson-cleaner
```

## CLI

The CLI takes one argument: the name of the file to process.

```
geojson-cleaner original-file.geojson
```

The cleaned GeoJSON is piped to `stdout`, and can be redirected to a file
or further processing as appropriate.

## API Use

_TODO_  