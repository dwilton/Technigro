define([
	'knockout',
	'pubsub',
	'models/recoverLogin'
], function (ko, p, RecoverLoginModel) {

	'use strict';

	return function () {

		var recoverLoginModel = new RecoverLoginModel();
		var email = ko.observable('');
		var isLoading = ko.observable(false);
		var isFailed = ko.observable(false);
		var isSuccess = ko.observable(false);

		var animation = ko.computed(function () {
			p.publish('loginContainer.animation', isFailed() ? 'shake' : '');
		});

		var refresh = function () {
			email('');
			isFailed(false);
			isSuccess(false);
		};

		var recover = function () {
			isLoading(true);
			isFailed(false);
			recoverLoginModel.recover({ email: email() }, recoverResult);
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
			refresh: refresh,
			email: email,
			isLoading: isLoading,
			isSuccess: isSuccess,
			isFailed: isFailed,
			recover: recover
		};

		return ViewModel;

	};

});