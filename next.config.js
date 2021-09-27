module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/register',
				destination: '/',
				permanent: true,
			},
		];
	},
};
