import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<header className="container py-4 cl-ci-primary">
				<div className="flex justify-between items-center h-full">
					<div className="flex justify-around items-center gap-6">
						<button>
							<i className="fa-solid fa-bars text-3xl"></i>
						</button>
						<div className="px-4 border-normal-text focus:outline-none border border-solid box-border border-black w-full rounded-full text-normal-text text-md p-2">
							<input className="outline-none" placeholder="Search" type="text" />
							<button>
								<i className="fa-solid fa-magnifying-glass text-xl"></i>
							</button>
						</div>
					</div>
					<div className="flex justify-around items-center gap-6">
						<Link href="/">
							<h1>.todaynews</h1>
						</Link>
					</div>
					<div className="flex justify-around items-center gap-6">
						<div className="text-center cursor-pointer">
							<p className="w-24">Sign In</p>
						</div>
						<div className="font-bold w-full px-6 rounded-full p-2 text-center cursor-pointer" style={{backgroundColor: "var(--ci-primary)"}}>
							<p className="" style={{color : 'var(--ci-bg)'}}>Subscribe Now</p>
						</div>
					</div>
				</div>
				<div className="sp h-16"></div>
				<div className="flex justify-center items-center gap-12">
					<button className="nav-menu transition-all">
						<p>News</p>
					</button>
					<button className="nav-menu transition-all">
						<p>divorts</p>
					</button>
					<button className="nav-menu transition-all">
						<p>Entertainment</p>
					</button>
					<button className="nav-menu transition-all">
						<p>Life</p>
					</button>
					<button className="nav-menu transition-all">
						<p>Tech</p>
					</button>
					<button className="nav-menu transition-all">
						<p>Travel</p>
					</button>
				</div>
				<div className="sp h-4"></div>
				<div className="sp" style={{ height: "2px" , backgroundColor: "var(--ci-secondary)"}}></div>
			</header>
		</>
	);
};

export default Navbar;
