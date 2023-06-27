import style from './Call.module.css';
import Link from 'next/link';
import arrow from '../../public/arrow.svg';
import Image from 'next/image';

const Call = () => {
	return (
		<div className={style.cta}>
			<div className={style.background}>
				<p className={style.text}>Innovamos para tu marca y creamos para ti</p>

				<div className={style.paragraphButton}>
					<p className={style.paragraph}>
						En ENSE nos importa destacar tu marca en el mercado, posicionándola y generando estrategia para que tu
						producto llegue a más personas. ¡Eligenos! y descubre cómo trabajamos tu marca con calidad y estrategia.
					</p>

					{/* <Link href="#" style={{ textDecoration: 'none' }}>
						<div className={style.link}>
							<p>Conoce mas</p>
							<Image className={style.arrow} width={42} height={22} src={arrow} alt="arrow" />
						</div>
					</Link> */}
				</div>
			</div>
		</div>
	);
};

export default Call;
