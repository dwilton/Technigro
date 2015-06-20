define(['jquery'], function ($) {

	'use strict';

	/**
	 * Work Order Model
	 * @return {Object} Model
	 */
	return function () {

		/**
		 * Get Reference Data
		 * @param  {Function} callback
		 */
		var getRefData = function (callback) {
			$.getJSON('/api/workOrderData/')
				.done(function (data) {
					callback(data.result);
				});
		};

		/**
		 * Get Work Order
		 * @param  {Object}   data
		 * @param  {Function} callback
		 */
		var getWorkOrder = function (data, callback) {
			$.getJSON('/api/workOrder/' + data.id)
				.done(function (data) {
					callback(data.result);
				});
		};

		/**
		 * Create Work Order
		 * @param  {Object}   data
		 * @param  {Function} callback
		 */
		var createWorkOrder = function (data, callback) {
			$.getJSON('/api/workOrder/', data)
				.done(function (data) {
					callback(data.result);
				});
		};

		return {
			createWorkOrder: createWorkOrder,
			getRefData: getRefData,
			getWorkOrder: getWorkOrder
		};

	};

});