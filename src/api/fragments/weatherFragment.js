import gql from 'graphql-tag';
import { CityCoordFragment } from './cityCoordFragment';
import { WeatherDescriptionFragment } from './weatherDescriptionFragment';
import { WeatherTempFragment } from './weatherTempFragment';

export const WeatherFragment = gql`
	fragment Weather on Weather {
		id
    date: dt
    name
    coord @type(name: "CityCoord"){
      ...CityCoord
    }
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