define([
	'knockout',
	'pubsub',
	'models/user',
	'models/workOrder'
], function (ko, p, UserModel, WorkOrderModel) {

	'use strict';

	/**
	 * Work Order ViewModel
	 * @return {Object} ViewModel
	 */
	return function () {

		// Models
		var userModel = new UserModel();
		var workOrderModel = new WorkOrderModel();

		// Observables
		var isAdmin = ko.observable(false);
		var isLoading = ko.observable(true);
		var menu = ko.observableArray();
		var workOrder = ko.observable({});
		var refData = ko.observable({});
		var altType = ko.observable(false);

		/**
		 * Init ViewModel
		 * @return {Object} Instance
		 */
		var init = function (args) {

			// Subscribers
			p.subscribe('workOrder.create', create);
			p.subscribe('workOrder.edit', edit);

			if (args !== undefined) {
				console.log(args);
			}

			return this;

		};

		/**
		 * Create Work Order
		 * @param  {Number} typeid
		 */
		var create = function (typeid) {

			// Show loading indicator
			isLoading(true);

			// Get reference data
			workOrderModel.getRefData(function (data) {

				// Create reference data observables from mapping
				refData(ko.mapping.fromJS(data));

				// Create new work order
				workOrderModel.createWorkOrder({ typeid: typeid }, workOrderResult);

			});

		};

		/**
		 * Edit Work Order
		 * @param  {Number} id
		 */
		var edit = function (id) {

			// Show loading indicator
			isLoading(true);

			// Get reference data
			workOrderModel.getRefData(function (data) {

				// Create reference data observables from mapping
				refData(ko.mapping.fromJS(data));

				// Get existing work order by id
				workOrderModel.getWorkOrder({ id: id }, workOrderResult);

			});

		};

		/**
		 * Work Order Result
		 * @param  {Object} data
		 */
		var workOrderResult = function (data) {

			// Determine alternative type
			altType(data.typeId === 2 ? true : false);

			// Get user and set admin access
			userModel.getUser(function (user) {
				isAdmin(user.isAdmin);
			});

			// Create work order observables from mapping
			workOrder(ko.mapping.fromJS(data, mapping));

			// Publish title update to the "main" component
			p.publish('main.title', workOrder().details.clientName() + ' - ' + workOrder().details.jobName());

			// Hide loading indicator
			isLoading(false);

		};


		/**
		 * Create observables from mapping object
		 * @type {Object}
		 */
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

		/**
		 * Addable
		 * @param {Object} observers
		 * @param {Object} data      Reference Data
		 */
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

		/**
		 * Add Image
		 */
		var addImage = function () {

			// Access the camera in PhoneGap
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

		/**
		 * Save
		 */
		var save = function () {

			// Todo: Replace with WorkOrder Model "save" method
			// Simply output data in the workOrder observable to the console
			console.log(JSON.parse(ko.toJSON(workOrder())));

			// Route to Work Orders List
			p.publish('route', '#workorders');

		};

		/**
		 * ViewModel
		 * @type {Object}
		 */
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

		return ViewModel;

	};

});