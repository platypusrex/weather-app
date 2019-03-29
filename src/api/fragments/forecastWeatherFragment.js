import gql from 'graphql-tag';
import { CityCoordFragment } from './cityCoordFragment';
import { WeatherDescriptionFragment } from './weatherDescriptionFragment';
import { WeatherTempFragment } from './weatherTempFragment';

export const ForecastWeatherFragment = gql`
  fragment ForecastWeather on ForecastWeather {
    date: dt_txt
		id: dt
    weather @type(name: "WeatherDescription"){
      ...WeatherDescription
    }
    main @type(name: "WeatherTemp"){
      ...WeatherTemp
    }
  }
  ${CityCoordFragment}
  ${WeatherDescriptionFragment}
  ${WeatherTempFragment}
`;