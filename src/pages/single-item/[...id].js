import React, { useReducer, useEffect, useState } from "react";
import { useRouter } from "next/router";

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

function single() {
	const [datas, dispatch] = useReducer(reducer, initialState);

	const router = useRouter();
	const API = router?.query?.keyword;
	// console.log(API);
	// let param = router?.query?.id;

	useEffect(() => {
		const dataFetch = async () => {
			dispatch({ type: "FETCHING_DATA" });
			await fetch(API + "?show-fields=all&api-key=224c1cd6-a34b-4542-9f6f-edba4acd6273")
				.then((res) => res.json())
				.then((data) => dispatch({ type: "FETCH_DATA_SUCCESS", payload: data.response }))
				.catch((err) => dispatch({ type: "FETCH_DATA_ERROR", payload: err }));
		};
		if (router?.query?.keyword != undefined) {
			dataFetch();
		}
	}, [API]);

	console.log(datas);
	// console.log("https://content.guardianapis.com/" + API + `?api-key=224c1cd6-a34b-4542-9f6f-edba4acd6273`);
	return (
		<>
			<section className="container px-4">
				{datas.status === "success" ? (
					<>
						<div className="">
							<div
								className="w-full h-0 bg-cover rounded-md relative"
								style={{
									backgroundImage: "url(" + datas.data.content.fields.thumbnail + ")",
									paddingTop: "52.33%",
								}}
							></div>
							<h1 className="py-12 font-bold">{datas.data.content.fields.headline}</h1>
							<div className="sp" style={{ height: "2px", background: "var(--ci-secondary)" }}></div>
							<div className="grid grid-cols-12 py-12">
								{/* <div className="col-span-1"></div> */}
								<div className="col-span-12">
									<div
										className="text-xl text-body"
										dangerouslySetInnerHTML={{ __html: datas.data.content.fields.body }}
									></div>
								</div>
							</div>
						</div>
					</>
				) : (
					<h1 className="text-center">Loading...</h1>
				)}
			</section>
		</>
	);
}

export default single;
