export const point = {
  type: 'Point',
  coordinates: [1.9876543210, 1.9876543210],
};

export const polygon = {
  type: 'Polygon',
  coordinates: [
    [
      [1.9876543210, 1.9876543210], [101.9876543210, 1.9876543210], [101.9876543210, 101.9876543210],
      [1.9876543210, 101.9876543210], [1.9876543210, 1.9876543210],
    ],
  ],
};

export const featureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: point,
      properties: {},
    },
  ],
};
