/**
 * Parse QueryString to Javascript Object
 */

define(function () {

	'use strict';

	var parse = function (string) {

		var query = {};

		if(string.length) {

			var pairs = string.split('&');

			for (var i in pairs) {
				var pair = pairs[i].split('=');
				query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
			}

		}

		return query;

	};

	var qs = {
		parse: parse
	};

	return qs;

});