import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Cta from '@/components/CTA';
import Service from '@/components/Services'
import styles from './home.module.css';

export default function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Navbar />
				<main>
					<Hero />
					<Cta />
					<Service />
				</main>
				<footer></footer>
			</div>
		</div>
	);
}
