define(['knockout', 'models/documentRepo', 'models/user'], function (ko, DocumentRepo, User) {

	'use strict';

	return function () {

		var _documentRepo = new DocumentRepo();
		var _user = new User();

		var isLoading = ko.observable(true);
		var documentList = ko.observableArray();
		var documentDetails = ko.observable('');
		var isDocumentLoaded = ko.observable(false);
		var isDocumentLoading = ko.observable(false);
		var selected = ko.observable();
		var isAdmin = ko.observable(false);
		var isEdit = ko.observable(false);

		selected.subscribe(function (value) {
			if(value !== null) {
				getDocument(selected().id);
			}
		});

		var refresh = function () {

			_user.getUser(function (user) {
				isAdmin(user.isAdmin);
			});

			getDocumentList();
			selected(null);
			isDocumentLoaded(false);

		};

		var toggleEdit = function () {
			isEdit(isEdit() ? false : true);
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
			selected: selected,
			isAdmin: isAdmin,
			isEdit: isEdit,
			toggleEdit: toggleEdit
		};

		return ViewModel;

	};

});