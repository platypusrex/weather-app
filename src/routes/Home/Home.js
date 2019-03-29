import React, { useContext } from 'react';
import { CitySearch } from './components/CitySearch';
import { SearchResults } from './components/SearchResults';
import { observer } from 'mobx-react-lite';
import { CityWeatherStoreContext } from '../../shared/stores/cityWeatherStore';
import '../../styles/Shared.css';

export const Home = observer(() => {
	const { weatherList } = useContext(CityWeatherStoreContext);

	return (
		<div className="view-wrapper">
			<h1 className="view-wrapper__title">
				City Weather Search
			</h1>

			<CitySearch/>
			<SearchResults weatherList={weatherList.slice()}/>
		</div>
	)
});