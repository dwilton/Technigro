define(['ko', 'pubsub', 'models/login'], function (ko, p, Login) {

	'use strict';

	return function () {

		var _login = new Login();

		var title = ko.observable();
		var content = ko.observable();
		var menu = ko.observable();
		var menuVisibility = ko.observable(false);

		content.subscribe(function () {
			menuVisibility(false);
		});

		var init = function () {
			p.subscribe('main.workOrder', workOrder);
			p.subscribe('main.workOrders', workOrders);
			p.subscribe('main.documentRepo', documentRepo);
			return this;
		};

		var logout = function () {
			_login.logout();
			p.publish('app.authenticate');
		};

		var menuToggle = function () {
			menuVisibility(menuVisibility() ? false : true);
		};

		var workOrder = function () {
			title('Work Order');
			content('workOrder');
			menu('workOrders');
		};

		var workOrders = function () {
			title('Work Orders');
			content('workOrders');
			menu('workOrders');
		};

		var documentRepo = function () {
			title('Document Repository');
			content('documentRepo');
			menu('documentRepo');
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

		return ViewModel.init();

	};

});