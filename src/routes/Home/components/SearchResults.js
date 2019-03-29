import React from 'react';
import { List } from 'antd';
import { ResultsList } from '../../../shared/components/ResultsList';
import { SearchResultsItem } from './SearchResultsItem';

export const SearchResults = ({ loading, weatherList }) => (
	<ResultsList
		title="Selected Cities"
		loading={loading}
		dataSource={weatherList.slice()}
		renderItem={item => (
			<List.Item>
				<SearchResultsItem searchItem={item}/>
			</List.Item>
		)}
	/>
);