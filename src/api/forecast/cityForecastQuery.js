import gql from 'graphql-tag';
import { ForecastFragment } from '../fragments/forecastFragment';

export const cityForecastQuery = gql`
  query GetForecastForCity ($input: CityForecastFragment!) {
    getForecastForCity (input: $input) @rest(type: "Forecast", path: "/forecast?{args.input}", endpoint: "weather") {
      ...Forecast
    }
  }
  ${ForecastFragment}
`;
