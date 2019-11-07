const osgbPoint = {
  type: 'Point',
  coordinates: [350000, 550000],
};

const osgbPolygon = {
  type: 'Polygon',
  coordinates: [
    [360000, 550000],
    [360000, 550000],
    [360000, 560000],
    [360000, 550000],
  ],
};

export const osgbFeatureCollection = {
  type: 'FeatureCollection',
  crs: {
    type: 'name',
    properties: {
      name: 'EPSG:27700',
    },
  },
  features: [
    {
      type: 'Feature',
      geometry: osgbPoint,
      properties: {},
    },
    {
      type: 'Feature',
      geometry: osgbPolygon,
      properties: {},
    },
  ],
};
