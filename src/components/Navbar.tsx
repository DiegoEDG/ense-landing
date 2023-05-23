import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from './/../../public/EnseLogoPNG.png';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Image width={187} height={64} src={logo} alt="logo" />
			<ul className={styles.navlinks}>
				<li>Home</li>
				<li>Portafolio</li>
				<li>Servicios</li>
				<li>Nosotros</li>
			</ul>
		</nav>
	);
};

export default Navbar;
