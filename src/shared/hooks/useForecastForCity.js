import { useQuery } from 'react-apollo-hooks';
import { useMemo, useState } from 'react';
import { cityForecastQuery } from '../../api/forecast/cityForecastQuery';
import { apiKey, tempUnits } from '../constants/api';

const initialState = {
	cityLabel: '',
	forecastList: [],
};

export function useForecastForCity (props) {
	const { match: { params } } = props;
	const [ state, setState ] = useState(initialState);

	const { data, loading, error } = useQuery(cityForecastQuery, {
		skip: !params.cityId,
		variables: {
			input: {
				id: params.cityId,
				units: tempUnits,
				APPID: apiKey,
			}
		},
	});

	useMemo(() => {
		const forecast =
			data &&
			data.getForecastForCity;

		const cityLabel =
			forecast &&
			forecast.city &&
			forecast.city.name;

		/* eslint-disable */
		const forecastList =
			forecast &&
			forecast.list || [];
		/* eslint:enable */

		setState(ss => ({ ...ss, cityLabel, forecastList }));
	}, [data]);

	return { ...state, loading, error };
}