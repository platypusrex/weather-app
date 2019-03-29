import { useMemo, useState } from 'react';

const initialState = {
	cityTemps: {},
	currentDateTime: '',
	cityWeather: {}
};

export function useWeatherData (weatherItem) {
	const [ state, setState ] = useState(initialState);

	useMemo(() => {
		const cityTemps = weatherItem.main;
		const currentDateTime = weatherItem.date;
		const cityWeather =
			weatherItem.weather &&
			weatherItem.weather[0];

		setState(ss => ({
			...ss,
			cityTemps: { ...ss.cityTemps, ...cityTemps },
			cityWeather: { ...ss.cityWeather, ...cityWeather },
			currentDateTime: currentDateTime,
		}));
	}, [weatherItem]);

	return { ...state };
}