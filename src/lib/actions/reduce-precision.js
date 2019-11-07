const PRECISION = 5;

const roundToPrecision = (value, precision = 3) => {
  const padding = 10**precision;
  return Math.round(value * padding) / padding;
};

const shorten = (input) => {
  if (Array.isArray(input)) return input.map(shorten);
  return roundToPrecision(input, PRECISION);
};

export default function reducePrecision(data) {
  const { features, geometry, coordinates } = data;
  if (features) data.features = features.map(reducePrecision);
  if (geometry) data.geometry = reducePrecision(geometry);
  if (coordinates) data.coordinates = coordinates.map(shorten);
  return data;
}