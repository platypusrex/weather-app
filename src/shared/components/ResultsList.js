import React from 'react';
import PropTypes from 'prop-types';
import { Card, List } from 'antd';
import '../../styles/ResultsList.css';

export const ResultsList = ({ title, ...rest}) => (
	<Card title={title} style={{ width: '100%' }}>
		<List
			itemLayout="vertical"
			size="small"
			bordered={false}
			grid={{ gutter: 16, md: 2, sm: 1 }}
			{...rest}
		/>
	</Card>
);

ResultsList.propTypes = {
	title: PropTypes.string,
	loading: PropTypes.bool,
	dataSource: PropTypes.array,
	renderItem: PropTypes.func
};