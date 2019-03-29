import React from 'react';
import { useForecastForCity } from '../../shared/hooks/useForecastForCity';
import { ForecastResults } from './components/ForecastResults';
import '../../styles/Shared.css';

export const Forecast = (props) => {
	const { cityLabel, forecastList, loading } = useForecastForCity(props);

	return (
		<div className="view-wrapper">
			<ForecastResults
				loading={loading}
				forecastList={forecastList}
				cityLabel={cityLabel}
			/>
		</div>
	);
};