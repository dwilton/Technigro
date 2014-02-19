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

		var addNewDocument = {
			showMenu: ko.observable(false),
			groupType: ko.observable('existing'),
			existingGroup: ko.observable(''),
			createGroup: ko.observable(''),
			file: ko.observable(''),
			isUploading: ko.observable(false)
		};

		addNewDocument.placeholder = ko.computed(function() {
        return addNewDocument.file().replace('C:\\fakepath\\', '');
    }, this);

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
			addNewDocument.showMenu(false);
		};

		var toggleAddNewMenu = function () {
			addNewDocument.showMenu(addNewDocument.showMenu() ? false : true);
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

		var uploadDocument = function () {
			addNewDocument.isUploading(true);

			setTimeout(function () {
				addNewDocument.isUploading(false);
				addNewDocument.existingGroup('');
				addNewDocument.createGroup('');
				addNewDocument.file('');
				toggleAddNewMenu();
			}, 2000);
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
			addNewDocument: addNewDocument,
			toggleEdit: toggleEdit,
			uploadDocument: uploadDocument,
			toggleAddNewMenu: toggleAddNewMenu
		};

		return ViewModel;

	};

});