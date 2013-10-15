define(['jquery', 'mocks/workOrder'], function ($) {

	'use strict';

	return function () {

		var getRefData = function (data, callback) {
			$.getJSON('/api/workOrderData/', data)
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

		return {
			getRefData: getRefData,
			getWorkOrder: getWorkOrder
		};

	};

});