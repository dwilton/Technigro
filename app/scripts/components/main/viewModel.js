define([
	'knockout',
	'pubsub',
	'models/login',
	'components/main/workorder/component',
	'components/main/workorders/component',
	'components/main/documentRepo/component',
	'components/main/settings/component'
], function (ko, p, LoginModel, workOrderCom, workOrdersCom, documentRepoCom, settingsCom) {

	'use strict';

	return function () {

		// Models
		var loginModel = new LoginModel();

		// Observables
		var title = ko.observable();
		var menu = ko.observable();
		var content = ko.observable();
		var menuVisibility = ko.observable(false);

		// Subscriber Observables
		content.subscribe(function () {
			menuVisibility(false);
		});

		// Init Components
		workOrderCom.init();
		workOrdersCom.init();
		documentRepoCom.init();
		settingsCom.init();

		/**
		 * Init ViewModel
		 * @return {Object} Instance
		 */
		var init = function () {

			// Routes (Note: use hashes for PhoneGap, not pushstate)
			p.publish('route.set', { name: '/', callback: workOrders });
			p.publish('route.set', { name: '#workorder?', callback: workOrder });
			p.publish('route.set', { name: '#workorder/:id', callback: workOrder });
			p.publish('route.set', { name: '#workorders', callback: workOrders });
			p.publish('route.set', { name: '#document-repository', callback: documentRepo });
			p.publish('route.set', { name: '#settings', callback: settings });

			// Subscribers
			p.subscribe('main.title', title);

			return this;

		};

		/**
		 * Logout
		 */
		var logout = function () {
			loginModel.logout();
		};

		/**
		 * Toggle Menu
		 */
		var menuToggle = function () {
			menuVisibility(menuVisibility() ? false : true);
		};

		/**
		 * Display Work Order
		 * @param  {Object} urlData passed from the router
		 */
		var workOrder = function (urlData) {

			// Update observables
			title('Work Orders');
			menu('workOrders');

			// Update content observable activating the 'Work Orders' component
			content(workOrderCom.name);

			// Publish 'workOrder' event
			if (urlData.params.id !== undefined) {
				p.publish('workOrder.edit', urlData.params.id);
			} else {
				p.publish('workOrder.create', urlData.querystring.typeid);
			}

		};

		/**
		 * Display Work Orders
		 */
		var workOrders = function () {

			// Update observables
			title('Work Orders');
			menu('workOrders');

			// Update content observable activating the 'Work Orders' component
			content(workOrdersCom.name);

		};

		/**
		 * Display Document Repo
		 */
		var documentRepo = function () {

			// Update observables
			title('Document Repository');
			menu('documentRepo');

			// Update content observable activating the 'Document Repo' component
			content(documentRepoCom.name);

		};

		/**
		 * Display Settings
		 */
		var settings = function () {

			// Update observables
			title('Settings');
			menu('settings');

			// Update content observable activating the 'Settings' component
			content(settingsCom.name);

		};

		/**
		 * ViewModel
		 * @type {Object}
		 */
		var ViewModel = {
			init: init,
			logout: logout,
			title: title,
			content: content,
			menu: menu,
			menuToggle: menuToggle,
			menuVisibility: menuVisibility
		};

		return ViewModel;

	};

});