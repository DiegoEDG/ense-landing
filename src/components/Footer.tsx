import Link from 'next/link';
import Image from 'next/image';
import envelop from '../../public/envelop.svg';
import facebook from '../../public/facebook.svg';
import whatsapp from '../../public/whatsapp.svg';
import instagram from '../../public/instagram.svg';
import style from './Footer.module.css';
import { FACE_URL, WA_URL, INSTA_URL } from '@/constants/contact';
const Footer = () => {
	return (
		<div className={style.container}>
			<div className={style.upperSection}>
				<p className={style.paragraph}>¿Quiéres que tu marca aparezca aquí?</p>

				<Link href={WA_URL} target="_blank" style={{ textDecoration: 'none' }}>
					<div className={style.link}>
						<p>Contactanos!</p>
						<Image className={style.envelop} width={72} height={42} src={envelop} alt="envelop" />
					</div>
				</Link>
			</div>

			<div className={style.icons}>
				<Link href={FACE_URL} target="_blank" style={{ textDecoration: 'none' }}>
					<Image className={style.facebook} width={72} height={42} src={facebook} alt="facebook" />
				</Link>

				<Link href={INSTA_URL} target="_blank" style={{ textDecoration: 'none' }}>
					<Image className={style.instagram} width={72} height={42} src={instagram} alt="instagram" />
				</Link>

				<Link href={WA_URL} target="_blank" style={{ textDecoration: 'none' }}>
					<Image className={style.whatsapp} width={72} height={42} src={whatsapp} alt="whatsapp" />
				</Link>
			</div>
		</div>
	);
};

export default Footer;
