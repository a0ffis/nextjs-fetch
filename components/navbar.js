import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [input, setInput] = useState("");
	const [toggle, setToggle] = useState("off");

	const toggleMenu = (click) => {
		setToggle(click);
	};
	// console.log(input);
	return (
		<>
			<div className="left-menu" style={{ left: toggle == "on" ? "0px" : "-350px" }}>
				<div className="px-8 py-6 flex gap-4 justfy-between">
					<div className="px-4 bg-primary border-normal-text focus:outline-none border border-solid box-border border-black w-full rounded-full text-normal-text text-md p-2">
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className="outline-none"
							placeholder="Search"
							type="text"
						/>
						<Link
							style={{ pointerEvents: input.length > 0 ? "auto" : "none" }}
							id="search"
							href={{
								pathname: `/page-section/${input}`,
								query: { keyword: "news" },
							}}
							as={`/page-section/${input}`}
						>
							<button>
								<i className="fa-solid fa-magnifying-glass text-xl"></i>
							</button>
						</Link>
					</div>
					<button onClick={() => toggleMenu("off")}>
						<i className="fa-solid fa-angles-left text-3xl" style={{ color: "var(--ci-bg)" }}></i>
					</button>
				</div>
			</div>
			<header className="container pt-4 pb-6 lg:pb-14 cl-ci-primary px-4">
				<div className="flex justify-between items-center h-full">
					<div className="flex justify-around items-center gap-6">
						<button onClick={() => toggleMenu("on")}>
							<i className="fa-solid fa-bars text-3xl"></i>
						</button>
						<div className="hidden sm:block px-4 border-normal-text focus:outline-none border border-solid box-border border-black w-full rounded-full text-normal-text text-md p-2">
							<input
								value={input}
								onChange={(e) => setInput(e.target.value)}
								className="outline-none"
								placeholder="Search"
								type="text"
							/>
							<Link
								style={{ pointerEvents: input.length > 0 ? "auto" : "none" }}
								id="search"
								href={{
									pathname: `/page-section/${input}`,
									query: { keyword: "news" },
								}}
								as={`/page-section/${input}`}
							>
								<button>
									<i className="fa-solid fa-magnifying-glass text-xl"></i>
								</button>
							</Link>
						</div>
					</div>
					<div className="flex justify-around items-center gap-6">
						<Link href="/">
							<h1>.todaynews</h1>
						</Link>
					</div>
					<div className="mock-up flex justify-around items-center gap-6">
						<div className="text-center cursor-pointer">
							<p className="w-24">Sign In</p>
						</div>
						<div
							className="font-bold w-full px-6 rounded-full p-2 text-center cursor-pointer"
							style={{ backgroundColor: "var(--ci-primary)" }}
						>
							<p className="" style={{ color: "var(--ci-bg)" }}>
								Subscribe Now
							</p>
						</div>
					</div>
				</div>
				<div className="nav-menu-wrap">
					<div className="sp h-8 lg:h-16"></div>
					<div className="flex justify-center items-center gap-12">
						<Link
							href={{
								pathname: `/page-section/news`,
								query: { keyword: "news" },
							}}
							as="/page-section/news"
						>
							<button className="">
								<p className="nav-menu transition-all">News</p>
							</button>
						</Link>
						<Link
							href={{
								pathname: `/page-section/sports`,
								query: { keyword: "sports" },
							}}
							as="/page-section/sports"
						>
							<button className="">
								<p className="nav-menu transition-all">Sports</p>
							</button>
						</Link>
						<Link
							href={{
								pathname: `/page-section/entertainment`,
								query: { keyword: "entertainment" },
							}}
							as="/page-section/entertainment"
						>
							<button className="">
								<p className="nav-menu transition-all">Entertainment</p>
							</button>
						</Link>
						<Link
							href={{
								pathname: `/page-section/life`,
								query: { keyword: "life" },
							}}
							as="/page-section/life"
						>
							<button className="">
								<p className="nav-menu transition-all">Life</p>
							</button>
						</Link>
						<Link
							href={{
								pathname: `/page-section/tech`,
								query: { keyword: "tech" },
							}}
							as="/page-section/tech"
						>
							<button className="">
								<p className="nav-menu transition-all">Tech</p>
							</button>
						</Link>
						<Link
							href={{
								pathname: `/page-section/travel`,
								query: { keyword: "travel" },
							}}
							as="/page-section/travel"
						>
							<button className="">
								<p className="nav-menu transition-all">Travel</p>
							</button>
						</Link>
					</div>
				</div>
				<div className="sp h-4"></div>
				<div className="sp" style={{ height: "2px", backgroundColor: "var(--ci-secondary)" }}></div>
			</header>
		</>
	);
};

export default Navbar;
