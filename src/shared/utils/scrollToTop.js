export function scrollToTop () {
	if (!window.pageYOffset) {
		return;
	}

	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}