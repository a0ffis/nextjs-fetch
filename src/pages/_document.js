<<<<<<< HEAD
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
					integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
			</Head>
			<body className="font-serif">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
=======
import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from 'components/navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='font-serif'>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
>>>>>>> b7e3a295df34eb480695aa459f5f336bd733e8e2
}
