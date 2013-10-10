define(['jquery', 'mocks/workOrders'], function ($) {

	'use strict';

	return function () {

		var getRefData = function (callback) {

			var result = {};

			var statuses = $.getJSON('/api/statuses/')
				.done(function (data) {
					result.statuses = data.result;
				});

			var technicians = $.getJSON('/api/technicians/')
				.done(function (data) {
					result.technicians = data.result;
				});

			$.when(statuses, technicians).done(function () {
				callback(result);
			});

		};

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

	}

});