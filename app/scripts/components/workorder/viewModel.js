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

		var addTechnician = function () {
			workOrder().technicians.push({ id: 0 });
		};

		var removeTechnician = function (item) {
			workOrder().technicians.remove(item);
		};

		var addDocument = function () {
			workOrder().documents.push({ id: 0 });
		};

		var removeDocument = function (item) {
			workOrder().documents.remove(item);
		};

		var addJobInstruction = function () {
			workOrder().jobInstructions.push({ id: 0 });
		};

		var removeJobInstruction = function (item) {
			workOrder().jobInstructions.remove(item);
		};

		var addEquipment = function () {
			workOrder().equipment.push({ id: 0 });
		};

		var removeEquipment = function (item) {
			workOrder().equipment.remove(item);
		};

		var addProduct = function () {
			workOrder().products.push({ productId: 0, actual: 0, water: 0, area: 0, total: 0 });
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