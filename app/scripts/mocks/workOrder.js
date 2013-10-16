define(['jquery', 'mockjax'], function($) {

	'use strict';

	$.mockjax({
		url: '/api/workOrder/*',
		responseTime: 1000,
		responseText: {
			result: {

				typeId: 0,
				archived: false,

				details: {

					treatmentDate: '23/12/2013',
					clientId: 1,
					clientName: '',
					jobName: 'Cycle Mowing',
					statusId: 1,
					statusName: '',

					address: '',
					jobNumber: '',
					orderNumber: '',
					date: '',
					ubdEdition: 1,
					map: '',
					ref: '',

					contactName: '',
					phone1: '',
					phone2: '',

					documents: [
						{ id: 1 },
						{ id: 2 }
					]

				},

				technicians: [
					{ id: 1 },
					{ id: 2 }
				],

				labour: {
					timeAllocated: 0,
					staff: 0,
					area: 0,
					jobInstructions: [
						{ id: 1 },
						{ id: 2 }
					],
					workChecklist: {
						take5: false,
						taskConfident: false,
						incidentReportGuidelines: false
					},
					criticalInfo: ''
				},

				equipment: [
					{ id: 0 }
				],

				products: [
					{ productId: 0, actual: 0, water: 0, area: 0, total: 0 }
				],

				schedule: [
					{ id: 1, name: 'Nind St, Southport', edit: false, done: false }
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

				}

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

				conditions: [
					{ id: 1, name: 'Wet' },
					{ id: 2, name: 'Dry' }
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