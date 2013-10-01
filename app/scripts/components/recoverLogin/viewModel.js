define(['pubsub', 'ko', 'models/recoverLogin'], function (p, ko) {

	'use strict';

	return function () {

		var email = ko.observable('');
		var isLoading = ko.observable(false);
		var isFailed = ko.observable(false);
		var isSuccess = ko.observable(false);
		var animation = ko.computed(function () {
			p.publish('loginContainer.animation', isFailed() ? 'shake' : '');
		});

		var init = function () {
			p.subscribe('recoverLogin.recover.result', recoverResult);
			return this;
		};

		var refresh = function () {
			email('');
			isFailed(false);
			isSuccess(false);
		};

		var recover = function () {
			isLoading(true);
			isFailed(false);
			p.publish('recoverLogin.recover', { email: email() });
		};

		var recoverResult = function (data) {
			isLoading(false);
			if (data) {
				isSuccess(true);
			} else {
				isFailed(true);
			}
		};

		var ViewModel = {
			init: init,
			refresh: refresh,
			email: email,
			isLoading: isLoading,
			isSuccess: isSuccess,
			isFailed: isFailed,
			recover: recover
		};

		return ViewModel.init();

	};

});