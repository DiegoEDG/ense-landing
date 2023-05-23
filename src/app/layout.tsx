import { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';

const mon = Montserrat({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'Ense Studio',
	description: 'Digital Studio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={mon.className}>
			<body>{children}</body>
		</html>
	);
}
