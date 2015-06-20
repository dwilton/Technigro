'use strict';

// Provide some feedback in the console
console.log('%cRunning in STANDALONE mode', 'color: blue;');

// Extend the existing RequireJS config
require.config({

	paths: {
		'mockjax': '../vendor/jquery-mockjax/jquery.mockjax',
		'monkeyPatch': 'lib/monkeyPatch'
	},

	shim: {
		'mockjax': ['jquery']
	}

});

// Monkey patch some modules
require(['monkeyPatch'], function (patch) {

	patch({
		// Patch these models with mocks
		'models/documentRepo': 'mocks/documentRepo',
		'models/login': 'mocks/login',
		'models/recoverLogin': 'mocks/recoverLogin',
		'models/workOrder': 'mocks/workOrder',
		'models/workOrders': 'mocks/workOrders'
	});

});