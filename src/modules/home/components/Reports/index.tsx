import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	archiveInfo,
	infoOwnershipStructure,
	news,
} from '@modules/home/components/Reports/data';

const Reports = () => {
	return (
		<SplitBlocks title="Інформація" titleType="heading" anchor="reports">
			<Accordion title="Інформація про структуру власності">
				<p>
					<strong> ТОВ «СТРАХОВИЙ БРОКЕР «ЕКСЕЛЬСІОР ПРАЙМ»</strong> не володіє прямо
					або опосередковано, самостійно або спільно з іншими особами 10 і більше
					відсотками акцій/часток у статутному капіталі жодного з
					страховиків/перестраховиків, з якими пропонується укласти договір
					страхування (перестрахування)
				</p>{' '}
				<br />
				<p>
					{' '}
					Жоден з страховиків/перестраховиків, з якими пропонується укласти договір
					страхування (перестрахування), не володіє прямо або опосередковано,
					самостійно або спільно з іншими особами 10 і більше відсотками акцій/часток
					у статутному капіталі{' '}
					<strong>ТОВ «СТРАХОВИЙ БРОКЕР «ЕКСЕЛЬСІОР ПРАЙМ»</strong>.
				</p>
				<br />
				<br />
				<DocumentsList groupList={infoOwnershipStructure} />
			</Accordion>

			<Accordion title="Відповідальність страхового посередника">
				<p>
					Інформація про наявність договору страхування відповідальності під час
					здійснення посередницької діяльності у сфері страхування (перестрахування):
					Річний ліміт покриття професійної відповідальності, наданий ТДВ &quot;СК
					&quot;ГАРДІАН&quot; для ТОВ &quot;СТРАХОВИЙ БРОКЕР &quot;ЕКСЕЛЬСІОР
					ПРАЙМ&quot; та становить: 1 360 000,00 гривень.
				</p>
			</Accordion>

			<Accordion title="Партнери та страхові продукти">
				<p>
					Розділ в процесі наповнення, оскільки станом на сьогоднішній день відсутні
					укладені договори щодо співпраці із Страховиками.
				</p>
			</Accordion>

			<Accordion title="Новини">
				<p>Розділ в процесі наповнення</p>
				<DocumentsList list={news} />
			</Accordion>

			<Accordion title="Архівна інформація">
				<DocumentsList list={archiveInfo} />
			</Accordion>
		</SplitBlocks>
	);
};

export default Reports;
