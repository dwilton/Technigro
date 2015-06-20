define(['chai', 'components/main/viewModel'], function (chai, ViewModel) {

	'use strict';

	var assert = chai.assert;
	var should = chai.should();
	var expect = chai.expect;

	describe('ViewModel', function () {

		var viewModel = new ViewModel();

		it('viewModel instance should exist', function () {
				should.exist(viewModel);
		});

	});

});