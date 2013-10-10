define(['jquery', 'mockjax'], function($) {

	'use strict';

	$.mockjax({
		url: '/api/clients/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 1, name: 'Ac Mattis Consulting' },
				{ id: 2, name: 'Tincidunt Consulting' },
				{ id: 3, name: 'Felis Donec Tempor Corp.' },
				{ id: 4, name: 'Netus Et Malesuada Company' },
				{ id: 5, name: 'Donec Tempus Incorporated' }
			]
		}
	});

	$.mockjax({
		url: '/api/technicians/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 1, name: 'David Wilton' },
				{ id: 2, name: 'Elicia Squires' }
			]
		}
	});

	$.mockjax({
		url: '/api/statuses/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 1, name: 'New' },
				{ id: 2, name: 'Submitted' },
				{ id: 3, name: 'Approved' },
				{ id: 0, name: 'All' }
			]
		}
	});

	$.mockjax({
		url: '/api/jobInstructions/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 1, name: 'Hand Mowing - 40400', price: 664.00 },
				{ id: 2, name: 'Clearing (On Rotation) - 40500', price: 949.05 }
			]
		}
	});

	$.mockjax({
		url: '/api/equipment/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 1, name: 'Chainsaw' },
				{ id: 2, name: 'Hand Tools' }
			]
		}
	});

	$.mockjax({
		url: '/api/products/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 1, name: 'Glyphosate @ 1.5L / 100L' },
				{ id: 2, name: 'Turfmaker @ 100ml / 100L' }
			]
		}
	});

	$.mockjax({
		url: '/api/invoiceTypes/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 1, name: 'FM' }
			]
		}
	});

	$.mockjax({
		url: '/api/quoteTypes/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 1, name: 'Quoted' }
			]
		}
	});

});