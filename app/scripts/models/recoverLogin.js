define(['jquery'], function ($) {

	'use strict';

	/**
	 * Recover Login Model
	 * @return {Object} Model
	 */
	return function () {

		/**
		 * Recover Login
		 * @param  {Object}   data
		 * @param  {Function} callback
		 */
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