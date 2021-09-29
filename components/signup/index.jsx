import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/userState';
import RegisterForm from './components/RegisterForm';
import Layout from '../Layout';

const SignUp = () => {
	const router = useRouter();
	const setUser = useSetRecoilState(userState);

	const [query, setQuery] = useState({
		userName: '',
		firstName: '',
		lastName: '',
		email: '',
	});

	const handleParam = () => (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setQuery((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const formSubmit = async (e) => {
		e.preventDefault();
		await localStorage.setItem('user', JSON.stringify(query));
		router.push({
			pathname: '/',
		});
	};

	return (
		<Layout>
			<RegisterForm handleParam={handleParam} formSubmit={formSubmit} query={query} />
		</Layout>
	);
};

export default SignUp;
