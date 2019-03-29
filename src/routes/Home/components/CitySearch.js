import React, { useContext, useState } from 'react';
import { Select, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { useFetchCities } from '../../../shared/hooks/useCitySearch';
import { CityWeatherStoreContext } from '../../../shared/stores/cityWeatherStore';
import { useWeatherForCity } from '../../../shared/hooks/useWeatherForCity';

export const CitySearch = observer(() => {
	const [ currentCity, setCurrentCity] = useState('');
	const { selectedCities, handleCityChange, handleRemoveWeatherData } = useContext(CityWeatherStoreContext);
	const { cities, loading, handleFetchCities } = useFetchCities();
	useWeatherForCity(currentCity);

	return (
		<React.Fragment>
			<Select
				size="large"
				mode="multiple"
				labelInValue={true}
				value={selectedCities}
				placeholder="Search cities here..."
				notFoundContent={loading ? <Spin size="small" /> : null}
				filterOption={false}
				onSearch={handleFetchCities}
				onChange={handleCityChange}
				onSelect={val => setCurrentCity(val)}
				onDeselect={val => handleRemoveWeatherData(val)}
				style={{ width: '100%', maxWidth: 500, marginBottom: 50 }}
			>
				{cities.map(city => (
					<Select.Option key={city.value}>
						{city.text}
					</Select.Option>
				))}
			</Select>
		</React.Fragment>
	);
});