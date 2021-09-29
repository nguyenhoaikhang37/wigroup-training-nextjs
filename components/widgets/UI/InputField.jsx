const InputField = ({ value, name, onChange, className, ...inputProps }) => {
	return (
		<input
			name={name}
			value={value}
			onChange={onChange}
			{...inputProps}
			className={`${className} w-full my-2 mx-1 py-2 px-5 bg-gray-100 focus:bg-[#fff]`}
		/>
	);
};

export default InputField;
