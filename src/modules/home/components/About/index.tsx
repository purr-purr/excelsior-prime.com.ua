import { FC, type ReactNode } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import { aboutCompany } from '@modules/home/components/About/data';

import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '@utils/const';

const About: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	return (
		<section id="about">
			<BlockTitle title="Про компанію" />

			<SplitBlocks
				title={`Про ТОВ «СТРАХОВИЙ БРОКЕР «СМАРТПРОГРЕС»`}
				titleType="text"
			>
				<p>
					ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «СТРАХОВИЙ БРОКЕР «ЕКСЕЛЬСІОР
					ПРАЙМ»
				</p>
				<p>
					{' '}
					LIMITED LIABILITY COMPANY &quot;INSURENCE BROKER &quot;EXCELSIOR
					PRIME&quot;
				</p>
				<p>
					<b>ЄДРПОУ:</b>
				</p>
				<p>45735984</p>
				<p>
					<b>Місцезнаходження:</b>
				</p>
				<p>{COMPANY_ADDRESS}</p>
				<p>
					<b>Контактна інформація:</b>
				</p>
				<p>{COMPANY_PHONE}</p>
				<p>{COMPANY_EMAIL}</p>
				<p>
					<b>Директор</b>
				</p>
				<p>ПРОНЬКО ВАДИМ ОЛЕГОВИЧ</p>
				<a
					href="https://bank.gov.ua/ua/supervision/nonbanks/registers-lists"
					target="_blank"
					rel="noreferrer"
				>
					Офіційне інтернет - представництво Національного банку, на якій розміщено
					Реєстр страхових та перестрахових брокерів
				</a>{' '}
				<br /> <br />
				<a
					href="https://bank.gov.ua/ua/consumer-protection/citizens-appeals"
					target="_blank"
					rel="noreferrer"
				>
					Звернутись до Національного банку України
				</a>
				<br /> <br />
				{/*<DocumentsList list={aboutCompany}/>*/}
			</SplitBlocks>

			{children}
		</section>
	);
};

export default About;
