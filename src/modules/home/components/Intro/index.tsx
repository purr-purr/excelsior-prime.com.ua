import Image from 'next/image';

import useMediaQuery from '@modules/common/hooks/useMediaQuery';

import { COMPANY_CATCHPHRASE, LAPTOP_BREAKPOINT } from '@utils/const';

import s from './Intro.module.scss';

import INTRO_IMAGE from '@modules/home/assets/intro-poster.png';

const Intro = () => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);

	return (
		<section className={s.container}>
			<article className={s.info}>
				<h1 className={s.infoTitle}>
					Ваш страховий партнер {!isLaptop && <br />} у світі безпеки та стабільності
				</h1>
				<p className={s.infoDesc}>{COMPANY_CATCHPHRASE}</p>
			</article>

			<div className={s.poster}>
				<Image src={INTRO_IMAGE} alt="Home intro" />
			</div>
		</section>
	);
};

export default Intro;
