import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/registerState';
import Head from 'next/head';

export default function Home() {
	const user = useRecoilValue(userState);

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
