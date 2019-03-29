import gql from 'graphql-tag';
import { WeatherFragment } from '../fragments/weatherFragment';

export const cityWeatherQuery = gql`
  query GetWeatherForCity ($input: CityWeatherInput!) {
    getWeatherForCity (input: $input) @rest(type: "Weather", path: "/weather?{args.input}", endpoint: "weather") {
      ...Weather
    }
  }
  ${WeatherFragment}
`;
