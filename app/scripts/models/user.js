define(['store'], function (store) {

	'use strict';

	/**
	 * User Model
	 * @return {Object} Model
	 */
	return function () {

		var defaultUser = { name: '', isAdmin: false, isLoggedIn: false};

		/**
		 * Delete User
		 * @param  {Function} callback
		 */
		var deleteUser = function (callback) {
			store.remove('user', function () {
				callback();
			});
		};

		/**
		 * Set User
		 * @param {Object}   data
		 * @param {Function} callback
		 */
		var setUser = function (data, callback) {
			store.save({
				key: 'user',
				name: data.name,
				isAdmin: data.isAdmin,
				isLoggedIn: true
			}, callback);
		};

		/**
		 * Get User
		 * @param  {Function} callback
		 */
		var getUser = function (callback) {
			store.get('user', function (data) {
				if (data === null) {
					data = defaultUser;
				}
				callback(data);
			});
		};

		/**
		 * User Model
		 * @type {Object}
		 */
		var User = {
			deleteUser: deleteUser,
			setUser: setUser,
			getUser: getUser
		};

		return User;

	};

});