define(['ko', 'models/documentRepo'], function (ko, DocumentRepo) {

	'use strict';

	return function () {

		var _documentRepo = new DocumentRepo();

		var isLoading = ko.observable(true);
		var documentList = ko.observableArray();
		var documentDetails = ko.observable('');
		var isDocumentLoaded = ko.observable(false);
		var isDocumentLoading = ko.observable(false);
		var selected = ko.observable();

		selected.subscribe(function (value) {
			if(value !== null) {
				getDocument(selected().id);
			}
		});

		var refresh = function () {
			getDocumentList();
			selected(null);
			isDocumentLoaded(false);
		};

		var getDocumentList = function () {
			isLoading(true);
			_documentRepo.getDocumentList(getDocumentListResult);
		};

		var getDocumentListResult = function (data) {
			isLoading(false);
			documentList(data);
		};

		var getDocument = function () {
			isDocumentLoading(true);
			_documentRepo.getDocument({ documentId: selected().id }, getDocumentResult);
		};

		var getDocumentResult = function (data) {
			isDocumentLoading(false);
			isDocumentLoaded(true);
			documentDetails(data);
		};

		var ViewModel = {
			refresh: refresh,
			documentList: documentList,
			documentDetails: documentDetails,
			isDocumentLoaded: isDocumentLoaded,
			isLoading: isLoading,
			isDocumentLoading: isDocumentLoading,
			selected: selected
		};

		return ViewModel;

	};

});