import React from 'react';
import PropTypes from 'prop-types';
import { generatePath, withRouter } from 'react-router-dom';
import { WeatherCard } from '../../../shared/components/WeatherCard';
import { route } from '../../../shared/constants/routes';

const SearchResultsItemComponent = ({ searchItem, history }) => {
	const handleCardClick = () => {
		const cityId = searchItem.id;
		history.push(generatePath(route.forecast, { cityId }));
	};

	return (
		<WeatherCard
			cityLabel={searchItem.cityLabel}
			weatherItem={searchItem}
			onClick={handleCardClick}
		/>
	);
};

export const SearchResultsItem = withRouter(SearchResultsItemComponent);

SearchResultsItem.propTypes = {
	searchItem: PropTypes.object.isRequired,
};
