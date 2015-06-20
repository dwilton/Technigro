define(['models/workOrder', 'jquery', 'mockjax'], function (WorkOrder, $) {

	'use strict';

	$.mockjax({
		url: '/api/workOrder/',
		data: { typeid: 1 },
		responseTime: 1000,
		responseText: {
			result: {

				typeId: 1,
				archived: false,

				details: {

					treatmentDate: '',
					clientId: 0,
					clientName: '',
					jobName: '',
					statusId: 1,
					statusName: 'New',

					address: '',
					jobNumber: '',
					orderNumber: '',
					date: '',
					ubdEditionId: 0,
					ubdEditionName: '',
					map: '',
					ref: '',

					contactName: '',
					phone1: '',
					phone2: '',
				},

				documents: [
					{ id: 0, name: '' }
				],

				labour: {
					timeAllocated: 6,
					staff: 4,
					area: 100,
					checklist: {
						take5: false,
						taskConfident: false,
						incidentReportGuidelines: false
					},
					criticalInfo: ''
				},

				schedule: [
					{ id: 1, name: 'Station Rd', edit: false, done: false },
					{ id: 2, name: 'Lindsay Rd', edit: false, done: false },
					{ id: 3, name: 'Williamina Crt', edit: false, done: false },
					{ id: 4, name: 'Harris Ave', edit: false, done: false },
					{ id: 5, name: 'Peterson Rd', edit: false, done: false },
					{ id: 6, name: 'Ogg Rd', edit: false, done: false },
					{ id: 7, name: 'Donn Kerr Memorial Dr', edit: false, done: false },
					{ id: 8, name: 'Government St', edit: false, done: false },
					{ id: 9, name: 'Maine Tce', edit: false, done: false },
					{ id: 10, name: 'Zammit St', edit: false, done: false },
					{ id: 11, name: 'Old Bay Rd', edit: false, done: false },
					{ id: 12, name: 'Hornibrook Esp', edit: false, done: false },
					{ id: 13, name: 'Silcock St', edit: false, done: false },
					{ id: 14, name: 'Cnr Oxley Ave and Mabel St', edit: false, done: false },
					{ id: 15, name: 'Boardman Rd', edit: false, done: false },
					{ id: 16, name: 'George St', edit: false, done: false },
					{ id: 17, name: 'Maine Rd ', edit: false, done: false },
					{ id: 18, name: 'Henzell St ', edit: false, done: false },
					{ id: 19, name: 'McGahey St', edit: false, done: false },
					{ id: 20, name: 'Gardenia Pde', edit: false, done: false },
					{ id: 21, name: 'Tuckeroo Dr', edit: false, done: false },
					{ id: 22, name: 'Rogers St', edit: false, done: false },
					{ id: 23, name: 'First Ave', edit: false, done: false },
					{ id: 24, name: 'Morayfield Rd', edit: false, done: false },
					{ id: 25, name: 'Dances Rd', edit: false, done: false },
					{ id: 26, name: 'Devine Court', edit: false, done: false },
					{ id: 27, name: 'Rose Creek Rd', edit: false, done: false },
					{ id: 28, name: 'Grant Rd', edit: false, done: false },
					{ id: 29, name: 'Caboolture River Rd', edit: false, done: false },
					{ id: 30, name: 'Bestmann Rd East', edit: false, done: false },
					{ id: 31, name: 'Campbells Pocket Rd', edit: false, done: false },
					{ id: 32, name: 'Neurum Rd', edit: false, done: false },
					{ id: 33, name: 'Samsonvale Rd', edit: false, done: false },
					{ id: 34, name: 'Bells Pocket Rd', edit: false, done: false },
					{ id: 35, name: 'Drapers Rd', edit: false, done: false },
					{ id: 36, name: 'Marsden Rd', edit: false, done: false },
					{ id: 37, name: 'Mundin St', edit: false, done: false },
					{ id: 38, name: 'The Jinker Track', edit: false, done: false },
					{ id: 39, name: 'Jacaranda Dr', edit: false, done: false },
					{ id: 40, name: 'Main St', edit: false, done: false },
					{ id: 41, name: 'Mount Samson Rd', edit: false, done: false },
					{ id: 42, name: 'Richards Rd', edit: false, done: false },
					{ id: 43, name: 'Oleria St West', edit: false, done: false },
					{ id: 44, name: 'Francis Rd', edit: false, done: false }
				],

				invoicing: {
					invoiceNumber: '',
					invoiceDate: '',
					invoicedTypeId: 0,
					invoiceTotal: '',
					invoicingNotes: '',
					quoteTypeId: 0,
					quoteNumber: ''
				},

				landAccess: {
					questions: {
						lloAvailable: false,
						siteIssues: false,
						contactingTeamUnderstand: false,
						proceedWorksProgram: false
					}
				},

				images: [],

				// Addables
				technicians: [
					{ id: 0, name: '' }
				],

				jobInstructions: [
					{ id: 0, name: '', price: 0 }
				],

				equipment: [
					{ id: 0, name: '' }
				],

				products: [
					{ id: 0, name: '', actual: 0, water: 0, area: 0, total: 0 }
				],

				dailyReportCompleteWork: [
					{ id: 0, stateId: 0, area: 0, hours: 0 }
				],

				dailyReportCompletePiplineWork: [
					{ id: 0, parcel: 0, fromKPI: 0, toKPI: 0, dailyQty: 0 }
				],

				dailyReportPersonal: [
					{ id: 0, name: '', hoursWorked: 0, hoursStandby: 0 }
				],

				dailyReportEquipment: [
					{ id: 0, hoursWorked: 0, hoursStandby: 0 }
				]

			}
		}
	});

	$.mockjax({
		url: '/api/workOrder/',
		data: { typeid: 2 },
		responseTime: 1000,
		responseText: {
			result: {

				typeId: 2,
				archived: false,

				details: {

					treatmentDate: '',
					clientId: 0,
					clientName: '',
					jobName: '',
					statusId: 1,
					statusName: 'New',

					address: '',
					jobNumber: '',
					orderNumber: '',
					date: '',
					ubdEditionId: 0,
					ubdEditionName: '',
					map: '',
					ref: '',

					contactName: '',
					phone1: '',
					phone2: '',
				},

				documents: [
					{ id: 0, name: '' }
				],

				labour: {
					timeAllocated: 6,
					staff: 4,
					area: 100,
					checklist: {
						take5: false,
						taskConfident: false,
						incidentReportGuidelines: false
					},
					criticalInfo: ''
				},

				schedule: [
					{ id: 1, name: 'Station Rd', edit: false, done: false },
					{ id: 2, name: 'Lindsay Rd', edit: false, done: false },
					{ id: 3, name: 'Williamina Crt', edit: false, done: false },
					{ id: 4, name: 'Harris Ave', edit: false, done: false },
					{ id: 5, name: 'Peterson Rd', edit: false, done: false },
					{ id: 6, name: 'Ogg Rd', edit: false, done: false },
					{ id: 7, name: 'Donn Kerr Memorial Dr', edit: false, done: false },
					{ id: 8, name: 'Government St', edit: false, done: false },
					{ id: 9, name: 'Maine Tce', edit: false, done: false },
					{ id: 10, name: 'Zammit St', edit: false, done: false },
					{ id: 11, name: 'Old Bay Rd', edit: false, done: false },
					{ id: 12, name: 'Hornibrook Esp', edit: false, done: false },
					{ id: 13, name: 'Silcock St', edit: false, done: false },
					{ id: 14, name: 'Cnr Oxley Ave and Mabel St', edit: false, done: false },
					{ id: 15, name: 'Boardman Rd', edit: false, done: false },
					{ id: 16, name: 'George St', edit: false, done: false },
					{ id: 17, name: 'Maine Rd ', edit: false, done: false },
					{ id: 18, name: 'Henzell St ', edit: false, done: false },
					{ id: 19, name: 'McGahey St', edit: false, done: false },
					{ id: 20, name: 'Gardenia Pde', edit: false, done: false },
					{ id: 21, name: 'Tuckeroo Dr', edit: false, done: false },
					{ id: 22, name: 'Rogers St', edit: false, done: false },
					{ id: 23, name: 'First Ave', edit: false, done: false },
					{ id: 24, name: 'Morayfield Rd', edit: false, done: false },
					{ id: 25, name: 'Dances Rd', edit: false, done: false },
					{ id: 26, name: 'Devine Court', edit: false, done: false },
					{ id: 27, name: 'Rose Creek Rd', edit: false, done: false },
					{ id: 28, name: 'Grant Rd', edit: false, done: false },
					{ id: 29, name: 'Caboolture River Rd', edit: false, done: false },
					{ id: 30, name: 'Bestmann Rd East', edit: false, done: false },
					{ id: 31, name: 'Campbells Pocket Rd', edit: false, done: false },
					{ id: 32, name: 'Neurum Rd', edit: false, done: false },
					{ id: 33, name: 'Samsonvale Rd', edit: false, done: false },
					{ id: 34, name: 'Bells Pocket Rd', edit: false, done: false },
					{ id: 35, name: 'Drapers Rd', edit: false, done: false },
					{ id: 36, name: 'Marsden Rd', edit: false, done: false },
					{ id: 37, name: 'Mundin St', edit: false, done: false },
					{ id: 38, name: 'The Jinker Track', edit: false, done: false },
					{ id: 39, name: 'Jacaranda Dr', edit: false, done: false },
					{ id: 40, name: 'Main St', edit: false, done: false },
					{ id: 41, name: 'Mount Samson Rd', edit: false, done: false },
					{ id: 42, name: 'Richards Rd', edit: false, done: false },
					{ id: 43, name: 'Oleria St West', edit: false, done: false },
					{ id: 44, name: 'Francis Rd', edit: false, done: false }
				],

				invoicing: {
					invoiceNumber: '',
					invoiceDate: '',
					invoicedTypeId: 0,
					invoiceTotal: '',
					invoicingNotes: '',
					quoteTypeId: 0,
					quoteNumber: ''
				},

				landAccess: {
					questions: {
						lloAvailable: false,
						siteIssues: false,
						contactingTeamUnderstand: false,
						proceedWorksProgram: false
					}
				},

				images: [],

				// Addables
				technicians: [
					{ id: 0, name: '' }
				],

				jobInstructions: [
					{ id: 0, name: '', price: 0 }
				],

				equipment: [
					{ id: 0, name: '' }
				],

				products: [
					{ id: 0, name: '', actual: 0, water: 0, area: 0, total: 0 }
				],

				dailyReportCompleteWork: [
					{ id: 0, stateId: 0, area: 0, hours: 0 }
				],

				dailyReportCompletePiplineWork: [
					{ id: 0, parcel: 0, fromKPI: 0, toKPI: 0, dailyQty: 0 }
				],

				dailyReportPersonal: [
					{ id: 0, name: '', hoursWorked: 0, hoursStandby: 0 }
				],

				dailyReportEquipment: [
					{ id: 0, hoursWorked: 0, hoursStandby: 0 }
				]

			}
		}
	});

	$.mockjax({
		url: '/api/workOrder/2',
		responseTime: 1000,
		responseText: {
			result: {

				typeId: 2,
				archived: false,

				details: {

					treatmentDate: '23/12/2013',
					clientId: 1,
					clientName: 'Tincidunt Consulting',
					jobName: 'Cycle Mowing',
					statusId: 4,
					statusName: 'Submitted',

					address: 'Emerald Lakes, Carrara QLD 4211',
					jobNumber: '1004',
					orderNumber: '4003',
					date: '23/11/2013',
					ubdEditionId: 1,
					ubdEditionName: 'Gold Coast 2013',
					map: '89',
					ref: 'E10',

					contactName: 'David Wilton',
					phone1: '0409 655 818',
					phone2: '0755 941 326',
				},

				documents: [
					{ id: 1, name: 'Document 01' },
					{ id: 2, name: 'Document 02' }
				],

				labour: {
					timeAllocated: 6,
					staff: 4,
					area: 100,
					checklist: {
						take5: false,
						taskConfident: false,
						incidentReportGuidelines: false
					},
					criticalInfo: ''
				},

				schedule: [
					{ id: 1, name: 'Nind St, Southport', edit: false, done: true },
					{ id: 2, name: 'Scarborough St, Southport', edit: false, done: false },
					{ id: 3, name: 'Queen St, Southport', edit: false, done: false }
				],

				invoicing: {
					invoiceNumber: 2531,
					invoiceDate: '20/12/2013',
					invoicedTypeId: 0,
					invoiceTotal: '$500.00',
					invoicingNotes: '',
					quoteTypeId: 0,
					quoteNumber: '45345'
				},

				landAccess: {
					questions: {
						lloAvailable: false,
						siteIssues: false,
						contactingTeamUnderstand: false,
						proceedWorksProgram: false
					}
				},

				images: [],

				// Addables
				technicians: [
					{ id: 1, name: 'David Wilton' },
					{ id: 2, name: 'Elicia Squires' }
				],

				jobInstructions: [
					{ id: 1, name: 'Hand Mowing - 40400', price: 664.00 },
					{ id: 2, name: 'Clearing (On Rotation) - 40500', price: 949.05 }
				],

				equipment: [
					{ id: 1, name: 'Chainsaw' }
				],

				products: [
					{ id: 1, name: 'Glyphosate @ 1.5L / 100L', actual: 0, water: 0, area: 0, total: 0 }
				],

				dailyReportCompleteWork: [
					{ id: 1, stateId: 1, area: 50, hours: 2 }
				],

				dailyReportCompletePiplineWork: [
					{ id: 1, parcel: 0, fromKPI: 0, toKPI: 0, dailyQty: 0 }
				],

				dailyReportPersonal: [
					{ id: 1, name: 'Bob Smith', hoursWorked: 2, hoursStandby: 1 }
				],

				dailyReportEquipment: [
					{ id: 1, hoursWorked: 1, hoursStandby: 2 }
				]

			}
		}
	});

	$.mockjax({
		url: '/api/workOrder/*',
		responseTime: 1000,
		responseText: {
			result: {

				typeId: 1,
				archived: false,

				details: {

					treatmentDate: '23/12/2013',
					clientId: 1,
					clientName: 'Ac Mattis Consulting',
					jobName: 'Cycle Mowing',
					statusId: 1,
					statusName: 'New',

					address: 'Emerald Lakes, Carrara QLD 4211',
					jobNumber: '1004',
					orderNumber: '4003',
					date: '23/11/2013',
					ubdEditionId: 1,
					ubdEditionName: 'Gold Coast 2013',
					map: '89',
					ref: 'E10',

					contactName: 'David Wilton',
					phone1: '0409 655 818',
					phone2: '0755 941 326',
				},

				documents: [
					{ id: 1, name: 'Document 01' },
					{ id: 2, name: 'Document 02' }
				],

				labour: {
					timeAllocated: 6,
					staff: 4,
					area: 100,
					checklist: {
						take5: false,
						taskConfident: false,
						incidentReportGuidelines: false
					},
					criticalInfo: ''
				},

				schedule: [
					{ id: 1, name: 'Nind St, Southport', edit: false, done: true },
					{ id: 2, name: 'Scarborough St, Southport', edit: false, done: false },
					{ id: 3, name: 'Queen St, Southport', edit: false, done: false }
				],

				invoicing: {
					invoiceNumber: 2531,
					invoiceDate: '20/12/2013',
					invoicedTypeId: 0,
					invoiceTotal: '$500.00',
					invoicingNotes: '',
					quoteTypeId: 0,
					quoteNumber: '45345'
				},

				landAccess: {
					questions: {
						lloAvailable: false,
						siteIssues: false,
						contactingTeamUnderstand: false,
						proceedWorksProgram: false
					}
				},

				images: [],

				// Addables
				technicians: [
					{ id: 1, name: 'David Wilton' },
					{ id: 2, name: 'Elicia Squires' }
				],

				jobInstructions: [
					{ id: 1, name: 'Hand Mowing - 40400', price: 664.00 },
					{ id: 2, name: 'Clearing (On Rotation) - 40500', price: 949.05 }
				],

				equipment: [
					{ id: 1, name: 'Chainsaw' }
				],

				products: [
					{ id: 1, name: 'Glyphosate @ 1.5L / 100L', actual: 0, water: 0, area: 0, total: 0 }
				],

				dailyReportCompleteWork: [
					{ id: 1, stateId: 1, area: 50, hours: 2 }
				],

				dailyReportCompletePiplineWork: [
					{ id: 1, parcel: 0, fromKPI: 0, toKPI: 0, dailyQty: 0 }
				],

				dailyReportPersonal: [
					{ id: 1, name: 'Bob Smith', hoursWorked: 2, hoursStandby: 1 }
				],

				dailyReportEquipment: [
					{ id: 1, hoursWorked: 1, hoursStandby: 2 }
				]

			}
		}
	});

	$.mockjax({
		url: '/api/workOrderData/',
		responseTime: 1000,
		responseText: {
			result: {

				clients: [
					{ id: 1, name: 'Ac Mattis Consulting' },
					{ id: 2, name: 'Tincidunt Consulting' },
					{ id: 3, name: 'Felis Donec Tempor Corp.' },
					{ id: 4, name: 'Netus Et Malesuada Company' },
					{ id: 5, name: 'Donec Tempus Incorporated' },
					{ id: 6, name: 'MORETON BAY REGIONAL COUNCIL' },
					{ id: 7, name: 'BRISBANE CITY COUNCIL' },
					{ id: 8, name: 'GOLD COAST CITY COUNCIL' },
					{ id: 9, name: 'TWEED COUNCIL' },
					{ id: 10, name: 'BYRON BAY REGIONAL COUNCIL' },
					{ id: 11, name: 'LOGAN CITY COUNCIL' },
					{ id: 12, name: 'REDLANDS SHIRE COUNCIL' },
					{ id: 13, name: 'GYMPIE REGIONAL COUNCIL' },
					{ id: 14, name: 'NUTURF' },
					{ id: 15, name: 'WAREHOUSE CRICKET' },
					{ id: 16, name: 'PPS' },
					{ id: 17, name: 'BRIGHTON BULLDOGS' },
					{ id: 18, name: 'SUNSHINE COAST REGIONAL COUNCIL' },
					{ id: 19, name: 'DB GOLF' },
					{ id: 20, name: 'DIG IT LANDSCAPES' },
					{ id: 21, name: 'JIMBOOMBA TURF' },
					{ id: 22, name: 'NATURELINK' },
					{ id: 23, name: 'TWIN VIEW TURF' },
					{ id: 24, name: 'IPSWICH CITY COUNCIL' },
					{ id: 25, name: 'SCAPESHAPES' },
					{ id: 26, name: 'GRIFFITH UNI MT GRAVATT' },
					{ id: 27, name: 'HANCEYS TURF' },
					{ id: 28, name: 'LOGANHOLME SOCCER' },
					{ id: 29, name: 'STADIUMS QUEENSLAND' },
					{ id: 30, name: 'MITCHIE FC' },
					{ id: 31, name: 'EUREKA LANDSCAPES' },
					{ id: 32, name: 'GREEN OPTIONS' },
					{ id: 33, name: 'LANDSCAPE SOLUTIONS' },
					{ id: 34, name: 'CABOOLTURE TURF' }

				],

				technicians: [
					{ id: 1, name: 'Lachlan  Herrod' },
					{ id: 2, name: 'Scott Kinder' },
					{ id: 3, name: 'Daniel Prince' },
					{ id: 4, name: 'Lee Williams' },
					{ id: 5, name: 'Mark Barnes' },
					{ id: 6, name: 'Ambrose Herrod' },
					{ id: 7, name: 'Shane Revell' },
					{ id: 8, name: 'Daniel Taylor' },
					{ id: 9, name: 'David Venzke' },
					{ id: 10, name: 'Lewis West' },
					{ id: 11, name: 'Robert Carkeet' },
					{ id: 12, name: 'Philip Marsh' },
					{ id: 13, name: 'Marcel Roggerveen' },
					{ id: 14, name: 'Tristan Street' },
					{ id: 15, name: 'Blake Arditto' },
					{ id: 16, name: 'Andrew Walmsley' },
					{ id: 17, name: 'Jamie Woodward' },
					{ id: 18, name: 'Ben Lovel' },
					{ id: 19, name: 'Josh Cotter' },
					{ id: 20, name: 'Russel Brown' },
					{ id: 21, name: 'Keith Fountain' },
					{ id: 22, name: 'Ryan McIntosh' },
					{ id: 23, name: 'Cameron Allen' }
				],

				statuses: [
					{ id: 1, name: 'New' },
					{ id: 2, name: 'Submitted' },
					{ id: 3, name: 'Approved' },
					{ id: 0, name: 'All' }
				],

				jobInstructions: [
					{ id: 1, name: 'Hand Mowing - 40400', price: 664.00 },
					{ id: 2, name: 'Clearing (On Rotation) - 40500', price: 949.05 },
					{ id: 3, name: 'CKC Spraying @ $0.0358117363 per km', price:  0},
					{ id: 4, name: 'Garden Spraying ', price:  0},
					{ id: 5, name: 'Road Reserve Garden Spraying ', price:  0},
					{ id: 6, name: 'Brushcutting ', price:  0},
					{ id: 7, name: 'Handweeding ', price: 0 },
					{ id: 8, name: '401 Slashing Rural @$400.14 per Ha', price: 0 },
					{ id: 9, name: '402 Slashing Urban @ $435 per Ha', price: 0 },
					{ id: 10, name: '407 Herbicide Spraying @ $2219.75 per Ha', price: 0 },
					{ id: 11, name: '420 Roadside Litter Collection - Rural @ $352 per 1m2', price: 0 },
					{ id: 12, name: '421 Roadside Litter Collection - Urban )OSCR) @ $352 per 1m2', price: 0 },
					{ id: 13, name: '421 Roadside Litter Collection - Urban (Nat. Hwy) @ $385 per1m2', price: 0 }

				],

				equipment: [
					{ id: 1, name: '4 mtr DPS (Quad)' },
					{ id: 2, name: '2 mtr DPS (Quad)' },
					{ id: 3, name: '2 mtr DPS (Push)' },
					{ id: 4, name: '1 mtr DPS (Push)' },
					{ id: 5, name: '1.5 mtr hand boom' },
					{ id: 6, name: '6 mtr veh mounted boom' },
					{ id: 7, name: 'Knapsack manual' },
					{ id: 8, name: 'Knapsack power' },
					{ id: 9, name: 'Fert spreader (Quad)' },
					{ id: 10, name: 'Fert spreader (Push)' },
					{ id: 11, name: 'Turf weed wiper (Quad)' },
					{ id: 12, name: 'Enviro wiper (Quad)' },
					{ id: 13, name: 'Electric spreader (Quad)' },
					{ id: 14, name: 'ULV mister' },
					{ id: 15, name: 'Enviro Quad' },
					{ id: 16, name: 'Enviro Quad trailer' },
					{ id: 17, name: 'Argo' },
					{ id: 18, name: 'Power mister' },
					{ id: 19, name: 'Kia 4x4' },
					{ id: 20, name: 'Brush cutter' },
					{ id: 21, name: 'Chain saw' },
					{ id: 22, name: 'Hand wipe' },
					{ id: 23, name: 'Zero Turn Mower' },
					{ id: 24, name: 'Push Mower' },
					{ id: 25, name: 'Ride On Mower' },
					{ id: 26, name: 'Slasher' },
					{ id: 27, name: 'Fail Mower' },
					{ id: 28, name: 'Quickspray' },
					{ id: 29, name: 'Vehicle Mounted Spray Rig' },
					{ id: 30, name: 'Boom Rig' },
					{ id: 31, name: 'Quad Bike (300L)' },
					{ id: 32, name: 'Flatbed Truck' },
					{ id: 33, name: 'Knapsack' },
					{ id: 34, name: 'Chainsaw - small' },
					{ id: 35, name: 'Chainsaw - large' },
					{ id: 36, name: 'Pole Saw' },
					{ id: 37, name: 'Hand Saw' },
					{ id: 38, name: 'Hedger' },
					{ id: 39, name: 'Pole Hedger' },
					{ id: 40, name: 'Box Trailer' },
					{ id: 41, name: 'Litter Vacc' },
					{ id: 42, name: 'Tipper Truck' },
					{ id: 43, name: 'Flatbed Truck' },
					{ id: 44, name: 'Hand Winch' },
					{ id: 45, name: 'Light Trailer' }
				],

				products: [
					{ id: 1, name: 'Bike Argal @ 10ml/120l/Ha' },
					{ id: 2, name: 'Bike  Anatec @ 5ml/120l/Ha' },
					{ id: 3, name: 'BIKE RESILIENCE @ 5L/120L/HA' },
					{ id: 4, name: 'Bike Bistar @ 1.5l/120l/Ha' },
					{ id: 5, name: 'Bike Bistar @ 3l/120l/Ha' },
					{ id: 6, name: 'Bike Daconate @ 5l/120l/Ha' },
					{ id: 7, name: 'Bike Diclofop @ 2.5l/240l/Ha' },
					{ id: 8, name: 'Bike Diclofop @ 1l/120l/Ha' },
					{ id: 9, name: 'Bike Dimension @ 5l/120l/Ha' },
					{ id: 10, name: 'Bike Dimension @ 3.5l/120l/Ha' },
					{ id: 11, name: 'Bike Kamba M @ 5l/100l/Ha' },
					{ id: 12, name: 'Bike Millennium @ 4l/120l/HA' },
					{ id: 13, name: 'Bike Monument @ 20g/120l/Ha' },
					{ id: 14, name: 'Bike Monument @ 40g/120l/Ha' },
					{ id: 15, name: 'Bike Primo Maxx @ 2.5l/120l/Ha' },
					{ id: 16, name: 'Bike Primo Maxx @ 1l/120l/Ha' },
					{ id: 17, name: 'Bike Spearhead @ 5l/120l/Ha' },
					{ id: 18, name: 'WW Activator @ 10ml/2.5l/Ha' },
					{ id: 19, name: 'WW Power Maxx @ 1.5l/2.5l/Ha' },
					{ id: 20, name: 'Push Dps Daconate @ 1l/100l/Ha' },
					{ id: 21, name: 'Push Dps Spearhead @ 1l/100l/HA' },
					{ id: 22, name: 'Push Dps Kamba M @ 1.2l/100l/Ha' },
					{ id: 23, name: 'Garden Simazine @ 1.5l/100l' },
					{ id: 24, name: 'Garden Turf Marker @ 300ml/100l' },
					{ id: 25, name: 'Roads Turf Marker @ 200ml/100l' },
					{ id: 26, name: 'Amicide @ 200ml/100l' },
					{ id: 27, name: 'Activator @ 100ml/100l' },
					{ id: 28, name: 'Razor @ 1.5l/100l' },
					{ id: 29, name: 'Brushoff @ 200ml/100l' },
					{ id: 30, name: 'Garlon 600 @ 170ml/100l' },
					{ id: 31, name: 'Immerse1:19Kerosene Apply@1lt/100m2' },
					{ id: 32, name: 'Affray 300ml/100L' },
					{ id: 33, name: 'Associate @15gm/100L' },
					{ id: 34, name: 'Oust @ 80gm/100L/Ha' },
					{ id: 35, name: 'Sempra 13gm/100L' },
					{ id: 36, name: 'Fusilade @80ml/10L' },
					{ id: 37, name: 'Associate @ 20gm/100L/Ha' },
					{ id: 38, name: 'Associate @ 40gm/100L/Ha' },
					{ id: 39, name: 'Glyphosate @ 1.5L / 100L' },
					{ id: 40, name: '24D @ 200ml/100L' },
					{ id: 41, name: 'Turfmarker @ 100ml/100L' },
					{ id: 42, name: 'Pulse @ 200ml/100L/Ha' }
				],

				invoiceTypes: [
					{ id: 1, name: 'FM' }
				],

				quoteTypes: [
					{ id: 1, name: 'Quoted' },
					{ id: 2, name: 'Verbal' },
					{ id: 3, name: 'Written' }
				],

				ubdEditions: [
					{ id: 1, name: 'Edition 01' },
					{ id: 1, name: 'Edition 02' }
				],

				documentList: [
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
				],

				maxTimeAllocated: 10,

				maxStaff: 20,

				soil: [
					{ id: 1, name: 'Wet' },
					{ id: 2, name: 'Dry' },
					{ id: 3, name: 'Moist' }
				],

				dew: [
					{ id: 1, name: 'Wet' },
					{ id: 2, name: 'Dry' },
					{ id: 3, name: 'Moist' }
				],

				weather: [
					{ id: 1, name: 'Raining' },
					{ id: 2, name: 'Humid' },
					{ id: 2, name: 'Clear' },
					{ id: 2, name: 'Overcast' },
					{ id: 2, name: 'Windy' }
				],

				growthStages: [
					{ id: 1, name: '1 = Nil'},
					{ id: 2, name: '1 = Stress'},
					{ id: 3, name: '1 = Active'},
					{ id: 4, name: '1 = Rapid'}
				],

				jobStatuses: [
					{ id: 1, name: 'Primary' },
					{ id: 1, name: 'Follow Up' }
				],

				personal: [
					{ id: 1, name: 'Foreman - Technigro' },
					{ id: 2, name: 'Field Operator - Technigro' }
				]

			}
		}
	});

	return WorkOrder;

});