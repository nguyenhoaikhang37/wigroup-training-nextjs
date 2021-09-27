import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<script
					type="module"
					src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
				></script>
				<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
			</Head>
			<main>{children}</main>
		</>
	);
};

export default Layout;
