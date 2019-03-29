import gql from 'graphql-tag';
import { CityCoordFragment } from './cityCoordFragment';

export const ForecastCityFragment = gql`
  fragment ForecastCity on ForecastCity {
    country
    id
    name
		coord @type(name: "CityCoord") {
			...CityCoord
		}
  }
	${CityCoordFragment}
`;