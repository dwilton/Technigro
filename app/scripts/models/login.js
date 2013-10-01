define(['pubsub', 'jquery', 'mocks/login'], function (p, $) {

	'use strict';

	var init = function () {
		p.subscribe('login.authenticate', authenticate);
		return this;
	};

	var authenticate = function (data) {
		$.getJSON('/api/login/', data)
			.done(function (data) {
				if(data.result) {
					p.publish('user.setUser', data);
				}
				p.publish('login.authenticate.result', data.result);
			});
	};

	var logout = function () {
		p.publish('user.deleteUser');
	};

	var Model = {
		init: init
	};

	return Model.init();

});