define(['knockout', 'pubsub', 'models/user', 'models/workOrder'], function (ko, p, User, WorkOrder) {

	'use strict';

	return function () {

		var _user = new User();
		var _workOrder = new WorkOrder();

		var isAdmin = ko.observable(false);
		var isLoading = ko.observable(true);
		var menu = ko.observableArray();
		var workOrder = ko.observable({});
		var refData = ko.observable({});
		var altType = ko.observable(false);

		var init = function () {
			p.subscribe('workOrder.create', create);
			p.subscribe('workOrder.edit', edit);
			return this;
		};

		var create = function (typeid) {
			console.log(typeid);
			isLoading(true);
			_workOrder.getRefData(function (data) {
				refData(ko.mapping.fromJS(data));
				_workOrder.createWorkOrder({ typeid: typeid }, workOrderResult);
			});
		};

		var edit = function (id) {
			isLoading(true);
			_workOrder.getRefData(function (data) {
				refData(ko.mapping.fromJS(data));
				_workOrder.getWorkOrder({ id: id }, workOrderResult);
			});
		};

		var workOrderResult = function (data) {

			altType(data.typeId === 2 ? true : false);

			_user.getUser(function (user) {
				isAdmin(user.isAdmin);
			});

			workOrder(ko.mapping.fromJS(data, mapping));

			p.publish('main.title', workOrder().details.clientName() + ' - ' + workOrder().details.jobName());

			isLoading(false);
		};


		/* Mapping */

		var mapping = {
			technicians: {
				create: function (options) {
					return new Addable({ id: options.data.id, name: options.data.name }, refData().technicians());
				}
			},
			jobInstructions: {
				create: function (options) {
					return new Addable({ id: options.data.id, name: options.data.name, price: options.data.price }, refData().jobInstructions());
				}
			},
			equipment: {
				create: function (options) {
					return new Addable({ id: options.data.id, name: options.data.name }, refData().equipment());
				}
			},
			products: {
				create: function (options) {
					return new Addable({ id: options.data.id, name: options.data.name, actual: options.data.actual, water: options.data.water, area: options.data.area, total: options.data.total }, refData().products());
				}
			}
		};


		/* Addable */

		var Addable = function (observers, data) {

			var addable = {};

			for (var prop in observers) {
				addable[prop] = ko.observable(observers[prop]);
			}

			addable.id.subscribe( function () {

				var values = ko.utils.arrayFirst(data, function (item) {
					return addable.id() === item.id();
				});

				if (values !== null) {
					for (var prop in values) {
						addable[prop](values[prop]());
					}
				}

			});

			return addable;

		};


		/* Methods */

		var formatCurrency = function (value) {
			return '$' + value.toFixed(2);
		};

		var formatBase64 = function (value) {
			return 'data:image/jpeg;base64,' + value;
		};

		var formatCount = function (value) {
			return value + 1;
		};

		var addDocument = function () {
			workOrder().documents.push({ id: 0, name: '' });
		};

		var removeDocument = function (item) {
			workOrder().documents.remove(item);
		};

		var addTechnician = function () {
			workOrder().technicians.push(new Addable({ id: 0, name: '' }, refData().technicians()));
		};

		var removeTechnician = function (item) {
			workOrder().technicians.remove(item);
		};

		var addJobInstruction = function () {
			workOrder().jobInstructions.push(new Addable({ id: 0, name: '', price: 0 }, refData().jobInstructions()));
		};

		var removeJobInstruction = function (item) {
			workOrder().jobInstructions.remove(item);
		};

		var addEquipment = function () {
			workOrder().equipment.push(new Addable({ id: 0, name: '' }, refData().equipment()));
		};

		var removeEquipment = function (item) {
			workOrder().equipment.remove(item);
		};

		var addProduct = function () {
			workOrder().products.push(new Addable({ id: 0, name: '', actual: 0, water: 0, area: 0, total: 0 }, refData().products()));
		};

		var removeProduct = function (item) {
			workOrder().products.remove(item);
		};

		var addDailyReportCompleteWork = function () {
			workOrder().dailyReportCompleteWork.push({ id: 0, stateId: 0, area: 0, hours: 0 });
		};

		var removeDailyReportCompleteWork = function (item) {
			workOrder().dailyReportCompleteWork.remove(item);
		};

		var addDailyReportCompletePiplineWork = function () {
			workOrder().dailyReportCompletePiplineWork.push({ id: 0, parcel: 0, fromKPI: 0, toKPI: 0, dailyQty: 0 });
		};

		var removeDailyReportCompletePiplineWork = function (item) {
			workOrder().dailyReportCompletePiplineWork.remove(item);
		};

		var addDailyReportPersonal = function () {
			workOrder().dailyReportPersonal.push({ id: 0, name: '', hoursWorked: 0, hoursStandby: 0 });
		};

		var removeDailyReportPersonal  = function (item) {
			workOrder().dailyReportPersonal.remove(item);
		};

		var addDailyReportEquipment = function () {
			workOrder().dailyReportEquipment.push({ id: 0, name: '', hoursWorked: 0, hoursStandby: 0 });
		};

		var removeDailyReportEquipment  = function (item) {
			workOrder().dailyReportEquipment.remove(item);
		};

		var scheduleToggleEdit = function (item) {
			item.edit(item.edit() ? false : true);
		};

		var scheduleToggleDone = function (item) {
			item.done(item.done() ? false : true);
			item.edit(false);
		};

		var addImage = function () {

			if (navigator.camera) {

				var options = {
					quality: 50,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				};

				navigator.camera.getPicture(function (imageData) {
					workOrder().images.push({ src: imageData });
				},
				function () {
					alert('Camera Failed');
				},
				options);

			} else {
				alert('No camera available on this device');
			}

		};

		var save = function () {
			console.log(JSON.parse(ko.toJSON(workOrder())));
			p.publish('route', '#workorders');
		};

		var ViewModel = {
			init: init,
			isAdmin: isAdmin,
			isLoading: isLoading,
			refData: refData,
			workOrder: workOrder,
			altType: altType,
			formatCurrency: formatCurrency,
			formatBase64: formatBase64,
			formatCount: formatCount,
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
			addDailyReportCompleteWork: addDailyReportCompleteWork,
			removeDailyReportCompleteWork: removeDailyReportCompleteWork,
			addDailyReportCompletePiplineWork: addDailyReportCompletePiplineWork,
			removeDailyReportCompletePiplineWork: removeDailyReportCompletePiplineWork,
			addDailyReportPersonal: addDailyReportPersonal,
			removeDailyReportPersonal: removeDailyReportPersonal,
			addDailyReportEquipment: addDailyReportEquipment,
			removeDailyReportEquipment: removeDailyReportEquipment,
			scheduleToggleEdit: scheduleToggleEdit,
			scheduleToggleDone: scheduleToggleDone,
			addImage: addImage,
			save: save
		};

		return ViewModel.init();

	};

});