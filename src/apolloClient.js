import { ApolloClient } from 'apollo-client';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import * as apiConstant from './shared/constants/api';

const dataIdFromObject = object => {
	const typename = object.__typename;
	switch (typename) {
		case 'Forecast': return `${typename}:${object.city.id}`;
		default: return defaultDataIdFromObject(object);
	}
};

const cache = new InMemoryCache({ dataIdFromObject });

const link = new RestLink({
	uri: apiConstant.citiesBasePath,
	endpoints: {
		cities: apiConstant.citiesBasePath,
		weather: `${apiConstant.weatherBasePath}${apiConstant.weatherDataPath}`
	}
});

export const apolloClient = new ApolloClient({
	link,
	cache,
	connectToDevTools: true
});