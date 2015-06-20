'use strict';

// Provide some feedback in the console
console.log('%cRunning in DEV mode', 'color: blue;');

// Extend the existing application config
require.config({

	paths: {
		// Todo: Add a module containing the dev API config
	}

});