define([
	'jquery',
	'mocks/recoverLogin'
], function ($) {

	'use strict';

	return function () {

		var recover = function (data, callback) {
			$.getJSON('/api/recover-password/', data)
				.done(function (data) {
					callback(data.result);
				});
		};

		return {
			recover: recover
		};

	};

});