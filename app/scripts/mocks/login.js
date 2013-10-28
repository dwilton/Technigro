define(['jquery', 'mockjax'], function ($) {

	'use strict';

	$.mockjax({
		url: '/api/login/',
		responseTime: 1000,
		data: { username: 'admin' },
		responseText: { result: true, name: 'Administrator', isAdmin: true }
	});

	$.mockjax({
		url: '/api/login/',
		responseTime: 1000,
		data: { username: 'technician' },
		responseText: { result: true, name: 'Techician', isAdmin: false }
	});

	$.mockjax({
		url: '/api/login/',
		responseTime: 1000,
		responseText: { result: false }
	});

});