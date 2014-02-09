define(['knockout', 'pubsub'], function (ko, p, Login) {

	'use strict';

	return function () {

		var region = {};
		var title = ko.observable();
		var menu = ko.observable();
		var menuVisibility = ko.observable(false);

		region.content = ko.observable();
		region.content.subscribe(function () {
			menuVisibility(false);
		});

		var init = function () {
			p.subscribe('main.workOrder', workOrder);
			p.subscribe('main.workOrders', workOrders);
			p.subscribe('main.documentRepo', documentRepo);
			p.subscribe('main.title', title);
			return this;
		};

		var logout = function () {
			p.publish('app.logout');
		};

		var menuToggle = function () {
			menuVisibility(menuVisibility() ? false : true);
		};

		var workOrder = function () {
			title('Work Orders');
			region.content('workOrder');
			menu('workOrders');
		};

		var workOrders = function () {
			title('Work Orders');
			region.content('workOrders');
			menu('workOrders');
		};

		var documentRepo = function () {
			title('Document Repository');
			region.content('documentRepo');
			menu('documentRepo');
		};

		var ViewModel = {
			init: init,
			logout: logout,
			title: title,
			region: region,
			menu: menu,
			menuToggle: menuToggle,
			menuVisibility: menuVisibility
		};

		return ViewModel.init();

	};

});