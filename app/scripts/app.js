define([
	'knockout',
	'pubsub',
	'models/user',
	'components/loginContainer/component',
	'components/main/component'
], function (ko, p, UserModel, loginContainerComponent, mainComponent) {

	'use strict';

	return function () {

		var userModel = new UserModel();
		var content = ko.observable();

		var init = function () {
			p.subscribe('app.authenticate', authenticate);
			authenticate();
			return this;
		};

		var authenticate = function () {
			userModel.getUser(function (user) {
				if (user.isLoggedIn) {
					content(mainComponent.name);
					p.publish('component.initAll');
					p.publish('route', window.location.hash);
				} else {
					content(loginContainerComponent.name);
				}
			});
		};

		var App = {
			init: init,
			content: content
		};

		return App;

	};

});