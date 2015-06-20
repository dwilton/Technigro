/**
 * Parse QueryString to Javascript Object
 */

define(function () {

	'use strict';

	/**
	 * Parse QueryString
	 * @param  {String} string QueryString
	 * @return {Object}        QueryString parsed to an object
	 */
	var parse = function (string) {

		// Create an empty object
		var query = {};

		if (string.length) {

			// Create a 'pairs' array splitting on '&'
			var pairs = string.split('&');

			for (var i in pairs) {

				// Create a 'pair' array splitting on '='
				var pair = pairs[i].split('=');

				// Populate the 'query' object with a new property and value
				query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);

			}

		}

		return query;

	};

	/**
	 * QueryString Module
	 * @type {Object}
	 */
	var qs = {
		parse: parse
	};

	return qs;

});