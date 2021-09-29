import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/userState';
import Layout from '../Layout';

const Home = () => {
	const [user, setUser] = useRecoilState(userState);

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));
	}, []);

	return (
		<Layout>
			{user && (
				<div>
					<p>Username: {user.userName}</p>
					<p>First Name: {user.firstName}</p>
					<p>Last Name: {user.lastName}</p>
					<p>Email: {user.email}</p>
				</div>
			)}
		</Layout>
	);
};

export default Home;
