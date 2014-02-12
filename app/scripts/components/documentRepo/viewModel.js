define([
	'knockout',
	'models/documentRepo',
	'models/user'
], function (ko, DocumentRepoModel, UserModel) {

	'use strict';

	return function () {

		var documentRepoModel = new DocumentRepoModel();
		var userModel = new UserModel();

		var isLoading = ko.observable(true);
		var documentList = ko.observableArray();
		var documentDetails = ko.observable('');
		var isDocumentLoaded = ko.observable(false);
		var isDocumentLoading = ko.observable(false);
		var selected = ko.observable();
		var isAdmin = ko.observable(false);
		var isEdit = ko.observable(false);

		selected.subscribe(function (value) {
			if (value !== null) {
				getDocument(selected().id);
			}
		});

		var init = function () {
			userModel.getUser(function (user) {
				isAdmin(user.isAdmin);
			});
			return this;
		};

		var refresh = function () {
			selected(null);
			isDocumentLoaded(false);
			getDocumentList();
		};

		var toggleEdit = function () {
			isEdit(isEdit() ? false : true);
		};

		var getDocumentList = function () {
			isLoading(true);
			documentRepoModel.getDocumentList(getDocumentListResult);
		};

		var getDocumentListResult = function (data) {
			isLoading(false);
			documentList(data);
		};

		var getDocument = function () {
			isDocumentLoading(true);
			documentRepoModel.getDocument({ documentId: selected().id }, getDocumentResult);
		};

		var getDocumentResult = function (data) {
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
			selected: selected,
			isAdmin: isAdmin,
			isEdit: isEdit,
			toggleEdit: toggleEdit
		};

		return ViewModel;

	};

});