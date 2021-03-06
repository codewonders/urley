import isBrowser from './isBrowser';
import getPathname from './getPathName';
import getBaseUrl from './getBaseUrl';

/**
 * pathnameToObject definition
 * returns the current URL
 * sets default parameter as the window current location
 * @param {(String | null)} url
 * @returns {Object}
 */

const pathnameToObject = (url = isBrowser() && window.location.href) => {
	// set the new URL
	let newUrl;
	// check if the current runtime environment supports URL https://developer.mozilla.org/en-US/docs/Web/API/URL
	if (typeof URL === 'undefined') {
		newUrl = new URL(url).pathname.slice(1);
	} else {
		// if the current runtime environment doesnt support URL we then split and get the pathname values
		newUrl = getPathname(getBaseUrl(url)).slice(1);
	}
	return newUrl.split('/').reduce((acc, a, i) => ({ ...acc, [i]: a }), {});
};

export default pathnameToObject;
