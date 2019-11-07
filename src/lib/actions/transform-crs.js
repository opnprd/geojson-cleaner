import getConversion from '../crs/convert.js';

export default function testForCrs(data) {
  const { crs } = data;

  if (crs) {
    const { properties: { name } } = crs;
    const converter = getConversion(name);

    const convertCoordinates = (coordinate) => {
      if (!Array.isArray(coordinate)) {
        throw new Error('Not an array');
      }
      if (Array.isArray(coordinate[0])) {
        return coordinate.map(convertCoordinates);
      } 
      return converter(coordinate);
    };
  
    const convert = (data) => {
      const { features, geometry, coordinates } = data;
      if (features) data.features = features.map(convert);
      if (geometry) data.geometry = convert(geometry);
      if (coordinates) data.coordinates = convertCoordinates(coordinates);
      return data;
    };

    const convertedData = convert(data);
    delete convertedData.crs;
    return convertedData;
  } else {
    return data;
  }
}