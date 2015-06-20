define(['models/documentRepo', 'api', 'jquery', 'mockjax'], function (DocumentRepo, api, $) {

	'use strict';

	$.mockjax({
		url: api + 'documentRepo/',
		responseTime: 1000,
		responseText: {
			result: [
				{
					name: 'Group Name 1',
					documents: [
						{ id: 1, name: 'Document 1' },
						{ id: 2, name: 'Document 2' },
						{ id: 3, name: 'Document 3' },
						{ id: 4, name: 'Document 4' },
					]
				},
				{
					name: 'Group Name 2',
					documents: [
						{ id: 5, name: 'Document 1' },
						{ id: 6, name: 'Document 2' },
						{ id: 7, name: 'Document 3' },
						{ id: 8, name: 'Document 4' },
					]
				},
				{
					name: 'Group Name 3',
					documents: [
						{ id: 9, name: 'Document 1' },
						{ id: 10, name: 'Document 2' },
						{ id: 11, name: 'Document 3' },
						{ id: 12, name: 'Document 4' },
					]
				},
				{
					name: 'Group Name 4',
					documents: [
						{ id: 13, name: 'Document 1' },
						{ id: 14, name: 'Document 2' },
						{ id: 15, name: 'Document 3' },
						{ id: 16, name: 'Document 4' },
					]
				},
				{
					name: 'Group Name 5',
					documents: [
						{ id: 17, name: 'Document 1' },
						{ id: 18, name: 'Document 2' },
						{ id: 19, name: 'Document 3' },
						{ id: 20, name: 'Document 4' },
					]
				}
			]
		}
	});

	$.mockjax({
		url: api + 'documentRepo/*',
		responseTime: 1000,
		responseText: { result: '<h1>Lorem ipsum dolor</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit eros nunc, at facilisis leo varius vel. Pellentesque tincidunt sapien nec scelerisque cursus. Ut tortor ante, dapibus ut enim eget, imperdiet sodales libero. Etiam vitae enim lorem. In at nibh sit amet sapien vestibulum sagittis. Etiam consectetur magna sit amet posuere aliquet. Ut fringilla iaculis porttitor. Aenean magna tellus, porttitor a nisl ac, viverra mattis turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam facilisis commodo nisi id accumsan. Donec elementum porta odio ac iaculis. Curabitur in mollis nisi. Cras lacus massa, luctus nec lacinia quis, scelerisque et lacus. Nam sed feugiat purus. Cras consequat erat felis, vehicula porta tortor hendrerit eget. Curabitur quis nulla nec metus porta facilisis. Mauris ullamcorper vel quam nec faucibus. Duis scelerisque nisl sed mi lobortis luctus. Ut ut leo accumsan, pulvinar quam a, pulvinar sapien. Cras purus turpis, mattis eget tellus ut, commodo fringilla augue. Fusce tellus purus, porttitor et elit vel, fringilla venenatis ante. Etiam gravida nulla et augue viverra suscipit. Cras eu dignissim felis. Suspendisse potenti. Cras in sapien dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dignissim, tortor ut interdum consequat, libero justo congue tortor, non porta est risus ac metus. Morbi ac erat congue, imperdiet lectus ac, egestas elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin dignissim sodales elit, et mollis felis tristique ut. Nunc non cursus metus, a adipiscing nunc. Mauris consequat est vel quam fermentum, nec pulvinar metus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis purus non ante varius suscipit. Aenean consectetur nunc vel nisl facilisis, a semper nisl posuere.</p>' }
	});

	return DocumentRepo;

});