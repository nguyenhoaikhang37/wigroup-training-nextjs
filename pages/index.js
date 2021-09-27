import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/registerState';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
	const user = useRecoilValue(userState);
	const router = useRouter();

	if (typeof window !== 'undefined') {
		const isLogIn = localStorage.getItem('user');
		if (!isLogIn) {
			router.push('/signup');
		}
	}

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div>
				{user && (
					<div>
						<p>Username: {user.userName}</p>
						<p>First Name: {user.firstName}</p>
						<p>Last Name: {user.lastName}</p>
						<p>Email: {user.email}</p>
					</div>
				)}
			</div>
		</>
	);
}
