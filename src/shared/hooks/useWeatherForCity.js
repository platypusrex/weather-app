import { useQuery } from 'react-apollo-hooks';
import { useMemo, useContext } from 'react';
import { cityWeatherQuery } from '../../api/weather/cityWeatherQuery';
import { CityWeatherStoreContext } from '../stores/cityWeatherStore';
import { apiKey, tempUnits } from '../constants/api';

export function useWeatherForCity (currentCity) {
	const { handleAddWeatherData } = useContext(CityWeatherStoreContext);
	const coords = currentCity && JSON.parse(currentCity.key);

	const { data } = useQuery(cityWeatherQuery, {
		skip: !coords,
		variables: {
			input: {
				...coords,
				units: tempUnits,
				APPID: apiKey
			}
		},
	});

	useMemo(() => {
		let weather =
			data &&
			data.getWeatherForCity;

		if (weather) {
			weather = { ...weather, cityLabel: currentCity.label };
			handleAddWeatherData(weather);
		}
	}, [data])
}