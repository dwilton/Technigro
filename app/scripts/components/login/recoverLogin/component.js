define([
	'component',
	'./viewModel',
	'text!./view.html'
], function (Component, ViewModel, view) {

	'use strict';

	return new Component('recoverLogin', ViewModel, view);

});