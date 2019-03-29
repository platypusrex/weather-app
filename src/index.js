import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { apolloClient } from './apolloClient';
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import 'typeface-lato';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<ApolloHooksProvider client={apolloClient}>
		<Router>
			<App/>
		</Router>
	</ApolloHooksProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
