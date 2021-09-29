import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HomePage from '../components/home';

export default function MainPage() {
	const router = useRouter();

	// if (typeof window !== 'undefined') {
	// 	const isLogIn = localStorage.getItem('user');
	// 	if (!isLogIn) {
	// 		router.push('/signup');
	// 	}
	// }

	useEffect(() => {
		const isLogIn = localStorage.getItem('user');
		if (!isLogIn) {
			router.push('/signup');
		}
	}, []);

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<HomePage />
		</>
	);
}
