if (typeof global.crypto !== 'object') {
	global.crypto = crypto;
}

if (typeof global.crypto.getRandomValues !== 'function') {
	global.crypto.getRandomValues = getRandomValues;
}

/**
 * @param array
 */
function getRandomValues(array) {
	return crypto.webcrypto.getRandomValues(array);
}