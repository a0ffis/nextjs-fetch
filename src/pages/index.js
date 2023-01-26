import { useEffect, useState, useReducer } from "react";
import Card from "components/section-card";
import Link from "next/link";
import Homepost from "components/homepost";
const reducer = (stage, action) => {
	switch (action.type) {
		case "FETCHING_DATA":
			return {
				...stage,
				status: "fetching",
			};
		case "FETCH_DATA_SUCCESS":
			return {
				...stage,
				data: action.payload,
				status: "success",
			};
		case "FETCH_DATA_ERROR":
			return {
				...stage,
				status: "error",
			};
		default:
			return stage;
	}
};

const initialState = {
	data: [],
	status: "",
};

const Home = () => {
	const [datas, dispatch] = useReducer(reducer, initialState);
	const [active, setActive] = useState(0);
	let max = 10;

	if (active > max - 1) {
		setActive(0);
	} else if (active < 0) {
		setActive(max - 1);
	}

	const activeCheck = (message) => {
		setActive(active + message);
	};

	useEffect(() => {
		const controller = new AbortController();
		
		const API = `https://content.guardianapis.com/search?order-by=newest&show-fields=all&page-size=10&api-key=224c1cd6-a34b-4542-9f6f-edba4acd6273`;
		const dataFetch = async () => {
			dispatch({ type: "FETCHING_DATA" });
			await fetch(API)
				.then((res) => res.json())
				.then((data) => dispatch({ type: "FETCH_DATA_SUCCESS", payload: data.response }))
				.catch((err) => dispatch({ type: "FETCH_DATA_ERROR", payload: err }));
		};
		dataFetch();
		return () => {
			controller.abort();
		};
	}, []);
	let section = ["news", "sports", "entertainment", "life", "tech", "travel"];
	// let section = ['news']
	return (
		<>
			<section className="container mt-10 relative px-4">
				{datas.status === "success" ? (
					datas.data.results.map((item, index) => (
						<Homepost
							key={item.id}
							active={active}
							max={max}
							index={index}
							payload={item}
							activeCheck={activeCheck}
						/>
					))
				) : (
					<h1 className="text-center">Loading...</h1>
				)}
				<div className="sp home-postimage"></div>
				{/* <div className="sp hidden xl:block" style={{ paddingTop: "100%" }}></div> */}
				<div className="w-full h-0 home-postspace" onClick={(e) => console.log(e)}></div>
				<div className="sp h-2" style={{ background: "var(--ci-primary)" }}></div>
			</section>
			<section className="container mt-10 px-4">
				{section.map((item, index) => (
					<Card key={index} payload={item} />
				))}
			</section>
			{/* <Homepost post={post} payload={datas} */}
		</>
	);
};

export default Home;
