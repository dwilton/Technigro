define(['jquery', 'mockjax'], function ($) {

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
					{ id: 1, name: 'Nind St, Southport', edit: false, done: false },
					{ id: 2, name: 'Scarborough St, Southport', edit: false, done: false },
					{ id: 3, name: 'Queen St, Southport', edit: false, done: false }
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
					{ id: 1, name: 'Nind St, Southport', edit: false, done: false },
					{ id: 2, name: 'Scarborough St, Southport', edit: false, done: false },
					{ id: 3, name: 'Queen St, Southport', edit: false, done: false }
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
					{ id: 5, name: 'Donec Tempus Incorporated' }
				],

				technicians: [
					{ id: 1, name: 'David Wilton' },
					{ id: 2, name: 'Elicia Squires' }
				],

				statuses: [
					{ id: 1, name: 'New' },
					{ id: 2, name: 'Submitted' },
					{ id: 3, name: 'Approved' },
					{ id: 0, name: 'All' }
				],

				jobInstructions: [
					{ id: 1, name: 'Hand Mowing - 40400', price: 664.00 },
					{ id: 2, name: 'Clearing (On Rotation) - 40500', price: 949.05 }
				],

				equipment: [
					{ id: 1, name: 'Chainsaw' },
					{ id: 2, name: 'Hand Tools' }
				],

				products: [
					{ id: 1, name: 'Glyphosate @ 1.5L / 100L' },
					{ id: 2, name: 'Turfmaker @ 100ml / 100L' }
				],

				invoiceTypes: [
					{ id: 1, name: 'FM' }
				],

				quoteTypes: [
					{ id: 1, name: 'Quoted' }
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
					{ id: 2, name: 'Dry' }
				],

				dew: [
					{ id: 1, name: 'Light' },
					{ id: 2, name: 'Heavy' }
				],

				weather: [
					{ id: 1, name: 'Fine' },
					{ id: 2, name: 'Rain' }
				],

				growthStages: [
					{ id: 1, name: '1 = Nill'}
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

});