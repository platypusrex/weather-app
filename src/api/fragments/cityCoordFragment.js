import gql from 'graphql-tag';

export const CityCoordFragment = gql`
  fragment CityCoord on CityCoord {
    lat
    lon
  }
`;