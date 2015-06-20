define([
	'knockout',
	'models/documentRepo',
	'models/user'
], function (ko, DocumentRepoModel, UserModel) {

	'use strict';

	/**
	 * Document Repo ViewModel
	 * @return {Object} ViewModel
	 */
	return function () {

		// Models
		var documentRepoModel = new DocumentRepoModel();
		var userModel = new UserModel();

		// Observables
		var isLoading = ko.observable(true);
		var documentList = ko.observableArray();
		var documentDetails = ko.observable('');
		var isDocumentLoaded = ko.observable(false);
		var isDocumentLoading = ko.observable(false);
		var selected = ko.observable();
		var isAdmin = ko.observable(false);
		var isEdit = ko.observable(false);

		// 'Add New Document' Observables
		var addNewDocument = {
			showMenu: ko.observable(false),
			groupType: ko.observable('existing'),
			existingGroup: ko.observable(''),
			createGroup: ko.observable(''),
			file: ko.observable(''),
			isUploading: ko.observable(false)
		};

		// Computed Observables
		addNewDocument.placeholder = ko.computed(function() {
				return addNewDocument.file().replace('C:\\fakepath\\', '');
		}, this);

		// Subscribed Observables
		selected.subscribe(function (value) {
			if (value !== null) {
				getDocument(selected().id);
			}
		});

		/**
		 * Init ViewModel
		 * @return {Object} Instance
		 */
		var init = function () {

			// Get user and set admin access
			userModel.getUser(function (user) {
				isAdmin(user.isAdmin);
			});

			return this;

		};

		/**
		 * Refresh ViewModel
		 */
		var refresh = function () {

			// Reset observables
			selected(null);
			isDocumentLoaded(false);
			getDocumentList();
			addNewDocument.showMenu(false);

		};

		/**
		 * Toggle Add New Menu
		 */
		var toggleAddNewMenu = function () {
			addNewDocument.showMenu(addNewDocument.showMenu() ? false : true);
		};

		/**
		 * Toggle Edit
		 */
		var toggleEdit = function () {
			isEdit(isEdit() ? false : true);
		};

		/**
		 * Get Document List
		 */
		var getDocumentList = function () {

			// Show document list loading indicator
			isLoading(true);

			// Get document list
			documentRepoModel.getDocumentList(getDocumentListResult);

		};

		/**
		 * Get Document List Result (Callback)
		 * @param  {Object} data
		 */
		var getDocumentListResult = function (data) {

			// Hide document list loading indicator
			isLoading(false);

			// Update document list observable array
			documentList(data);

		};

		/**
		 * Get Document
		 * @return {Object}
		 */
		var getDocument = function () {

			// Show document loading indicator
			isDocumentLoading(true);

			// Get document
			documentRepoModel.getDocument({ documentId: selected().id }, getDocumentResult);

		};

		/**
		 * Get Document Result (Callback)
		 * @param  {String} data
		 */
		var getDocumentResult = function (data) {

			// Hide document loading indicator
			isDocumentLoading(false);

			// Removes document placeholder
			isDocumentLoaded(true);

			// Update document details observable
			documentDetails(data);

		};

		/**
		 * Upload Document
		 */
		var uploadDocument = function () {

			// Show uloading indicator
			addNewDocument.isUploading(true);

			setTimeout(function () {

				// Reset add new document observables
				addNewDocument.isUploading(false);
				addNewDocument.existingGroup('');
				addNewDocument.createGroup('');
				addNewDocument.file('');
				toggleAddNewMenu();

			}, 2000);

		};

		/**
		 * ViewModel
		 * @type {Object}
		 */
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