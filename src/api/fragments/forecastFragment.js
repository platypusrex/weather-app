import gql from 'graphql-tag';
import { ForecastCityFragment } from './forecastCityFragment';
import { ForecastWeatherFragment } from './forecastWeatherFragment';

export const ForecastFragment = gql`
  fragment Forecast on Forecast {
		city @type(name: "ForecastCity") {
			...ForecastCity
		}
		list @type(name: "ForecastWeather") {
			...ForecastWeather
		}
	}
	${ForecastCityFragment}
	${ForecastWeatherFragment}
`;