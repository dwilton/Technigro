define([
	'jquery',
	'mocks/documentRepo'
], function ($) {

	'use strict';

	return function () {

		var getDocumentList = function (callback) {
			$.getJSON('/api/documentRepo/')
				.done(function (data) {
					callback(data.result);
				});
		};

		var getDocument = function (data, callback) {
			$.getJSON('/api/documentRepo/' + data.id)
				.done(function (data) {
					callback(data.result);
				});
		};

		return {
			getDocumentList: getDocumentList,
			getDocument: getDocument
		};

	};

});