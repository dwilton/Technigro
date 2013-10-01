define(['pubsub', 'ko'], function (p, ko) {

	'use strict';

	return function () {

		var isLoading = ko.observable(false);
		var menu = ko.observableArray();
		var type = ko.observable();

		var workOrder = {

			type: ko.observable(),
			archived: ko.observable(),

			treatmentDate: ko.observable(),
			client: ko.observable(),
			clientId: ko.observable(),
			job: ko.observable(),
			jobId: ko.observable(),
			status: ko.observable(),
			statusId: ko.observable(),

			/* Details */
			address: ko.observable(),
			contactName: ko.observable(),
			phoneOne: ko.observable(),
			phoneTwo: ko.observable(),
			maps: ko.observableArray(),
			jobNumber: ko.observable(),
			orderNumber: ko.observable(),
			date: ko.observable(),
			ubdEdition: ko.observable(),
			map: ko.observable(),
			ref: ko.observable(),

			/* Technicians */
			technicians: ko.observableArray(),

			/* Labour */
			numberOfAddressDays: ko.observable(),
			numberOfStaff: ko.observable(),
			area: ko.observable(),

			/* Equipment */
			equipment: ko.observableArray(),

			/* Products */
			products: ko.observableArray()

		};

		var refData = {

			/* Common */
			menuOptions: ko.observableArray(),
			equipment: ko.observableArray(),
			technicians: ko.observableArray(),
			jobInstruction: ko.observableArray(),

			/* Details */
			documents: ko.observableArray(),
			clients: ko.observableArray(),
			status: ko.observableArray(),
			ubdEditions: ko.observableArray(),
			maps: ko.observableArray(),

			/* Labour */
			numberOfAddressDays: ko.observable(),
			numberOfStaff: ko.observable(),

			/* Products */
			products: ko.observableArray(),

			/* Invoicing */
			invoicedBy: ko.observableArray(),
			quote: ko.observableArray(),

			/* Daily Report */
			jobInstructions: ko.observableArray(),
			conditions: ko.observableArray(),
			growthStages: ko.observableArray(),
			personal: ko.observableArray()

		};

		var init = function () {
			p.subscribe('workOrder.create', create);
			p.subscribe('workOrder.edit', edit);
			return this;
		};

		var refresh = function () {
			p.publish('workOrders.menu', false);
		};

		var create = function (workOrderType) {
			type(workOrderType);
			console.log('create - ' + workOrderType);
		};

		var edit = function (id) {
			p.publish('workOrder.getWorkOrderById', id);
			console.log('edit - ' + id);
		};

		var getWorkOrder = function (id) {

		};

		var getWorkOrderResult = function (data) {

		};

		var save = function () {

		};

		var ViewModel = {
			init: init,
			isLoading: isLoading,
			refresh: refresh,
			type: type,
			refData: refData,
			workOrder: workOrder,
			save: save
		};

		return ViewModel.init();

	};

});