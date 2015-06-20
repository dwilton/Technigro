define(['jquery'], function ($) {

	'use strict';

	/**
	 * Document Repo Model
	 * @return {Object} Model
	 */
	return function () {

		/**
		 * Get Document List
		 * @param  {Function} callback
		 */
		var getDocumentList = function (callback) {
			$.getJSON('/api/documentRepo/')
				.done(function (data) {
					callback(data.result);
				});
		};

		/**
		 * Get Document
		 * @param  {Object}   data
		 * @param  {Function} callback
		 */
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