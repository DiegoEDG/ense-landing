import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Call from '@/components/Call';
import Service from '@/components/Services';
import CS from '@/components/CS';
import Footer from '@/components/Footer';
import styles from './home.module.css';

export default function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Navbar />
				<main>
					<Hero />
					<Call />
					<Service />
					<CS />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
}
