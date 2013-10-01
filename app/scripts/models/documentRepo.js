define(['pubsub', 'jquery', 'mocks/documentRepo'], function (p, $) {

	'use strict';

	// Methods
	var init = function () {
		p.subscribe('documentRepo.getDocumentList', getDocumentList);
		p.subscribe('documentRepo.getDocumentById', getDocumentById);
		return this;
	};

	var getDocumentList = function () {
		$.getJSON('/api/documentRepo/')
			.done(function (data) {
				p.publish('documentRepo.getDocumentList.result', data.result);
			});
	};

	var getDocumentById = function () {
		$.getJSON('/api/documentRepo/1')
			.done(function (data) {
				p.publish('documentRepo.getDocumentById.result', data.result);
			});
	};

	var Model = {
		init: init
	};

	return Model.init();

});