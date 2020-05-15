/**
 * isBrowser Definition
 * Determines if the current runtime environment is a browser
 * @returns {Boolean}
 */

const isBrowser = () => {
	if (![typeof window, typeof document].includes('undefined')) {
		return true;
	}
	console.warn(
		'⚠️[Warning]: current runtime environment is not browser please parse URL to this function'
	);
	return false;
};

export default isBrowser;
