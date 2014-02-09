define([
	'knockout',
	'pubsub',
	'models/user',
	'models/login',
	'components/loginContainer/component',
	'components/login/component',
	'components/recoverLogin/component',
	'components/main/component',
	'components/workorder/component',
	'components/workorders/component',
	'components/documentRepo/component'
], function (ko, p, User, Login) {

	'use strict';

	return function () {

		var user = new User();
		var login = new Login();
		var region = {};

		// Regions (Component name are assigned to these) e.g. region.content('main');
		region.content = ko.observable();

		var init = function () {

			// Routes (Note: use hashes for PhoneGap, not pushstate)
			p.publish('route.set', { name: '/', callback: workOrders });
			p.publish('route.set', { name: '#workorder?', callback: workOrder });
			p.publish('route.set', { name: '#workorder/:id', callback: workOrder });
			p.publish('route.set', { name: '#workorders', callback: workOrders });
			p.publish('route.set', { name: '#document-repository', callback: documentRepo });

			// Security
			p.subscribe('app.authenticate', authenticate);
			p.subscribe('app.logout', logout);
			authenticate();

			return this;

		};

		var authenticate = function () {
			user.getUser(function (user) {
				if (user.isLoggedIn) {
					p.publish('route', window.location.hash);
				} else {
					region.content('loginContainer');
				}
			});
		};

		var logout = function () {
			login.logout(function () {
				authenticate();
			});
		};

		var workOrders = function () {

			// Update regions
			region.content('main');

			// Publish 'main' observer
			p.publish('main.workOrders');

		};

		var workOrder = function (ctx) {

			// Update regions
			region.content('main');

			// Publish 'main' observer
			p.publish('main.workOrder');

			// Publish 'workOrder' observer
			if(ctx.params.id !== undefined) {
				p.publish('workOrder.edit', ctx.params.id);
			} else {
				p.publish('workOrder.create', ctx.querystring.typeid);
			}

		};

		var documentRepo = function () {

			// Update regions
			region.content('main');

			// Publish 'main' observer
			p.publish('main.documentRepo');

		};

		var App = {
			init: init,
			region: region
		};

		return App.init();

	};

});