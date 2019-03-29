import React from 'react';
import PropTypes from 'prop-types';
import { WeatherCard } from '../../../shared/components/WeatherCard';

export const ForecastResultsItem = ({ cityLabel, weatherItem }) =>  (
	<WeatherCard
		cityLabel={cityLabel}
		weatherItem={weatherItem}
	/>
);

ForecastResultsItem.propTypes = {
	cityLabel: PropTypes.string.isRequired,
	weatherItem: PropTypes.object.isRequired,
};