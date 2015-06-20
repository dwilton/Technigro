define(['models/recoverLogin', 'jquery', 'mockjax'], function (RecoverLogin, $) {

	'use strict';

	$.mockjax({
		url: '/api/recover-password/',
		responseTime: 1000,
		data: { email: 'admin@technigro.com.au' },
		responseText: { result: true }
	});

	$.mockjax({
		url: '/api/recover-password/',
		responseTime: 1000,
		responseText: { result: false }
	});

	return RecoverLogin;

});