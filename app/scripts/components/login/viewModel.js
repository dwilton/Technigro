define(['pubsub', 'ko', 'models/login'], function (p, ko) {

	'use strict';

	return function () {

		var username = ko.observable('');
		var password = ko.observable('');
		var isLoading = ko.observable(false);
		var isFailed = ko.observable(false);
		var animation = ko.computed(function () {
			p.publish('loginContainer.animation', isFailed() ? 'shake' : '');
		});

		var init = function () {
			p.subscribe('login.authenticate.result', authenticateResult);
			return this;
		};

		var refresh = function () {
			username('');
			password('');
			isLoading(false);
			isFailed(false);
		};

		var authenticate = function () {
			isLoading(true);
			isFailed(false);
			p.publish('login.authenticate', { username: username(), password: password() });
		};

		var authenticateResult = function (data) {
			isLoading(false);
			if (data) {
				refresh();
			} else {
				isFailed(true);
			}
		};

		var ViewModel = {
			init: init,
			refresh: refresh,
			username: username,
			password: password,
			isLoading: isLoading,
			isFailed: isFailed,
			authenticate: authenticate
		};

		return ViewModel.init();

	};

});