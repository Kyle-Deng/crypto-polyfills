const isBrowser = typeof window !== 'undefined';
const isNode = typeof process === 'object';
let crypto;
if (isBrowser) {
	// Browser function here
} else if (isNode){
	try {
		const path = 'crypto';
		crypto = require(`${path}`);
	} catch (err) {
		console.log('crypto support is disabled!');
	}

	/**
	 * @param array
	 * @return getRandomValues method from crypto.webcrypto
	 */
	function getRandomValues(array) {
		return crypto.webcrypto.getRandomValues(array);
	}

	if (typeof global.crypto !== 'object') {
		global.crypto = crypto;
	}

	if (typeof global.crypto.getRandomValues !== 'function') {
		global.crypto.getRandomValues = getRandomValues;
	}
} else {
	// New javascript environment to be supported.
}