define(['models/recoverLogin', 'api', 'jquery', 'mockjax'], function (RecoverLogin, api, $) {

	'use strict';

	$.mockjax({
		url: api + 'recover-password/',
		responseTime: 1000,
		data: { email: 'admin@technigro.com.au' },
		responseText: { result: true }
	});

	$.mockjax({
		url: api + 'recover-password/',
		responseTime: 1000,
		responseText: { result: false }
	});

	return RecoverLogin;

});