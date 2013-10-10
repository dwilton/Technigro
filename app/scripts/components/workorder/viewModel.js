define(['pubsub', 'ko', 'models/user', 'models/workOrder'], function (p, ko, User, WorkOrder) {

	'use strict';

	return function () {

		var _user = new User();
		var _workOrder = new WorkOrder();

		var isLoading = ko.observable(false);
		var menu = ko.observableArray();

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
			jobInstructions: ko.observableArray(),

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
			products: ko.observableArray(),

			invoicedTypeId: ko.observable(),
			quoteTypeId: ko.observable()

		};

		var refData = {
			clients: ko.observableArray(),
			statuses: ko.observableArray(),
			technicians: ko.observableArray(),
			jobInstructions: ko.observableArray(),
			equipment: ko.observableArray(),
			products: ko.observableArray(),
			invoiceTypes: ko.observableArray(),
			quoteTypes: ko.observableArray(),
			ubdEditions: ko.observableArray(),
			documents: ko.observableArray(),
			timeAllocated: ko.observable(),
			staff: ko.observable(),
			conditions: ko.observableArray(),
			growthStages: ko.observableArray(),
			personal: ko.observableArray()
		};

		var init = function () {
			p.subscribe('workOrder.create', create);
			p.subscribe('workOrder.edit', edit);
			return this;
		};

		var create = function (workOrderType) {
			_workOrder.getRefData({}, getRefDataResult);
		};

		var edit = function (id) {
			_workOrder.getRefData({}, getRefDataResult);
			_workOrder.getWorkOrder({ id: id }, getWorkOrderResult);
		};

		var getRefDataResult = function (data) {
			refData.clients(data.clients);
			refData.statuses(data.statuses);
			refData.technicians(data.technicians);
			refData.jobInstructions(data.jobInstructions);
			refData.equipment(data.equipment);
			refData.products(data.products);
			refData.invoiceTypes(data.invoiceTypes);
			refData.quoteTypes(data.quoteTypes);
		};

		var getWorkOrderResult = function (data) {
		};

		var addTechnician = function () {
			workOrder.technicians.push({ id: 0 });
		};

		var removeTechnician = function (item) {
			workOrder.technicians.remove(item);
		};

		var addJobInstruction = function () {
			workOrder.jobInstructions.push({ id: 0 });
		};

		var removeJobInstruction = function (item) {
			workOrder.jobInstructions.remove(item);
		};

		var addEquipment = function () {
			workOrder.equipment.push({ id: 0 });
		};

		var removeEquipment = function (item) {
			workOrder.equipment.remove(item);
		};

		var addProduct = function () {
			workOrder.products.push({ productId: 0, actual: 0, water: 0, area: 0, total: 0 });
		};

		var removeProduct = function (item) {
			workOrder.products.remove(item);
		};

		var save = function () {
			console.log(ko.toJSON(workOrder));
		};

		var ViewModel = {
			init: init,
			isLoading: isLoading,
			refData: refData,
			workOrder: workOrder,
			addTechnician: addTechnician,
			removeTechnician: removeTechnician,
			addJobInstruction: addJobInstruction,
			removeJobInstruction: removeJobInstruction,
			addEquipment: addEquipment,
			removeEquipment: removeEquipment,
			addProduct: addProduct,
			removeProduct: removeProduct,
			save: save
		};

		return ViewModel.init();

	};

});