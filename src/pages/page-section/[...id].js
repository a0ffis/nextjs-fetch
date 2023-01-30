import React, { useReducer, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
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

const Id = () => {
	const router = useRouter();
	const param = router.query.id;
	const [datas, dispatch] = useReducer(reducer, initialState);
	const API =
		`https://content.guardianapis.com/search?q=` +
		param +
		`&show-fields=all&page-size=12&api-key=224c1cd6-a34b-4542-9f6f-edba4acd6273`;

	const dataFetch = useCallback(() => {
		dispatch({ type: "FETCHING_DATA" });
		fetch(API)
			.then((res) => res.json())
			.then((data) => dispatch({ type: "FETCH_DATA_SUCCESS", payload: data.response }))
			.catch((err) => dispatch({ type: "FETCH_DATA_ERROR", payload: err }));
	}, [param]);

	useEffect(() => {
		if (param == undefined) {
			console.log(param);
		}else {
			console.log(API, param);
			dataFetch();
		}
	}, [dataFetch]);
	// console.log(param);
	// console.log(param, API);

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
	return (
		<>
			<section className="container px-4 cl-ci-primary">
				<h3 className="py-2 lg:py-12 uppercase font-bold">{param}</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 pb-6 lg:pb-16">
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
									<div className="w-full p-2">
										<div
											className="w-full h-0 bg-cover rounded-md relative"
											style={{
												backgroundImage: "url(" + data.fields.thumbnail + ")",
												paddingTop: "52.33%",
											}}
										></div>
										<div className="flex flex-col">
											<p className="text-lg pt-8 truncate">{data.fields.byline}</p>
											<p className="">{convertData(data.fields.firstPublicationDate)}</p>
											<h5 className="pt-6 truncate-subtitle font-bold">{data.fields.headline}</h5>
										</div>
									</div>
								</Link>
						  ))
						: "loading..."}
				</div>
			</section>
		</>
	);
};

export default Id;
