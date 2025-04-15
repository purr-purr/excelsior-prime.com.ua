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
export const archiveInfo: IDocumentsList[] = [
	{
		title:
			'Витяг про включення до державного реєстру страхових та перестрахових брокерів',
		link: importDoc('Витяг_ЕКСЕЛЬСІОР_ПРАЙМ.pdf'),
	},
];
