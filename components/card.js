import React from "react";

const Card = ({ payload }) => {
	console.log("card", payload);

	return (
		<div className="">
			<h3>{payload.webTitle}</h3>
		</div>
	);
};

export default Card;
