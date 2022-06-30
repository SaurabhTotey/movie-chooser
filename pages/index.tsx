import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Movie Chooser!</title>
			</Head>
			<main>
				<Navbar />
				<h1>Hello, world!</h1>
			</main>
			<footer></footer>
		</>
	);
};

export default Home;
