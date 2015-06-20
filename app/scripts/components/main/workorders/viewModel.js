define([
	'knockout',
	'models/user',
	'models/workOrders'
], function (ko, UserModel, WorkOrdersModel) {

	'use strict';

	/**
	 * Work Orders ViewModel
	 * @return {Object} ViewModel
	 */
	return function () {

		// Models
		var userModel = new UserModel();
		var workOrdersModel = new WorkOrdersModel();

		// Observables
		var isLoading = ko.observable(false);
		var isWorkOrdersLoading = ko.observable(false);
		var isAdmin = ko.observable(false);
		var addNewMenu = ko.observable(false);
		var workOrders = ko.observableArray();

		// 'Reference Data' Observables
		var refData = {
			statuses: ko.observableArray(),
			technicians: ko.observableArray()
		};

		// 'Filter' Observables
		var filter = {
			status: ko.observable(0),
			archived: ko.observable(false),
			technician: ko.observable(0),
			dateFrom: ko.observable(''),
			dateTo: ko.observable('')
		};

		/**
		 * Init ViewModel
		 */
		var init = function () {

			// Get user and set admin access
			userModel.getUser(function (user) {
				isAdmin(user.isAdmin);
			});

			return this;

		};

		/**
		 * Activate ViewModel
		 */
		var activate = function () {
			getRefData();
		};

		/**
		 * Refresh ViewModel
		 */
		var refresh = function () {
			addNewMenu(false);
		};

		/**
		 * Toggle Add New Menu
		 */
		var toggleAddNewMenu = function () {
			addNewMenu(addNewMenu() ? false : true);
		};

		/**
		 * Create 'Filter' subscribed observables
		 */
		var filterSubscribers = function () {

			// Create a subscriber for each property in the 'Filter' object
			for(var prop in filter){
				filter[prop].subscribe(getWorkOrders);
			}

		};

		/**
		 * Get Reference Data
		 */
		var getRefData = function () {

			// Show loading indicator
			isLoading(true);

			// Get reference data
			workOrdersModel.getRefData(getRefDataResult);

		};

		/**
		 * Get Reference Data Result
		 * @param  {Object} data [description]
		 */
		var getRefDataResult = function (data) {

			// Hide loading indicator
			isLoading(false);

			// Updates observables
			refData.technicians(data.technicians);
			refData.statuses(data.statuses);

			// Create 'Filter' subscribed observables
			filterSubscribers();

			// Get work orders
			getWorkOrders();

		};

		/**
		 * Get Work Orders
		 */
		var getWorkOrders = function () {

			// Show work orders data grid loading indicator
			isWorkOrdersLoading(true);

			// Get work orders
			workOrdersModel.getWorkOrders(ko.toJSON(filter), getWorkOrdersResult);

		};

		/**
		 * Get Work Orders Result
		 * @param  {Object} data
		 */
		var getWorkOrdersResult = function (data) {

			// Hide work orders data grid loading indicator
			isWorkOrdersLoading(false);

			// Update work orders observable array
			workOrders(data);

		};

		/**
		 * ViewModel
		 * @type {Object}
		 */
		var ViewModel = {
			init: init,
			activate: activate,
			refresh: refresh,
			isAdmin: isAdmin,
			addNewMenu: addNewMenu,
			toggleAddNewMenu: toggleAddNewMenu,
			isLoading: isLoading,
			filter: filter,
			isWorkOrdersLoading: isWorkOrdersLoading,
			refData: refData,
			workOrders: workOrders
		};

		return ViewModel;

	};

});