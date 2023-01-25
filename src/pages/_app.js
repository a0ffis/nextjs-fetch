import "@/styles/globals.css";
import Script from "next/script";
<<<<<<< HEAD
import Navbar from "components/navbar";
import Layout from "components/layout";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			{/* <Script
				src="https://cdn.tailwindcss.com"
				strategy="beforeInteractive"
				onLoad={() => {
					console.log("loaded");
				}}
			/>
			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js"
				strategy="beforeInteractive"
			/> */}
			<Component {...pageProps} />
		</Layout>
=======

export default function App({ Component, pageProps }) {
	return (
		<>
			<Script src="https://cdn.tailwindcss.com" strategy='beforeInteractive' onLoad={() => {
				console.log("loaded");
			}} />
			<Component {...pageProps} />
		</>
>>>>>>> b7e3a295df34eb480695aa459f5f336bd733e8e2
	);
}
