import Head from "next/head";
import Script from "next/script";
import { useEffect, useState, useReducer } from "react";
import Card from "components/card";

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

export default function Home() {
	// const [datas, setDatas] = useState([]);
	const [datas, dispatch] = useReducer(reducer, initialState);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const API = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&page-size=10&api-key=224c1cd6-a34b-4542-9f6f-edba4acd6273`;
		const dataFetch = async () => {
			dispatch({ type: "FETCHING_DATA" });
			await fetch(API)
				.then((res) => res.json())
				.then((data) => dispatch({ type: "FETCH_DATA_SUCCESS", payload: data.response }))
				.catch((err) => dispatch({ type: "FETCH_DATA_ERROR", payload: err }));
		};
		dataFetch();
	}, []);
	// console.log(datas);
	return (
		<>
			<section className="container">
				<h1>HOME</h1>
				<h6>
					{datas.status === "success"
						? datas.data.results?.map((data, i) => {
								return (
									<>
										<Card payload={data}></Card>
									</>
								);
						  })
						: datas.status}
				</h6>
			</section>
		</>
	);
}
