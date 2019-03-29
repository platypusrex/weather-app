import { useQuery } from 'react-apollo-hooks';
import { useState } from 'react';
import { citiesQuery } from '../../api/city/searchCitiesQuery';

const normalizeCitiesFromQuery = (data) => {
	/* eslint-disable */
	const citiesData =
		data &&
		data.getCities &&
		data.getCities.cities || [];
	/* eslint-disable */

	return citiesData.map(city => ({
		text: `${city.city}, ${city.regionCode} ${city.countryCode}`,
		value: JSON.stringify({
			lon: city.longitude,
			lat: city.latitude
		}),
	}));
};

export function useFetchCities () {
	const [ cityName, setCityName ] = useState('');

	const { data, loading, error } = useQuery(citiesQuery, {
		skip: !cityName,
		variables: {
			input: {
				namePrefix: cityName,
				limit: 5,
				offset: 0,
			}
		},
		fetchPolicy: 'no-cache'
	});

	const cities = normalizeCitiesFromQuery(data);
	const handleFetchCities = (city) => setCityName(city);

	return { cities, loading, error, handleFetchCities };
}