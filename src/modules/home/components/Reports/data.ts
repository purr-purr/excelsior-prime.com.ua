import { importDoc } from '@utils/formatters';
import { IDocumentsListGroup, type IDocumentsList } from '@utils/types';

export const infoOwnershipStructure: IDocumentsListGroup[] = [
	{
		groupTitle: '2024',
		list: [
			{
				title: 'Інформація про структуру власності',
				link: importDoc('Struktura.pdf'),
			},
		],
	},
];

export const news: IDocumentsList[] = [];
