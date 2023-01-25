import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<header className="container font-serif">
				<div className="flex justify-around items-center h-full">
					<Link href="/">
						<h3>Home</h3>
					</Link>
					<Link href="/blog">
						<h3>Blog</h3>
					</Link>
					<h3>About</h3>
				</div>
			</header>
		</>
	);
};

export default Navbar;
