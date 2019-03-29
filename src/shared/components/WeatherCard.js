import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Avatar, Card } from 'antd';
import { useWeatherData } from '../hooks/useWeatherData';
import { weatherIconPath } from '../constants/api';
import '../../styles/WeatherCard.css';

export const WeatherCard = ({ weatherItem, cityLabel, onClick }) => {
	const { cityTemps, cityWeather, currentDateTime } = useWeatherData(weatherItem);
	const actions = [
		<span>H {cityTemps.tempMax}&deg;</span>,
		<span>L {cityTemps.tempMin}&deg;</span>
	];

	return (
		<Card
			actions={actions}
			hoverable={true}
			onClick={onClick}
		>
			<Card.Meta
				avatar={<Avatar size="large" src={`${weatherIconPath}${cityWeather.icon}`}/>}
				title={cityLabel}
				description={dayjs(currentDateTime).format('ddd MMM D, YYYY @h:mm a')}
			/>

			<div className="search-results-item__description">
				<h1 className="search-results-item__title">
					{cityTemps.temp}
					<span>&deg;</span>
				</h1>

				<span className="search-results-item__message">
					{cityWeather.description}
				</span>
			</div>
		</Card>
	);
};

WeatherCard.propTypes = {
	cityLabel: PropTypes.string.isRequired,
	weatherItem: PropTypes.object.isRequired,
	onClick: PropTypes.func
};