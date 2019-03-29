import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { ResultsList } from '../../../shared/components/ResultsList';
import { ForecastResultsItem } from './ForecastResultsItem';

export const ForecastResults = ({ loading, forecastList, cityLabel }) => (
	<ResultsList
		title={cityLabel && `5 Day Forecast for ${cityLabel}`}
		loading={loading}
		dataSource={forecastList}
		renderItem={item => (
			<List.Item>
				<ForecastResultsItem cityLabel={cityLabel} weatherItem={item}/>
			</List.Item>
		)}
	/>
);

ForecastResults.propTypes = {
	loading: PropTypes.bool.isRequired,
	forecastList: PropTypes.array.isRequired,
	cityLabel: PropTypes.string,
};