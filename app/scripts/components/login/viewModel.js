define(['knockout', 'pubsub', 'models/login'], function (ko, p, Login) {

	'use strict';

	return function () {

		var _login = new Login();

		var username = ko.observable('');
		var password = ko.observable('');
		var isLoading = ko.observable(false);
		var isFailed = ko.observable(false);
		var animation = ko.computed(function () {
			p.publish('loginContainer.animation', isFailed() ? 'shake' : '');
		});

		var refresh = function () {
			username('');
			password('');
			isLoading(false);
			isFailed(false);
		};

		var authenticate = function () {
			isLoading(true);
			isFailed(false);
			_login.authenticate({ username: username(), password: password() }, authenticateResult);
		};

		var authenticateResult = function (data) {
			isLoading(false);
			if(data) {
				refresh();
				p.publish('app.authenticate');
			}
			else {
				isFailed(true);
			}
		};

		var ViewModel = {
			refresh: refresh,
			username: username,
			password: password,
			isLoading: isLoading,
			isFailed: isFailed,
			authenticate: authenticate
		};

		return ViewModel;

	};

});