define(['pubsub', 'jquery', 'mocks/workOrders'], function (p, $) {

	'use strict';

	var init = function () {
		p.subscribe('workOrders.getFilterOptions', getFilterOptions);
		p.subscribe('workOrders.getWorkOrders', getWorkOrders);
		return this;
	};

	var getFilterOptions = function () {

		var result = {};

		var statusTypes = $.getJSON('/api/statusTypes/')
			.done(function (data) {
				result.statusTypes = data.result;
			});

		var technicians = $.getJSON('/api/technicians/')
			.done(function (data) {
				result.technicians = data.result;
			});

		$.when(statusTypes, technicians).done(function () {
			p.publish('workOrders.getFilterOptions.result', result);
		});

	};

	var getWorkOrders = function (data) {
		$.getJSON('/api/workOrders/', data)
			.done(function (data) {
				p.publish('workOrders.getWorkOrders.result', data.result);
			});
	};

	var Model = {
		init: init
	};

	return Model.init();

});