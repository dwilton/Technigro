define(['pubsub', 'ko', 'models/user', 'models/workOrders'], function (p, ko) {

	'use strict';

	return function () {

		var isLoading = ko.observable(false);
		var isWorkOrdersLoading = ko.observable(false);
		var user = ko.observable();
		var menu = ko.observable(false);
		var statusTypes = ko.observableArray();
		var technicians = ko.observableArray();
		var workOrders = ko.observableArray();

		var filter = {
			status: ko.observable(0),
			archived: ko.observable(false),
			technician: ko.observable(0),
			dateFrom: ko.observable(''),
			dateTo: ko.observable('')
		};

		var init = function () {

			p.subscribe('user.getUser.result', user);
			p.subscribe('workOrders.getFilterOptions.result', getFilterOptionsResult);
			p.subscribe('workOrders.getWorkOrders.result', getWorkOrdersResult);
			p.subscribe('workOrders.menu', menu);

			getFilterOptions();

			return this;

		};

		var getWorkOrders = function () {
			isWorkOrdersLoading(true);
			p.publish('workOrders.getWorkOrders', ko.toJSON(filter));
		};

		var getWorkOrdersResult = function (data) {
			isWorkOrdersLoading(false);
			workOrders(data);
		};

		var getFilterOptions = function () {
			isLoading(true);
			p.publish('workOrders.getFilterOptions');
		};

		var getFilterOptionsResult = function (data) {

			isLoading(false);

			technicians(data.technicians);
			statusTypes(data.statusTypes);

			// Attach subscribers
			for(var prop in filter){
				filter[prop].subscribe(getWorkOrders);
			}

			getWorkOrders();

		};

		var toggleAddNewMenu = function () {
			menu(menu() ? false : true);
		};

		var ViewModel = {
			init: init,
			isLoading: isLoading,
			isWorkOrdersLoading: isWorkOrdersLoading,
			user: user,
			menu: menu,
			toggleAddNewMenu: toggleAddNewMenu,
			filter: filter,
			technicians: technicians,
			statusTypes: statusTypes,
			workOrders: workOrders
		};

		return ViewModel.init();

	};

});