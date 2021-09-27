import styles from '../styles/Register.module.css';
import { ArrowRightIcon } from '@heroicons/react/outline';

const RegisterForm = ({ handleParam, formSubmit, query }) => {
	return (
		<div className="bg-gradient-to-br from-[#ff71a3] to-[#fec67f] w-full h-[100vh] flex justify-center items-center">
			<div className="bg-[#fff] min-w-[450px] px-8 py-11 shadow-sm rounded-2xl">
				<h3 className="text-3xl text-center">Create account</h3>
				<p className="my-5 font-light text-center">
					Already have an account?&nbsp;
					<span className="text-blue-500 underline cursor-pointer hover:text-blue-300">
						Sign in
					</span>
				</p>
				<form onSubmit={formSubmit}>
					<input
						name="userName"
						type="text"
						placeholder="Username"
						className={styles.inputForm}
						value={query.userName}
						onChange={handleParam()}
					/>
					<div className="grid grid-cols-2 gap-2">
						<input
							name="firstName"
							type="text"
							placeholder="First name"
							className={styles.inputForm}
							value={query.firstName}
							onChange={handleParam()}
						/>
						<input
							name="lastName"
							type="text"
							placeholder="Last name"
							className={styles.inputForm}
							value={query.lastName}
							onChange={handleParam()}
						/>
					</div>
					<input
						name="email"
						type="email"
						placeholder="Email"
						className={styles.inputForm}
						value={query.email}
						onChange={handleParam()}
					/>
					<button
						type="submit"
						className="w-full my-2 mx-1 py-2 px-2 rounded-xl flex items-center justify-between bg-blue-500 text-[#fff] hover:bg-blue-700 transition-all"
					>
						<span></span>
						Sign up
						<ArrowRightIcon className="h-5" />
					</button>
					<div className="flex items-center gap-2 mx-1 mt-7 text-sm">
						<input type="checkbox" />
						<p className="text-gray-500">
							I have and agree to the <span className="text-blue-500">Term of Service</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
