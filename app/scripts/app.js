define([
	'knockout',
	'pubsub',
	'models/user',
	'components/loginContainer/component',
	'components/login/component',
	'components/recoverLogin/component',
	'components/main/component',
	'components/workorder/component',
	'components/workorders/component',
	'components/documentRepo/component'
], function (ko, p, User) {

	'use strict';

	return function () {

		var user = new User();
		var content = ko.observable();

		var init = function () {

			// Set routes (Note: use hashes for PhoneGap, not pushstate)
			p.publish('route.set', { name: '/', callback: workOrders });
			p.publish('route.set', { name: '#workorder?', callback: workOrder });
			p.publish('route.set', { name: '#workorder/:id', callback: workOrder });
			p.publish('route.set', { name: '#workorders', callback: workOrders });
			p.publish('route.set', { name: '#document-repository', callback: documentRepo });

			p.subscribe('app.authenticate', authenticate);

			authenticate();

			return this;

		};

		var authenticate = function () {
			user.getUser(function (user) {
				if (user.isLoggedIn) {
					p.publish('route', window.location.hash);
				} else {
					content('loginContainer');
				}
			});
		};

		var workOrders = function () {

			// Update content
			content('main');

			// Publish 'main' observer
			p.publish('main.workOrders');

		};

		var workOrder = function (ctx) {

			// Update content
			content('main');

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

			// Update content
			content('main');

			// Publish 'main' observer
			p.publish('main.documentRepo');

		};

		var App = {
			init: init,
			content: content
		};

		return App.init();

	};

});