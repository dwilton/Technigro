/*
 * Monkey Patch RequireJS modules
 * - API for patching modules using 'map' config in RequireJS
 * - http://requirejs.org/docs/api.html#config-map
 */

define(function() {

	'use strict';

	/**
	 * Monkey Patch
	 * @param  {Object} modules JSON { 'path/module-to-patch': 'path/patch' }
	 */
	return function (modules) {

		var map = {};
		var patches = {};

		for (var name in modules) {

			var moduleToPatch = name;
			var patchModule = modules[name];
			var references = {};

			// Modules to patch
			patches[moduleToPatch] = patchModule;

			// Reference the module to monkey patch it
			references[moduleToPatch] = moduleToPatch;

			// Add references to the map object
			map[patchModule] = references;

		}

		// For all modules loaded, use this map config
		map['*'] = patches;

		// Apply map to require.config
		require.config({
			map: map
		});

		// Provide some feedback in the console
		console.log('%cWe\'ve monkey patched the following modules for you:', 'color: orchid ');
		console.dir(patches);

	};

});