import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from './/../../public/logo.png';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Image width={187} height={64} src={logo} alt="logo" />
			{/* <ul className={styles.navlinks}>
				<li>
					<Link href="#">Home</Link>
				</li>
				<li>
					<Link href="#">Portafolio</Link>
				</li>
				<li>
					<Link href="#">Servicios</Link>
				</li>
				<li>
					<Link href="#">Nosotros</Link>
				</li>
			</ul> */}
		</nav>
	);
};

export default Navbar;
