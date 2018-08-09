module.exports = {
	setupFiles: [
		'<rootDir>/tests/shim.js',
		'<rootDir>/tests/setup.js'
	],
	testURL: 'http://localhost/',
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/mocks/fileMock.js',
		'\\.(css|less|sass|styl)$': '<rootDir>/tests/mocks/fileMock.js',
		'components/(.*)': '<rootDir>/src/components/$1',
		'enhancers/(.*)': '<rootDir>/src/enhancers/$1',
	}
}