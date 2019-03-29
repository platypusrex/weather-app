import { observable, action } from 'mobx';
import { persist, create } from 'mobx-persist';
import { createContext } from 'react';

export class CityWeatherStore {
	@persist('list') @observable selectedCities = [];
	@persist('list') @observable weatherList = [];

	@action handleCityChange = (selectedCities) => {
		this.selectedCities = selectedCities;
	}

	@action handleAddWeatherData = (weatherData) => {
		this.weatherList.push(weatherData);
	}

	@action handleRemoveWeatherData = (val) => {
		this.weatherList = this.weatherList.filter(weather => weather.cityLabel !== val.label);
	}
}

const cityWeatherStore = new CityWeatherStore();
const hydrate = create();
hydrate('cityWeather', cityWeatherStore)
	.then(() => console.log('cityWeather has been hydrated'));

export const CityWeatherStoreContext = createContext(cityWeatherStore);