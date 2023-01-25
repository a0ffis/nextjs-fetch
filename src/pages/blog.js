import React, { useEffect, useReducer } from "react";

const Blog = () => {
	const initialState = {
		data: [],
		error: null,
	};
	function fetchReducer(state, action) {
		switch (action.type) {
			case "FETCH_DATA":
				return {
					...state,
				};
			case "FETCH_DATA_SUCCESS":
				return {
					...state,
					data: action.payload,
				};
			case "FETCH_DATA_ERROR":
				return {
					...state,
					error: action.payload,
				};
			default:
				return state;
		}
	}
	const [datas, dispatch] = useReducer(fetchReducer, initialState);
	const API = `https://jsonplaceholder.typicode.com/todos`;
	useEffect(() => {
		dispatch({ type: "FETCH_DATA" });

		fetch(API)
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
			})
			.catch((err) => dispatch({ type: "FETCH_DATA_ERROR", payload: err }));
	}, []);
	console.log(datas);
	return (
		<>
			<div className="container">
				<h1>Blog</h1>
				<div className="m-8">
					{datas.data.map((data) => (
						<div key={data.id}>
                            <h6>{data.title}</h6>
                        </div>
					))}
				</div>
			</div>
		</>
	);
};

export default Blog;
