define([
	'component',
	'./viewModel',
	'text!./view.html'
], function (Component, ViewModel, View) {

	'use strict';

	return new Component('settings', ViewModel, View).init();

});