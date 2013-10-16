define(['knockout', 'pubsub', 'models/user', 'models/workOrder'], function (ko, p, User, WorkOrder) {

	'use strict';

	return function () {

		var _user = new User();
		var _workOrder = new WorkOrder();

		var isLoading = ko.observable(true);
		var menu = ko.observableArray();
		var workOrder = ko.observable({});
		var refData = ko.observable({});

		var init = function () {
			p.subscribe('workOrder.create', create);
			p.subscribe('workOrder.edit', edit);
			return this;
		};

		var create = function (typeId) {
			isLoading(true);
			_workOrder.getRefData({ typeId: typeId }, getRefDataResult);
		};

		var edit = function (id) {
			isLoading(true);
			_workOrder.getWorkOrder({ id: id }, getWorkOrderResult);
		};

		var getWorkOrderResult = function (data) {
			workOrder(ko.mapping.fromJS(data));
			_workOrder.getRefData({ typeId: data.typeId }, getRefDataResult);
		};

		var getRefDataResult = function (data) {
			isLoading(false);
			refData(ko.mapping.fromJS(data));
			console.log(refData());
		};

		/* Models */

		var Item = function (id, name) {
			return {
				id: ko.observable(id),
				name: ko.observable(name)
			};
		};

		var JobInstruction = function (id, name, price) {
			return {
				id: ko.observable(id),
				name: ko.observable(name),
				price: ko.observable(price)
			};
		};

		var Product = function (id, name, actual, water, area, total) {
			return {
				productId: ko.observable(id),
				name: ko.observable(name),
				actual: ko.observable(actual),
				water: ko.observable(water),
				area: ko.observable(area),
				total: ko.observable(total)
			};
		};

		/* Methods */

		var jobInstruction = function (item) {
			/* return ko.utils.arrayFirst(refData().jobInstructions, function(item) {
				return id === item.id();
			}); */
		};

		var addDocument = function () {
			workOrder().details.documents.push(new Item(0, ''));
		};

		var removeDocument = function (item) {
			workOrder().details.documents.remove(item);
		};

		var addTechnician = function () {
			workOrder().technicians.push(new Item(0, ''));
		};

		var removeTechnician = function (item) {
			workOrder().technicians.remove(item);
		};

		var addJobInstruction = function () {
			workOrder().labour.jobInstructions.push(new JobInstruction(0, '', 0));
		};

		var removeJobInstruction = function (item) {
			workOrder().labour.jobInstructions.remove(item);
		};

		var addEquipment = function () {
			workOrder().equipment.push(new Item(0, ''));
		};

		var removeEquipment = function (item) {
			workOrder().equipment.remove(item);
		};

		var addProduct = function () {
			workOrder().products.push(new Product(0, '', 0, 0, 0, 0));
		};

		var removeProduct = function (item) {
			workOrder().products.remove(item);
		};

		var scheduleToggleEdit = function (item) {
			item.edit(item.edit() ? false : true);
		};

		var scheduleToggleDone = function (item) {
			item.done(item.done() ? false : true);
			item.edit(false);
		};

		var save = function () {
			console.log(ko.toJSON(workOrder()));
		};

		var ViewModel = {
			init: init,
			isLoading: isLoading,
			refData: refData,
			workOrder: workOrder,
			addTechnician: addTechnician,
			removeTechnician: removeTechnician,
			addDocument: addDocument,
			removeDocument: removeDocument,
			addJobInstruction: addJobInstruction,
			removeJobInstruction: removeJobInstruction,
			addEquipment: addEquipment,
			removeEquipment: removeEquipment,
			addProduct: addProduct,
			removeProduct: removeProduct,
			scheduleToggleEdit: scheduleToggleEdit,
			scheduleToggleDone: scheduleToggleDone,
			save: save
		};

		return ViewModel.init();

	};

});