define(['jquery'], function ($) {

	'use strict';

	/**
	 * Work Orders Model
	 * @return {Object} Model
	 */
	return function () {

		/**
		 * Get Reference Data
		 * @param  {Function} callback
		 */
		var getRefData = function (callback) {

			// Create empty 'results' object
			var result = {};

			// Get Status Types and append to the 'results' object
			var statuses = $.getJSON('/api/statuses/')
				.done(function (data) {
					result.statuses = data.result;
				});

			// Get Technicians and append to the 'results' object
			var technicians = $.getJSON('/api/technicians/')
				.done(function (data) {
					result.technicians = data.result;
				});

			// Execute callback when deferred objects are both returned
			$.when(statuses, technicians).done(function () {
				callback(result);
			});

		};

		/**
		 * Get Work Orders
		 * @param  {Object}   data
		 * @param  {Function} callback
		 */
		var getWorkOrders = function (data, callback) {
			$.getJSON('/api/workOrders/', data)
				.done(function (data) {
					callback(data.result);
				});
		};

		return {
			getRefData: getRefData,
			getWorkOrders: getWorkOrders
		};

	};

});