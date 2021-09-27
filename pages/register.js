import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/registerState';
import Head from 'next/head';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
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

	const formSubmit = (e) => {
		e.preventDefault();
		setUser(query);
		router.push({
			pathname: '/',
		});
	};

	return (
		<>
			<Head>
				<title>Register User</title>
			</Head>
			<RegisterForm handleParam={handleParam} formSubmit={formSubmit} query={query} />
		</>
	);
};

export default Register;
