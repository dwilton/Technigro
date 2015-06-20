'use strict';

// Provide some feedback in the console
console.log('%cRunning in DEV mode', 'color: blue;');

// Extend the existing RequireJS config
require.config({

	paths: {

		// Settings
		'api': 'settings/apiDev',
	}

});