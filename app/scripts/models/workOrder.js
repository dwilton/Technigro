define(['jquery', 'mocks/workOrder'], function ($) {

	'use strict';

	return function () {

		var getRefData = function (callback) {
			$.getJSON('/api/workOrderData/')
				.done(function (data) {
					callback(data.result);
				});
		};

		var getWorkOrder = function (data, callback) {
			$.getJSON('/api/workOrder/' + data.id)
				.done(function (data) {
					callback(data.result);
				});
		};

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