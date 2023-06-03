import Link from 'next/link';
import Image from 'next/image';
import envelop from '../../public/envelop.svg';
import twitter from '../../public/twitter.svg';
import facebook from '../../public/facebook.svg';
import whatsapp from '../../public/whatsapp.svg';
import instagram from '../../public/instagram.svg';
import style from './Footer.module.css';
const Footer = () => {
	return (
		<div className={style.container}>
			<div className={style.upperSection}>
				<p className={style.paragraph}>
					Creemos algo <br /> asombroso juntos!
				</p>

				<Link href="#" style={{ textDecoration: 'none' }}>
					<div className={style.link}>
						<p>Contactanos!</p>
						<Image className={style.envelop} width={72} height={42} src={envelop} alt="envelop" />
					</div>
				</Link>
			</div>

			<div className={style.icons}>
				<Link href="#" style={{ textDecoration: 'none' }}>
					<Image className={style.twitter} width={72} height={42} src={twitter} alt="twitter" />
				</Link>

				<Link href="#" style={{ textDecoration: 'none' }}>
					<Image className={style.facebook} width={72} height={42} src={facebook} alt="facebook" />
				</Link>

				<Link href="#" style={{ textDecoration: 'none' }}>
					<Image className={style.whatsapp} width={72} height={42} src={whatsapp} alt="whatsapp" />
				</Link>

				<Link href="#" style={{ textDecoration: 'none' }}>
					<Image className={style.instagram} width={72} height={42} src={instagram} alt="instagram" />
				</Link>
			</div>
		</div>
	);
};

export default Footer;
