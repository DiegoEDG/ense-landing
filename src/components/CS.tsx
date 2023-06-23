import Image from 'next/image';
import Link from 'next/link';
import studyCase from '../app/studyCase';
import arrow from '../../public/arrow.svg';
import style from './CS.module.css';
const CS = () => {
	return (
		<>
			<div className={style.title}>Experiencias que hemos creado</div>
			<div className={style.container}>
				<div className={style.backgroundElipse}></div>
				{studyCase.map((item) => (
					<div className={style.cards} key={item.id}>
						<Link href={item.href} style={{ textDecoration: 'none' }}>
							<Image className={style.img} width={629} height={495} src={item.img} alt="study case" />
						</Link>

						<p className={style.cardTitle}>{item.title}</p>
						<p className={style.paragraph}>{item.paragraph}</p>

						<Link href={item.href} style={{ textDecoration: 'none' }}>
							<div className={style.link}>
								<p>Caso de estudio</p>
								<Image className={style.arrow} width={42} height={22} src={arrow} alt="arrow" />
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default CS;
