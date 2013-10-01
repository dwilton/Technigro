define(['pubsub', 'store'], function (p, store) {

	'use strict';

	var init = function () {
		p.subscribe('user.setUser', setUser);
		p.subscribe('user.getUser', getUser);
		p.subscribe('user.deleteUser', deleteUser);
		return this;
	};

	var deleteUser = function () {
		store.remove('user', getUser);
	};

	var setUser = function (data) {
		store.save({
			key: 'user',
			name: data.name,
			isAdmin: data.isAdmin,
			isLoggedIn: true
		}, getUser);
	};

	var getUser = function () {

		store.get('user', function (data) {

			// return vanilla object if user data doesn't exist
			if (data === null) {
				data = { name: '', isAdmin: false, isLoggedIn: false};
			}

			p.publish('user.getUser.result', data);

		});
	};

	var User = {
		init: init
	};

	return User.init();

});