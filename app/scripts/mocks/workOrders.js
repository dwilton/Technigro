define(['jquery', 'mockjax'], function($) {

	'use strict';

	$.mockjax({
		url: '/api/technicians/',
		responseTime: 1000,
		responseText: {
			result: [
				{ id: 0, name: 'All' },
				{ id: 1, name: 'David Wilton' },
				{ id: 2, name: 'Elicia Squires' }
			]
		}
	});

	$.mockjax({
		url: '/api/statusTypes/',
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
		url: '/api/workOrders/',
		responseTime: 1000,
		responseText: {
			result: [
				{
					'id': 1,
					'date': '25 May 2014',
					'client': 'Ac Mattis Consulting',
					'job': 'Cycle Mowing',
					'technician': 'Kaseem I. Payne',
					'status': 'New'
				},
				{
					'id': 2,
					'date': '3 Sep 2014',
					'client': 'Tincidunt Consulting',
					'job': 'Cycle Mowing',
					'technician': 'Kaden A. King',
					'status': 'Submitted'
				},
				{
					'id': 3,
					'date': '26 Jan 2014',
					'client': 'Maecenas Malesuada Fringilla Foundation',
					'job': 'Cycle Mowing',
					'technician': 'Cullen J. Alvarado',
					'status': 'Approved'
				},
				{
					'id': 4,
					'date': '4 Oct 2013',
					'client': 'Felis Donec Tempor Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Jescie M. Schultz',
					'status': 'New'
				},
				{
					'id': 5,
					'date': '1 Jan 2014',
					'client': 'Netus Et Malesuada Company',
					'job': 'Cycle Mowing',
					'technician': 'Ava J. Bowers',
					'status': 'Submitted'
				},
				{
					'id': 6,
					'date': '24 Oct 2013',
					'client': 'Donec Tempus Incorporated',
					'job': 'Cycle Mowing',
					'technician': 'Macon A. Cobb',
					'status': 'Approved'
				},
				{
					'id': 7,
					'date': '12 Nov 2013',
					'client': 'Ac Risus Morbi Incorporated',
					'job': 'Cycle Mowing',
					'technician': 'Tamekah U. Soto',
					'status': 'New'
				},
				{
					'id': 8,
					'date': '21 Jul 2014',
					'client': 'Eget Tincidunt Dui Corporation',
					'job': 'Cycle Mowing',
					'technician': 'Lavinia F. Simpson',
					'status': 'Submitted'
				},
				{
					'id': 9,
					'date': '19 Apr 2014',
					'client': 'Lacus Vestibulum Lorem Foundation',
					'job': 'Cycle Mowing',
					'technician': 'Anika N. Carrillo',
					'status': 'Approved'
				},
				{
					'id': 10,
					'date': '4 Mar 2014',
					'client': 'Dolor Fusce LLC',
					'job': 'Cycle Mowing',
					'technician': 'Linda L. Berg',
					'status': 'New'
				},
				{
					'id': 11,
					'date': '6 Apr 2014',
					'client': 'Lobortis Ultrices Vivamus Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Driscoll H. Frost',
					'status': 'Submitted'
				},
				{
					'id': 12,
					'date': '2 Apr 2014',
					'client': 'Molestie PC',
					'job': 'Cycle Mowing',
					'technician': 'Lee N. Carlson',
					'status': 'Approved'
				},
				{
					'id': 13,
					'date': '11 Apr 2014',
					'client': 'Nunc Sed Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Kyla Z. Miller',
					'status': 'New'
				},
				{
					'id': 14,
					'date': '13 Aug 2014',
					'client': 'Mauris Magna Duis PC',
					'job': 'Cycle Mowing',
					'technician': 'Isadora U. Mercer',
					'status': 'Submitted'
				},
				{
					'id': 15,
					'date': '3 Sep 2014',
					'client': 'Sem Molestie Sodales Institute',
					'job': 'Cycle Mowing',
					'technician': 'Ferris W. Richards',
					'status': 'Approved'
				},
				{
					'id': 16,
					'date': '29 Jul 2014',
					'client': 'Suspendisse Ac Metus Limited',
					'job': 'Cycle Mowing',
					'technician': 'Sylvia W. Ashley',
					'status': 'New'
				},
				{
					'id': 17,
					'date': '21 Oct 2013',
					'client': 'Duis Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Sandra G. Terry',
					'status': 'Submitted'
				},
				{
					'id': 18,
					'date': '9 Jun 2014',
					'client': 'Ornare In Incorporated',
					'job': 'Cycle Mowing',
					'technician': 'Jenna Y. Shaffer',
					'status': 'Approved'
				},
				{
					'id': 19,
					'date': '1 Aug 2014',
					'client': 'Interdum Ligula Ltd',
					'job': 'Cycle Mowing',
					'technician': 'Bianca D. Ballard',
					'status': 'New'
				},
				{
					'id': 20,
					'date': '16 Dec 2013',
					'client': 'Adipiscing Elit Aliquam Incorporated',
					'job': 'Cycle Mowing',
					'technician': 'Murphy B. Franks',
					'status': 'Submitted'
				},
				{
					'id': 21,
					'date': '21 Apr 2014',
					'client': 'Mollis Integer Institute',
					'job': 'Cycle Mowing',
					'technician': 'Audrey V. Whitehead',
					'status': 'Approved'
				},
				{
					'id': 22,
					'date': '24 Nov 2013',
					'client': 'A Enim Suspendisse Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Amery A. William',
					'status': 'New'
				},
				{
					'id': 23,
					'date': '12 Nov 2013',
					'client': 'Volutpat Incorporated',
					'job': 'Cycle Mowing',
					'technician': 'Lucius D. Romero',
					'status': 'Submitted'
				},
				{
					'id': 24,
					'date': '30 Nov 2013',
					'client': 'At Velit Foundation',
					'job': 'Cycle Mowing',
					'technician': 'Amber T. Goodman',
					'status': 'Approved'
				},
				{
					'id': 25,
					'date': '2 May 2014',
					'client': 'Sed Institute',
					'job': 'Cycle Mowing',
					'technician': 'Isadora B. Walton',
					'status': 'New'
				},
				{
					'id': 26,
					'date': '27 Jun 2014',
					'client': 'Purus In Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Elaine C. Lynn',
					'status': 'Submitted'
				},
				{
					'id': 27,
					'date': '18 Jan 2014',
					'client': 'Tellus Inc.',
					'job': 'Cycle Mowing',
					'technician': 'Cruz F. Leonard',
					'status': 'Approved'
				},
				{
					'id': 28,
					'date': '29 Oct 2013',
					'client': 'Donec Ltd',
					'job': 'Cycle Mowing',
					'technician': 'Kerry I. Horton',
					'status': 'New'
				},
				{
					'id': 29,
					'date': '25 Nov 2013',
					'client': 'Sit Amet Consectetuer Limited',
					'job': 'Cycle Mowing',
					'technician': 'Harrison X. Baldwin',
					'status': 'Submitted'
				},
				{
					'id': 30,
					'date': '23 Feb 2014',
					'client': 'Augue Corporation',
					'job': 'Cycle Mowing',
					'technician': 'Stewart D. Moon',
					'status': 'Approved'
				},
				{
					'id': 31,
					'date': '5 Nov 2013',
					'client': 'Odio Sagittis Semper Limited',
					'job': 'Cycle Mowing',
					'technician': 'Anika D. Hewitt',
					'status': 'New'
				},
				{
					'id': 32,
					'date': '19 Aug 2014',
					'client': 'Natoque PC',
					'job': 'Cycle Mowing',
					'technician': 'Hasad E. Pruitt',
					'status': 'Submitted'
				},
				{
					'id': 33,
					'date': '14 Oct 2013',
					'client': 'Adipiscing Elit Consulting',
					'job': 'Cycle Mowing',
					'technician': 'Britanni L. Lester',
					'status': 'Approved'
				},
				{
					'id': 34,
					'date': '9 Dec 2013',
					'client': 'Vel Turpis LLP',
					'job': 'Cycle Mowing',
					'technician': 'Aiko L. Mccormick',
					'status': 'New'
				},
				{
					'id': 35,
					'date': '21 Mar 2014',
					'client': 'In Tincidunt Congue PC',
					'job': 'Cycle Mowing',
					'technician': 'Blythe H. Mcgowan',
					'status': 'Submitted'
				},
				{
					'id': 36,
					'date': '23 Jul 2014',
					'client': 'Dis LLP',
					'job': 'Cycle Mowing',
					'technician': 'Ruby V. Mayer',
					'status': 'Approved'
				},
				{
					'id': 37,
					'date': '2 Jan 2014',
					'client': 'Condimentum Donec At LLC',
					'job': 'Cycle Mowing',
					'technician': 'Len C. Bryan',
					'status': 'New'
				},
				{
					'id': 38,
					'date': '26 Oct 2013',
					'client': 'Orci Ut Semper Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Owen Q. Shelton',
					'status': 'Submitted'
				},
				{
					'id': 39,
					'date': '1 May 2014',
					'client': 'Tincidunt Associates',
					'job': 'Cycle Mowing',
					'technician': 'Linda K. Foreman',
					'status': 'Approved'
				},
				{
					'id': 40,
					'date': '9 Nov 2013',
					'client': 'Sit Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Noel S. Gomez',
					'status': 'New'
				},
				{
					'id': 41,
					'date': '27 Aug 2014',
					'client': 'Magna Nam Ligula Inc.',
					'job': 'Cycle Mowing',
					'technician': 'Idola V. Hart',
					'status': 'Submitted'
				},
				{
					'id': 42,
					'date': '26 Jun 2014',
					'client': 'Vivamus Limited',
					'job': 'Cycle Mowing',
					'technician': 'Lucy Q. Ware',
					'status': 'Approved'
				},
				{
					'id': 43,
					'date': '8 Mar 2014',
					'client': 'Commodo Auctor Velit LLC',
					'job': 'Cycle Mowing',
					'technician': 'Regina F. Hodge',
					'status': 'New'
				},
				{
					'id': 44,
					'date': '29 Apr 2014',
					'client': 'Magna Tellus Ltd',
					'job': 'Cycle Mowing',
					'technician': 'Dalton U. Cortez',
					'status': 'Submitted'
				},
				{
					'id': 45,
					'date': '6 Apr 2014',
					'client': 'Litora Torquent Company',
					'job': 'Cycle Mowing',
					'technician': 'Quail J. Williams',
					'status': 'Approved'
				},
				{
					'id': 46,
					'date': '2 Sep 2014',
					'client': 'Vitae Aliquet Consulting',
					'job': 'Cycle Mowing',
					'technician': 'Oleg I. Harrison',
					'status': 'New'
				},
				{
					'id': 47,
					'date': '9 Aug 2014',
					'client': 'Montes Nascetur Foundation',
					'job': 'Cycle Mowing',
					'technician': 'Aurelia Q. Dunn',
					'status': 'Submitted'
				},
				{
					'id': 48,
					'date': '14 Jun 2014',
					'client': 'Et Libero Proin Incorporated',
					'job': 'Cycle Mowing',
					'technician': 'Avram T. Reynolds',
					'status': 'Approved'
				},
				{
					'id': 49,
					'date': '6 Jan 2014',
					'client': 'Odio LLC',
					'job': 'Cycle Mowing',
					'technician': 'Phyllis O. Hendrix',
					'status': 'New'
				},
				{
					'id': 50,
					'date': '1 Sep 2014',
					'client': 'Arcu Et Associates',
					'job': 'Cycle Mowing',
					'technician': 'Kirsten U. Sampson',
					'status': 'Submitted'
				},
				{
					'id': 51,
					'date': '21 May 2014',
					'client': 'Nisl Arcu Iaculis Institute',
					'job': 'Cycle Mowing',
					'technician': 'Slade E. Armstrong',
					'status': 'Approved'
				},
				{
					'id': 52,
					'date': '16 Jan 2014',
					'client': 'Malesuada Associates',
					'job': 'Cycle Mowing',
					'technician': 'Tanisha B. Moon',
					'status': 'New'
				},
				{
					'id': 53,
					'date': '8 May 2014',
					'client': 'Maecenas Iaculis Company',
					'job': 'Cycle Mowing',
					'technician': 'Shea U. Horne',
					'status': 'Submitted'
				},
				{
					'id': 54,
					'date': '19 Apr 2014',
					'client': 'Tincidunt Congue Consulting',
					'job': 'Cycle Mowing',
					'technician': 'Whilemina J. Jensen',
					'status': 'Approved'
				},
				{
					'id': 55,
					'date': '14 Nov 2013',
					'client': 'Urna Et LLP',
					'job': 'Cycle Mowing',
					'technician': 'Flynn G. Martinez',
					'status': 'New'
				},
				{
					'id': 56,
					'date': '29 Aug 2014',
					'client': 'Neque Limited',
					'job': 'Cycle Mowing',
					'technician': 'Tamekah O. Gonzalez',
					'status': 'Submitted'
				},
				{
					'id': 57,
					'date': '18 Nov 2013',
					'client': 'Proin Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Skyler T. Hopper',
					'status': 'Approved'
				},
				{
					'id': 58,
					'date': '13 May 2014',
					'client': 'Gravida Mauris Ut Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Xanthus O. Sawyer',
					'status': 'New'
				},
				{
					'id': 59,
					'date': '29 Jun 2014',
					'client': 'Facilisis Non Bibendum Incorporated',
					'job': 'Cycle Mowing',
					'technician': 'Palmer T. Hale',
					'status': 'Submitted'
				},
				{
					'id': 60,
					'date': '17 Feb 2014',
					'client': 'Enim Institute',
					'job': 'Cycle Mowing',
					'technician': 'Kimberly I. Crane',
					'status': 'Approved'
				},
				{
					'id': 61,
					'date': '25 Nov 2013',
					'client': 'Dis Parturient Montes Associates',
					'job': 'Cycle Mowing',
					'technician': 'Fletcher E. Dalton',
					'status': 'New'
				},
				{
					'id': 62,
					'date': '4 Nov 2013',
					'client': 'Vel Sapien Imperdiet Foundation',
					'job': 'Cycle Mowing',
					'technician': 'Zachary E. Caldwell',
					'status': 'Submitted'
				},
				{
					'id': 63,
					'date': '13 May 2014',
					'client': 'Tristique Senectus Et Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Selma Y. Ball',
					'status': 'Approved'
				},
				{
					'id': 64,
					'date': '20 Aug 2014',
					'client': 'A Mi LLC',
					'job': 'Cycle Mowing',
					'technician': 'Melodie T. Little',
					'status': 'New'
				},
				{
					'id': 65,
					'date': '17 Jan 2014',
					'client': 'Aenean Sed PC',
					'job': 'Cycle Mowing',
					'technician': 'Cassandra V. Crane',
					'status': 'Submitted'
				},
				{
					'id': 66,
					'date': '10 Jul 2014',
					'client': 'Lorem Ipsum Corporation',
					'job': 'Cycle Mowing',
					'technician': 'Eugenia K. Galloway',
					'status': 'Approved'
				},
				{
					'id': 67,
					'date': '10 Apr 2014',
					'client': 'Auctor Mauris PC',
					'job': 'Cycle Mowing',
					'technician': 'Chandler U. Cohen',
					'status': 'New'
				},
				{
					'id': 68,
					'date': '23 Nov 2013',
					'client': 'Risus Nunc Associates',
					'job': 'Cycle Mowing',
					'technician': 'James X. Reese',
					'status': 'Submitted'
				},
				{
					'id': 69,
					'date': '11 Jun 2014',
					'client': 'Cursus Luctus Foundation',
					'job': 'Cycle Mowing',
					'technician': 'Rafael F. Sanders',
					'status': 'Approved'
				},
				{
					'id': 70,
					'date': '14 Nov 2013',
					'client': 'Fermentum Fermentum Industries',
					'job': 'Cycle Mowing',
					'technician': 'Calista C. Harrison',
					'status': 'New'
				},
				{
					'id': 71,
					'date': '14 Oct 2013',
					'client': 'Lectus Pede Et Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Camden K. Conner',
					'status': 'Submitted'
				},
				{
					'id': 72,
					'date': '4 Jun 2014',
					'client': 'Viverra Donec PC',
					'job': 'Cycle Mowing',
					'technician': 'Chiquita U. Short',
					'status': 'Approved'
				},
				{
					'id': 73,
					'date': '15 Sep 2014',
					'client': 'Dictum Cursus Nunc Foundation',
					'job': 'Cycle Mowing',
					'technician': 'Sean M. Morales',
					'status': 'New'
				},
				{
					'id': 74,
					'date': '24 Oct 2013',
					'client': 'Pulvinar Arcu Et PC',
					'job': 'Cycle Mowing',
					'technician': 'Honorato L. Schmidt',
					'status': 'Submitted'
				},
				{
					'id': 75,
					'date': '30 Aug 2014',
					'client': 'Velit Dui PC',
					'job': 'Cycle Mowing',
					'technician': 'Kareem B. Keller',
					'status': 'Approved'
				},
				{
					'id': 76,
					'date': '7 Oct 2013',
					'client': 'Molestie Tortor Consulting',
					'job': 'Cycle Mowing',
					'technician': 'Nehru D. Mills',
					'status': 'New'
				},
				{
					'id': 77,
					'date': '3 Dec 2013',
					'client': 'Mauris Institute',
					'job': 'Cycle Mowing',
					'technician': 'Oliver Q. Green',
					'status': 'Submitted'
				},
				{
					'id': 78,
					'date': '25 Feb 2014',
					'client': 'Lacinia Vitae Associates',
					'job': 'Cycle Mowing',
					'technician': 'Dara M. Cochran',
					'status': 'Approved'
				},
				{
					'id': 79,
					'date': '18 Aug 2014',
					'client': 'Ipsum Nunc Id Ltd',
					'job': 'Cycle Mowing',
					'technician': 'Galvin I. Fuentes',
					'status': 'New'
				},
				{
					'id': 80,
					'date': '8 May 2014',
					'client': 'Lobortis Quis Pede Foundation',
					'job': 'Cycle Mowing',
					'technician': 'Indigo E. Hutchinson',
					'status': 'Submitted'
				},
				{
					'id': 81,
					'date': '18 Jul 2014',
					'client': 'Malesuada Fames PC',
					'job': 'Cycle Mowing',
					'technician': 'Illiana G. Rice',
					'status': 'Approved'
				},
				{
					'id': 82,
					'date': '3 Apr 2014',
					'client': 'Volutpat Nulla LLP',
					'job': 'Cycle Mowing',
					'technician': 'Graham U. Mckay',
					'status': 'New'
				},
				{
					'id': 83,
					'date': '14 Jul 2014',
					'client': 'Donec Corporation',
					'job': 'Cycle Mowing',
					'technician': 'Salvador I. Grimes',
					'status': 'Submitted'
				},
				{
					'id': 84,
					'date': '1 Apr 2014',
					'client': 'Aliquam Inc.',
					'job': 'Cycle Mowing',
					'technician': 'Reuben O. Hicks',
					'status': 'Approved'
				},
				{
					'id': 85,
					'date': '14 Oct 2013',
					'client': 'Ipsum Ltd',
					'job': 'Cycle Mowing',
					'technician': 'Rhonda Z. Miles',
					'status': 'New'
				},
				{
					'id': 86,
					'date': '7 Nov 2013',
					'client': 'Cras Pellentesque Sed Company',
					'job': 'Cycle Mowing',
					'technician': 'Logan U. Little',
					'status': 'Submitted'
				},
				{
					'id': 87,
					'date': '8 Jan 2014',
					'client': 'Donec Egestas Aliquam Foundation',
					'job': 'Cycle Mowing',
					'technician': 'Evan G. Hurley',
					'status': 'Approved'
				},
				{
					'id': 88,
					'date': '29 Oct 2013',
					'client': 'Nisi LLC',
					'job': 'Cycle Mowing',
					'technician': 'Daria T. Fletcher',
					'status': 'New'
				},
				{
					'id': 89,
					'date': '30 May 2014',
					'client': 'Mauris Sapien Associates',
					'job': 'Cycle Mowing',
					'technician': 'Rhiannon G. Hampton',
					'status': 'Submitted'
				},
				{
					'id': 90,
					'date': '7 Jan 2014',
					'client': 'Risus Donec LLP',
					'job': 'Cycle Mowing',
					'technician': 'Sharon C. Franks',
					'status': 'Approved'
				},
				{
					'id': 91,
					'date': '12 Feb 2014',
					'client': 'Vehicula Pellentesque Tincidunt Corporation',
					'job': 'Cycle Mowing',
					'technician': 'Seth T. Strickland',
					'status': 'New'
				},
				{
					'id': 92,
					'date': '26 Nov 2013',
					'client': 'Tempus Mauris Associates',
					'job': 'Cycle Mowing',
					'technician': 'Ethan H. Bennett',
					'status': 'Submitted'
				},
				{
					'id': 93,
					'date': '19 May 2014',
					'client': 'Sem Molestie Institute',
					'job': 'Cycle Mowing',
					'technician': 'Xander B. Hendricks',
					'status': 'Approved'
				},
				{
					'id': 94,
					'date': '23 Aug 2014',
					'client': 'Odio Auctor Vitae PC',
					'job': 'Cycle Mowing',
					'technician': 'Lacy A. Rivas',
					'status': 'New'
				},
				{
					'id': 95,
					'date': '16 Sep 2014',
					'client': 'Vitae Dolor Donec Ltd',
					'job': 'Cycle Mowing',
					'technician': 'Edward V. Wilkerson',
					'status': 'Submitted'
				},
				{
					'id': 96,
					'date': '28 Apr 2014',
					'client': 'Dolor Sit Corp.',
					'job': 'Cycle Mowing',
					'technician': 'Kylynn Z. Miles',
					'status': 'Approved'
				},
				{
					'id': 97,
					'date': '7 Nov 2013',
					'client': 'Torquent Institute',
					'job': 'Cycle Mowing',
					'technician': 'Brielle U. Mathews',
					'status': 'New'
				},
				{
					'id': 98,
					'date': '11 Feb 2014',
					'client': 'Mollis Nec Consulting',
					'job': 'Cycle Mowing',
					'technician': 'Chancellor J. Bruce',
					'status': 'Submitted'
				},
				{
					'id': 99,
					'date': '2 May 2014',
					'client': 'Metus LLC',
					'job': 'Cycle Mowing',
					'technician': 'Sonya D. Hayes',
					'status': 'Approved'
				},
				{
					'id': 100,
					'date': '31 Aug 2014',
					'client': 'Orci Luctus Et Inc.',
					'job': 'Cycle Mowing',
					'technician': 'Hiroko F. Landry',
					'status': 'New'
				}
			]
		}
	});

});