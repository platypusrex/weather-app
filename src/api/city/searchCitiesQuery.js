import gql from 'graphql-tag';
import { CityFragment } from '../fragments/cityFragment';

export const citiesQuery = gql`
  query GetCities ($input: GetCitiesInput!) {
    getCities (input: $input) @rest(type: "City", path: "/cities?{args.input}", endpoint: "cities") {
      cities: data @type(name: "CITY"){
				...City
			}
    }
  }
	${CityFragment}
`;
