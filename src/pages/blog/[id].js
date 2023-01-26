import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Blog = () => {
	const router = useRouter();
	let param = router?.query?.id;
	console.log(param);

    
	// if (param) {
	// 	fetch(`https://jsonplaceholder.typicode.com/todos/${param}`)
	// 		.then((response) => response.json())
	// 		.then((json) => console.log(json));
	// }

	// console.log(router.query.id);

	return (
		<>
			<div></div>
		</>
	);
};

export default Blog;
