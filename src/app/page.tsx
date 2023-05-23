import Image from 'next/image';
import styles from './home.module.css';
import logo from './/../../public/EnseLogoPNG.png';

export default function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<nav className={styles.navbar}>
					<Image width={187} height={64} src={logo} alt="logo" />
					<ul className={styles.navlinks}>
						<li>Home</li>
						<li>Portafolio</li>
						<li>Servicios</li>
						<li>Nosotros</li>
					</ul>
				</nav>
				<main>Main</main>
				<footer>Footer</footer>
			</div>
		</div>
	);
}
