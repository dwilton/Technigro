define(['knockout', 'pubsub', 'models/user', 'models/workOrders'], function (ko, p, User, WorkOrders) {

	'use strict';

	return function () {

		var _user = new User();
		var _workOrders = new WorkOrders();

		var isLoading = ko.observable(false);
		var isWorkOrdersLoading = ko.observable(false);
		var isAdmin = ko.observable(false);
		var addNewMenu = ko.observable(false);
		var workOrders = ko.observableArray();

		var refData = {
			statuses: ko.observableArray(),
			technicians: ko.observableArray()
		};

		var filter = {
			status: ko.observable(0),
			archived: ko.observable(false),
			technician: ko.observable(0),
			dateFrom: ko.observable(''),
			dateTo: ko.observable('')
		};

		var activate = function () {
			_user.getUser(function (user) {
				isAdmin(user.isAdmin);
			});
			getRefData();
		};

		var refresh = function () {
			addNewMenu(false);
		};

		var toggleAddNewMenu = function () {
			addNewMenu(addNewMenu() ? false : true);
		};

		var filterSubscribers = function () {
			for(var prop in filter){
				filter[prop].subscribe(getWorkOrders);
			}
		};

		var getRefData = function () {
			isLoading(true);
			_workOrders.getRefData(getRefDataResult);
		};

		var getRefDataResult = function (data) {
			isLoading(false);
			refData.technicians(data.technicians);
			refData.statuses(data.statuses);
			filterSubscribers();
			getWorkOrders();
		};

		var getWorkOrders = function () {
			isWorkOrdersLoading(true);
			_workOrders.getWorkOrders(ko.toJSON(filter), getWorkOrdersResult);
		};

		var getWorkOrdersResult = function (data) {
			isWorkOrdersLoading(false);
			workOrders(data);
		};

		var ViewModel = {
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