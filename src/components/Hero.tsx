import Image from 'next/image';
import style from './Hero.module.css';
import woman from './/../../public/CreativeWoman.svg';
import Link from 'next/link';
import { WA_URL } from '@/constants/contact';

const Hero = () => {
	return (
		<div className={style.hero}>
			<div className={style.gradient} />
			<div>
				<>
					<h2 className={style.text}>Llevamos tu marca a otro nivel con </h2>
					<span className={style.textRed}></span>
				</>
				<p className={style.paragraph}>
					Sabemos la importancia de tu marca. Por eso trabajamos en estrategias únicas para llegar a más personas. Con
					procesos actuales y óptimos.
				</p>
				<Link href={WA_URL} target="_blank" style={{ textDecoration: 'none' }}>
					<div className={style.cta}>Contactanos!</div>
				</Link>
			</div>
			<Image className={style.image} width={620} height={600} src={woman} alt="logo" />
		</div>
	);
};

export default Hero;
