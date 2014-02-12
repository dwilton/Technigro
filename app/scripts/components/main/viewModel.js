define([
	'knockout',
	'pubsub',
	'models/login',
	'components/workorder/component',
	'components/workorders/component',
	'components/documentRepo/component'
], function (ko, p, LoginModel, workOrderComponent, workOrdersComponent, documentRepoComponent) {

	'use strict';

	return function () {

		var loginModel = new LoginModel();
		var title = ko.observable();
		var menu = ko.observable();
		var content = ko.observable();
		var menuVisibility = ko.observable(false);

		content.subscribe(function () {
			menuVisibility(false);
		});

		var init = function () {

			// Routes (Note: use hashes for PhoneGap, not pushstate)
			p.publish('route.set', { name: '/', callback: workOrders });
			p.publish('route.set', { name: '#workorder?', callback: workOrder });
			p.publish('route.set', { name: '#workorder/:id', callback: workOrder });
			p.publish('route.set', { name: '#workorders', callback: workOrders });
			p.publish('route.set', { name: '#document-repository', callback: documentRepo });

			p.subscribe('main.title', title);

			return this;
		};

		var logout = function () {
			loginModel.logout();
		};

		var menuToggle = function () {
			menuVisibility(menuVisibility() ? false : true);
		};

		var workOrder = function (data) {
			title('Work Orders');
			menu('workOrders');
			content(workOrderComponent.name);

			// Publish 'workOrder' observer
			if (data.params.id !== undefined) {
				p.publish('workOrder.edit', data.params.id);
			} else {
				p.publish('workOrder.create', data.querystring.typeid);
			}
		};

		var workOrders = function () {
			title('Work Orders');
			menu('workOrders');
			content(workOrdersComponent.name);
		};

		var documentRepo = function () {
			title('Document Repository');
			menu('documentRepo');
			content(documentRepoComponent.name);
		};

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