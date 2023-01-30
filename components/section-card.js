import React, { useReducer, useEffect, useCallback } from "react";
import Link from "next/link";

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

const Section = (props) => {
	// console.log("Section", props);

	const [datas, dispatch] = useReducer(reducer, initialState);
	const API =
		`https://content.guardianapis.com/search?q=` +
		props.payload +
		`&show-fields=all&page-size=3&api-key=224c1cd6-a34b-4542-9f6f-edba4acd6273`;

	const dataFetch = useCallback(() => {
		dispatch({ type: "FETCHING_DATA" });
		fetch(API)
			.then((res) => res.json())
			.then((data) => dispatch({ type: "FETCH_DATA_SUCCESS", payload: data.response }))
			.catch((err) => dispatch({ type: "FETCH_DATA_ERROR", payload: err }));
	}, []);
	useEffect(() => {
		dataFetch();
	}, [dataFetch, API]);
	// console.log(datas);
	const convertData = (data) => {
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		const dateObj = new Date(data);
		return [monthNames[dateObj.getMonth()], " ", dateObj.getDate(), ", ", dateObj.getFullYear()].join("");
	};
	// console.log(API);
	return (
		<div key={props.payload}>
			<h3 className="py-3 lg:py-8 uppercase font-bold">{props.payload}</h3>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 pb-6 lg:pb-12">
				{datas.status === "success"
					? datas.data.results.map((data, index) => (
							<Link
								key={data.id}
								href={{
									pathname: `/single-item/${data.id}`,
									query: { keyword: data.apiUrl },
								}}
								passHref
							>
								<div className="card-wrap w-full p-0 lg:p-2 ">
									<div
										className="w-full h-0 bg-cover rounded-md relative"
										style={{
											backgroundImage: "url(" + data.fields.thumbnail + ")",
											paddingTop: "52.33%",
										}}
									></div>
									<div className="flex flex-col">
										<p className="text-lg pt-4 lg:pt-8 truncate">{data.fields.byline}</p>
										<p className="">{convertData(data.fields.firstPublicationDate)}</p>
										<h5 className="pt-3 lg:pt-6 truncate-subtitle font-bold">
											{data.fields.headline}
										</h5>
										<div
											className="sp mt-4 lg:mt-6"
											style={{ background: "var(--ci-primary)", height: "2px" }}
										></div>
									</div>
								</div>
							</Link>
					  ))
					: "loading..."}
			</div>
		</div>
	);
};

export default Section;
