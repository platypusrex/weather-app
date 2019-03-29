import gql from 'graphql-tag';

export const CityFragment = gql`
	fragment City on CITY {
    id
    wikiDataId
    city
    country
    countryCode
    region
    regionCode
    latitude
    longitude
	}
`;