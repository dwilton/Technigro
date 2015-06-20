'use strict';

// Set required dependencies e.g. 'config'
var dependencies = ['config'];

// Append additional dependencies based on the querystring to the 'dependencies' array
switch(location.search.split('mode=')[1]) {

	case 'dev': // ?mode=dev
		dependencies.push('configDev');
		break;

	case 'standalone': // ?mode=standalone
		dependencies.push('configStandalone');
		break;

}

// Require all dependencies and start the app
require(dependencies, function () {

	require([
		'knockout',
		'mapping',
		'router',
		'bindings',
		'app'
	], function (ko, mapping, router, bindings, App) {

			// Add mapping to the knockout object
			ko.mapping = mapping;

			// Apply knockout bindings
			ko.applyBindings(new App().init());

	});

});