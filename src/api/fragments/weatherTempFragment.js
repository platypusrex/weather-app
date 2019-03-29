import gql from 'graphql-tag';

export const WeatherTempFragment = gql`
  fragment WeatherTemp on WeatherTemp {
    temp
    tempMin: temp_min
    tempMax: temp_max
  }
`;