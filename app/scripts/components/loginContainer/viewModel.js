define(['knockout', 'pubsub'], function (ko, p) {

	'use strict';

	return function () {

		var content = ko.observable('login');
		var animation = ko.observable('');

		content.subscribe(function () {
			animation('');
		});

		var init = function () {
			p.subscribe('loginContainer.animation', animation);
			return this;
		};

		var ViewModel = {
			init: init,
			content: content,
			animation: animation
		};

		return ViewModel.init();

	};

});