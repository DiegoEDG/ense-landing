import style from './Call.module.css';
import Link from 'next/link';
import arrow from '../../public/arrow.svg';
import Image from 'next/image';

const Call = () => {
	return (
		<div className={style.cta}>
			<div className={style.background}>
				<p className={style.text}>Proveemos el mejor servicio con ideas fuera de lo común.</p>

				<div className={style.paragraphButton}>
					<p className={style.paragraph}>
						En Ense Studio nos apasiona trabajar juntos y crear soluciones <br /> innovadoras para nuestros clientes. Al
						elegir trabajar con nosotros,
						<br />
						eliges un equipo de profesionales que ama lo que hace y que está comprometido con llevar tu marca a lo más
						alto.{' '}
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
