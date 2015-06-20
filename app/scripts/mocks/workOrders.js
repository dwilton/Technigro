define(['models/workOrders', 'api', 'jquery', 'mockjax'], function (WorkOrders, api, $) {

	'use strict';

	$.mockjax({
		url: api + 'technicians/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 1, name: 'David Wilton' },
				{ id: 2, name: 'Elicia Squires' }
			]
		}
	});

	$.mockjax({
		url: api + 'statuses/',
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
		url: api + 'workOrders/',
		responseTime: 1000,
		responseText: {
			result: [
				{
					'id': 1,
					'date': '25 May 2014',
					'client': 'Ac Mattis Consulting',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'New'
				},
				{
					'id': 2,
					'date': '3 Sep 2014',
					'client': 'Tincidunt Consulting',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 3,
					'date': '26 Jan 2014',
					'client': 'Maecenas Malesuada Fringilla Foundation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Approved'
				},
				{
					'id': 4,
					'date': '4 Oct 2013',
					'client': 'Felis Donec Tempor Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'New'
				},
				{
					'id': 5,
					'date': '1 Jan 2014',
					'client': 'Netus Et Malesuada Company',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'Submitted'
				},
				{
					'id': 6,
					'date': '24 Oct 2013',
					'client': 'Donec Tempus Incorporated',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 7,
					'date': '12 Nov 2013',
					'client': 'Ac Risus Morbi Incorporated',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 8,
					'date': '21 Jul 2014',
					'client': 'Eget Tincidunt Dui Corporation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Submitted'
				},
				{
					'id': 9,
					'date': '19 Apr 2014',
					'client': 'Lacus Vestibulum Lorem Foundation',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 10,
					'date': '4 Mar 2014',
					'client': 'Dolor Fusce LLC',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'New'
				},
				{
					'id': 11,
					'date': '6 Apr 2014',
					'client': 'Lobortis Ultrices Vivamus Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Submitted'
				},
				{
					'id': 12,
					'date': '2 Apr 2014',
					'client': 'Molestie PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Approved'
				},
				{
					'id': 13,
					'date': '11 Apr 2014',
					'client': 'Nunc Sed Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'New'
				},
				{
					'id': 14,
					'date': '13 Aug 2014',
					'client': 'Mauris Magna Duis PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'Submitted'
				},
				{
					'id': 15,
					'date': '3 Sep 2014',
					'client': 'Sem Molestie Sodales Institute',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Approved'
				},
				{
					'id': 16,
					'date': '29 Jul 2014',
					'client': 'Suspendisse Ac Metus Limited',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 17,
					'date': '21 Oct 2013',
					'client': 'Duis Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 18,
					'date': '9 Jun 2014',
					'client': 'Ornare In Incorporated',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 19,
					'date': '1 Aug 2014',
					'client': 'Interdum Ligula Ltd',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'New'
				},
				{
					'id': 20,
					'date': '16 Dec 2013',
					'client': 'Adipiscing Elit Aliquam Incorporated',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 21,
					'date': '21 Apr 2014',
					'client': 'Mollis Integer Institute',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Approved'
				},
				{
					'id': 22,
					'date': '24 Nov 2013',
					'client': 'A Enim Suspendisse Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 23,
					'date': '12 Nov 2013',
					'client': 'Volutpat Incorporated',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Submitted'
				},
				{
					'id': 24,
					'date': '30 Nov 2013',
					'client': 'At Velit Foundation',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 25,
					'date': '2 May 2014',
					'client': 'Sed Institute',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'New'
				},
				{
					'id': 26,
					'date': '27 Jun 2014',
					'client': 'Purus In Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 27,
					'date': '18 Jan 2014',
					'client': 'Tellus Inc.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Approved'
				},
				{
					'id': 28,
					'date': '29 Oct 2013',
					'client': 'Donec Ltd',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 29,
					'date': '25 Nov 2013',
					'client': 'Sit Amet Consectetuer Limited',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Submitted'
				},
				{
					'id': 30,
					'date': '23 Feb 2014',
					'client': 'Augue Corporation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 31,
					'date': '5 Nov 2013',
					'client': 'Odio Sagittis Semper Limited',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'New'
				},
				{
					'id': 32,
					'date': '19 Aug 2014',
					'client': 'Natoque PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Submitted'
				},
				{
					'id': 33,
					'date': '14 Oct 2013',
					'client': 'Adipiscing Elit Consulting',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'Approved'
				},
				{
					'id': 34,
					'date': '9 Dec 2013',
					'client': 'Vel Turpis LLP',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'New'
				},
				{
					'id': 35,
					'date': '21 Mar 2014',
					'client': 'In Tincidunt Congue PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Submitted'
				},
				{
					'id': 36,
					'date': '23 Jul 2014',
					'client': 'Dis LLP',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 37,
					'date': '2 Jan 2014',
					'client': 'Condimentum Donec At LLC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 38,
					'date': '26 Oct 2013',
					'client': 'Orci Ut Semper Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Submitted'
				},
				{
					'id': 39,
					'date': '1 May 2014',
					'client': 'Tincidunt Associates',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 40,
					'date': '9 Nov 2013',
					'client': 'Sit Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'New'
				},
				{
					'id': 41,
					'date': '27 Aug 2014',
					'client': 'Magna Nam Ligula Inc.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Submitted'
				},
				{
					'id': 42,
					'date': '26 Jun 2014',
					'client': 'Vivamus Limited',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 43,
					'date': '8 Mar 2014',
					'client': 'Commodo Auctor Velit LLC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'New'
				},
				{
					'id': 44,
					'date': '29 Apr 2014',
					'client': 'Magna Tellus Ltd',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Submitted'
				},
				{
					'id': 45,
					'date': '6 Apr 2014',
					'client': 'Litora Torquent Company',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 46,
					'date': '2 Sep 2014',
					'client': 'Vitae Aliquet Consulting',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 47,
					'date': '9 Aug 2014',
					'client': 'Montes Nascetur Foundation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 48,
					'date': '14 Jun 2014',
					'client': 'Et Libero Proin Incorporated',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'Approved'
				},
				{
					'id': 49,
					'date': '6 Jan 2014',
					'client': 'Odio LLC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'New'
				},
				{
					'id': 50,
					'date': '1 Sep 2014',
					'client': 'Arcu Et Associates',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'Submitted'
				},
				{
					'id': 51,
					'date': '21 May 2014',
					'client': 'Nisl Arcu Iaculis Institute',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 52,
					'date': '16 Jan 2014',
					'client': 'Malesuada Associates',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'New'
				},
				{
					'id': 53,
					'date': '8 May 2014',
					'client': 'Maecenas Iaculis Company',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 54,
					'date': '19 Apr 2014',
					'client': 'Tincidunt Congue Consulting',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 55,
					'date': '14 Nov 2013',
					'client': 'Urna Et LLP',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 56,
					'date': '29 Aug 2014',
					'client': 'Neque Limited',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'Submitted'
				},
				{
					'id': 57,
					'date': '18 Nov 2013',
					'client': 'Proin Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'Approved'
				},
				{
					'id': 58,
					'date': '13 May 2014',
					'client': 'Gravida Mauris Ut Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'New'
				},
				{
					'id': 59,
					'date': '29 Jun 2014',
					'client': 'Facilisis Non Bibendum Incorporated',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Submitted'
				},
				{
					'id': 60,
					'date': '17 Feb 2014',
					'client': 'Enim Institute',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 61,
					'date': '25 Nov 2013',
					'client': 'Dis Parturient Montes Associates',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 62,
					'date': '4 Nov 2013',
					'client': 'Vel Sapien Imperdiet Foundation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'Submitted'
				},
				{
					'id': 63,
					'date': '13 May 2014',
					'client': 'Tristique Senectus Et Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 64,
					'date': '20 Aug 2014',
					'client': 'A Mi LLC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 65,
					'date': '17 Jan 2014',
					'client': 'Aenean Sed PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 66,
					'date': '10 Jul 2014',
					'client': 'Lorem Ipsum Corporation',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 67,
					'date': '10 Apr 2014',
					'client': 'Auctor Mauris PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 68,
					'date': '23 Nov 2013',
					'client': 'Risus Nunc Associates',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 69,
					'date': '11 Jun 2014',
					'client': 'Cursus Luctus Foundation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'Approved'
				},
				{
					'id': 70,
					'date': '14 Nov 2013',
					'client': 'Fermentum Fermentum Industries',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'New'
				},
				{
					'id': 71,
					'date': '14 Oct 2013',
					'client': 'Lectus Pede Et Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'Submitted'
				},
				{
					'id': 72,
					'date': '4 Jun 2014',
					'client': 'Viverra Donec PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 73,
					'date': '15 Sep 2014',
					'client': 'Dictum Cursus Nunc Foundation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'New'
				},
				{
					'id': 74,
					'date': '24 Oct 2013',
					'client': 'Pulvinar Arcu Et PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 75,
					'date': '30 Aug 2014',
					'client': 'Velit Dui PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 76,
					'date': '7 Oct 2013',
					'client': 'Molestie Tortor Consulting',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'New'
				},
				{
					'id': 77,
					'date': '3 Dec 2013',
					'client': 'Mauris Institute',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'Submitted'
				},
				{
					'id': 78,
					'date': '25 Feb 2014',
					'client': 'Lacinia Vitae Associates',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 79,
					'date': '18 Aug 2014',
					'client': 'Ipsum Nunc Id Ltd',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'New'
				},
				{
					'id': 80,
					'date': '8 May 2014',
					'client': 'Lobortis Quis Pede Foundation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 81,
					'date': '18 Jul 2014',
					'client': 'Malesuada Fames PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'Approved'
				},
				{
					'id': 82,
					'date': '3 Apr 2014',
					'client': 'Volutpat Nulla LLP',
					'jobName': 'Cycle Mowing',
					'jobType': 'Roads & Landscapes',
					'status': 'New'
				},
				{
					'id': 83,
					'date': '14 Jul 2014',
					'client': 'Donec Corporation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 84,
					'date': '1 Apr 2014',
					'client': 'Aliquam Inc.',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 85,
					'date': '14 Oct 2013',
					'client': 'Ipsum Ltd',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'New'
				},
				{
					'id': 86,
					'date': '7 Nov 2013',
					'client': 'Cras Pellentesque Sed Company',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'Submitted'
				},
				{
					'id': 87,
					'date': '8 Jan 2014',
					'client': 'Donec Egestas Aliquam Foundation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'Approved'
				},
				{
					'id': 88,
					'date': '29 Oct 2013',
					'client': 'Nisi LLC',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'New'
				},
				{
					'id': 89,
					'date': '30 May 2014',
					'client': 'Mauris Sapien Associates',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 90,
					'date': '7 Jan 2014',
					'client': 'Risus Donec LLP',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 91,
					'date': '12 Feb 2014',
					'client': 'Vehicula Pellentesque Tincidunt Corporation',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'New'
				},
				{
					'id': 92,
					'date': '26 Nov 2013',
					'client': 'Tempus Mauris Associates',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 93,
					'date': '19 May 2014',
					'client': 'Sem Molestie Institute',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'Approved'
				},
				{
					'id': 94,
					'date': '23 Aug 2014',
					'client': 'Odio Auctor Vitae PC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'New'
				},
				{
					'id': 95,
					'date': '16 Sep 2014',
					'client': 'Vitae Dolor Donec Ltd',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 96,
					'date': '28 Apr 2014',
					'client': 'Dolor Sit Corp.',
					'jobName': 'Cycle Mowing',
					'jobType': 'Turf',
					'status': 'Approved'
				},
				{
					'id': 97,
					'date': '7 Nov 2013',
					'client': 'Torquent Institute',
					'jobName': 'Cycle Mowing',
					'jobType': 'Natural Areas Job',
					'status': 'New'
				},
				{
					'id': 98,
					'date': '11 Feb 2014',
					'client': 'Mollis Nec Consulting',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Submitted'
				},
				{
					'id': 99,
					'date': '2 May 2014',
					'client': 'Metus LLC',
					'jobName': 'Cycle Mowing',
					'jobType': 'Major Project',
					'status': 'Approved'
				},
				{
					'id': 100,
					'date': '31 Aug 2014',
					'client': 'Orci Luctus Et Inc.',
					'jobName': 'Cycle Mowing',
					'jobType': 'GCCC',
					'status': 'New'
				}
			]
		}
	});

	return WorkOrders;

});