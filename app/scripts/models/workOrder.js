define(['jquery', 'mocks/workOrder'], function ($) {

	'use strict';

	return function () {

		var getRefData = function (data, callback) {

			var result = {};

			var clients = $.getJSON('/api/clients/')
				.done(function (data) {
					result.clients = data.result;
				});

			var statuses = $.getJSON('/api/statuses/')
				.done(function (data) {
					result.statuses = data.result;
				});

			var technicians = $.getJSON('/api/technicians/')
				.done(function (data) {
					result.technicians = data.result;
				});

			var jobInstructions = $.getJSON('/api/jobInstructions/')
				.done(function (data) {
					result.jobInstructions = data.result;
				});

			var equipment = $.getJSON('/api/equipment/')
				.done(function (data) {
					result.equipment = data.result;
				});

			var products = $.getJSON('/api/products/')
				.done(function (data) {
					result.products = data.result;
				});

			var invoiceTypes = $.getJSON('/api/invoiceTypes/')
				.done(function (data) {
					result.invoiceTypes = data.result;
				});

			var quoteTypes = $.getJSON('/api/quoteTypes/')
				.done(function (data) {
					result.quoteTypes = data.result;
				});

			$.when(clients, statuses, technicians, jobInstructions, equipment, products, invoiceTypes, quoteTypes).done(function () {
				callback(result);
			});

		};

		var getWorkOrder = function (data, callback) {
			$.getJSON('/api/getWorkOrder/', data)
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