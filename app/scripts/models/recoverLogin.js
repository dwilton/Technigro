define(['pubsub', 'jquery', 'mocks/recoverLogin'], function (p, $) {

	'use strict';

	var init = function () {
		p.subscribe('recoverLogin.recover', recover);
		return this;
	};

	var recover = function (data) {
		$.getJSON('/api/recover-password/', data)
			.done(function (data) {
				p.publish('recoverLogin.recover.result', data.result);
			});
	};

	var Model = {
		init: init
	};

	return Model.init();

});