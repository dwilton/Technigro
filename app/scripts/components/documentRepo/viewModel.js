define(['pubsub', 'ko', 'models/documentRepo'], function (p, ko) {

	'use strict';

	return function () {

		var isLoading = ko.observable(true);
		var documentList = ko.observableArray();
		var documentDetails = ko.observable('');
		var isDocumentLoaded = ko.observable(false);
		var isDocumentLoading = ko.observable(false);
		var selected = ko.observable();

		selected.subscribe(function (value) {
			if(value !== null) {
				getDocumentById(selected().id);
			}
		});

		var init = function () {
			p.subscribe('documentRepo.getDocumentList.result', getDocumentListResult);
			p.subscribe('documentRepo.getDocumentById.result', getDocumentByIdResult);
			return this;
		};

		var refresh = function () {
			getDocumentList();
			selected(null);
			isDocumentLoaded(false);
		};

		var getDocumentList = function () {
			isLoading(true);
			p.publish('documentRepo.getDocumentList');
		};

		var getDocumentListResult = function (data) {
			isLoading(false);
			documentList(data);
		};

		var getDocumentById = function () {
			isDocumentLoading(true);
			p.publish('documentRepo.getDocumentById', { documentId: selected().id });
		};

		var getDocumentByIdResult = function (data) {
			isDocumentLoading(false);
			isDocumentLoaded(true);
			documentDetails(data);
		};

		var ViewModel = {
			init: init,
			refresh: refresh,
			documentList: documentList,
			documentDetails: documentDetails,
			isDocumentLoaded: isDocumentLoaded,
			isLoading: isLoading,
			isDocumentLoading: isDocumentLoading,
			selected: selected
		};

		return ViewModel.init();

	};

});