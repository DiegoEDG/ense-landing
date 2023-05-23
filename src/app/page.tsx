import Navbar from '@/components/Navbar';
import styles from './home.module.css';

export default function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Navbar />
				<main>Main</main>
				<footer>Footer</footer>
			</div>
		</div>
	);
}
