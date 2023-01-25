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
	const [datas, dispatch] = useReducer(reducer, initialState);
	const [post, setPost] = useState(0);

	useEffect(() => {
		const API = `https://content.guardianapis.com/search?order-by=newest&show-fields=all&page-size=10&api-key=224c1cd6-a34b-4542-9f6f-edba4acd6273`;
		const dataFetch = async () => {
			dispatch({ type: "FETCHING_DATA" });
			await fetch(API)
				.then((res) => res.json())
				.then((data) => dispatch({ type: "FETCH_DATA_SUCCESS", payload: data.response }))
				.catch((err) => dispatch({ type: "FETCH_DATA_ERROR", payload: err }));
		};
		dataFetch();
	}, []);

	const handleClick = () => {
		console.log("this is:", this);
	};
	// if (datas.status === "success") {
	// 	console.log(datas?.data.results[post]);
	// }
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
			<section className="container pt-10">
				{datas.status === "success" ? (
					<>
						<div
							key={datas?.data.results[post].id}
							className="w-full h-0 bg-cover rounded-md relative"
							style={{
								backgroundImage: "url(" + datas?.data.results[post].fields.thumbnail + ")",
								paddingTop: "52.33%",
							}}
						>
							<div className="absolute top-8 left-8 bg-blue-400 px-8 py-4 rounded-full">
								<h6>{datas?.data.results[post].pillarName}</h6>
							</div>
							<div className="w-full h-full flex justify-center">
								<div
									className="absolute bottom-[-30%] w-4/5 px-[10%] py-[5%] rounded-md cl-ci-primary"
									style={{ background: "var(--ci-bg)" }}
								>
									<p className=" font-bold ">
										{datas?.data.results[post].sectionName} -{" "}
										{convertData(datas?.data.results[post].webPublicationDate)}
									</p>
									<div className="sp h-6"></div>
									<h1 className="truncate-title">{datas?.data.results[post].webTitle}</h1>
									<div className="sp h-10"></div>
									<h6
										className="truncate-body"
										dangerouslySetInnerHTML={{ __html: datas?.data.results[post].fields.trailText }}
									></h6>
									<div className="sp h-32"></div>
									<div className="text-right">
										<button className="" onClick={handleClick(this)}>
											<i className="fa-solid fa-arrow-left text-3xl mx-4 cursor-pointer"></i>
										</button>
										<i className="fa-solid fa-arrow-right text-3xl mx-4 cursor-pointer"></i>
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					""
				)}
				<div className="w-full h-0" style={{ paddingTop: "20%" }}></div>
				<div className="sp h-2" style={{ background: "var(--ci-primary)" }}></div>
			</section>
		</>
	);
}
