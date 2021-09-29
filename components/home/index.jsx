import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/userState';

const Home = () => {
	const user = useRecoilValue(userState);
	const [userLS, setUserLS] = useState(null);

	useEffect(() => {
		setUserLS(JSON.parse(localStorage.getItem('user')));
	}, []);

	return (
		<div>
			<div>
				<p>Username: {user.userName || userLS?.userName}</p>
				<p>First Name: {user.firstName || userLS?.firstName}</p>
				<p>Last Name: {user.lastName || userLS?.lastName}</p>
				<p>Email: {user.email || userLS?.email}</p>
			</div>
		</div>
	);
};

export default Home;
