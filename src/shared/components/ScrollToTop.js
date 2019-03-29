import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';

const ScrollToTopComponent = ({ location, children }) => {
	useEffect(() => scrollToTop, [location.pathname]);

	return children;
};

export const ScrollToTop = withRouter(ScrollToTopComponent);