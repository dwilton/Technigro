define([
	'knockout',
	'pubsub',
	'models/login'
], function (ko, p, LoginModel) {

	'use strict';

	return function () {

		var loginModel = new LoginModel();

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

		var login = function () {
			isLoading(true);
			isFailed(false);
			loginModel.login({ username: username(), password: password() }, loginResult);
		};

		var loginResult = function (data) {
			isLoading(false);

			if (data) {
				refresh();
			} else {
				isFailed(true);
			}
		};

		var ViewModel = {
			refresh: refresh,
			username: username,
			password: password,
			isLoading: isLoading,
			isFailed: isFailed,
			login: login
		};

		return ViewModel;

	};

});