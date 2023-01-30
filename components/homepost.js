import React, { useState } from "react";
import Link from "next/link";

const Homepost = (props) => {
	// const [z_index, setZ_index] = useState(0);
	// console.log(props.chooseMessage);

	let active = props.active;

	const increase = (e) => {
		props.activeCheck(e);
	};
	// console.log(active)
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
			<div
				data-index={props.index}
				data-active={props.active === props.index ? "1" : "-1"}
				className="homepost absolute top-0 left-0 w-full h-full"
				style={{ zIndex: props.active === props.index ? "1" : "-1" }}
				key={props.payload.id}
			>
				<div
					className="w-full h-0 bg-cover rounded-md home-postimage"
					style={{
						backgroundImage: "url(" + props.payload.fields.thumbnail + ")",
					}}
				>
					<div className="tag absolute top-4 left-4 lg:top-8 lg:left-8 bg-primary px-4 lg:px-8 py-2 lg:py-4 rounded-full">
						<p>{props.payload.pillarName}</p>
					</div>
					<div className="w-full h-full flex justify-center">
						<div
							className="post-info rounded-md cl-ci-primary"
							style={{ background: "var(--ci-bg)" }}
						>
							<p className=" font-bold ">
								{props.payload.sectionName} - {convertData(props.payload.webPublicationDate)}
							</p>
							<div className="sp h-2 lg:h-6"></div>
							<Link
								href={{
									pathname: `/single-item/${props.payload.id}`,
									query: { keyword: props.payload.apiUrl },
								}}
								passHref
								as={`/single-item/${props.payload.id}`}
							>
								<h1 className="truncate-title">{props.payload.webTitle}</h1>
							</Link>
							<div className="sp h-5 lg:h-10"></div>
							<p
								className="truncate-body text-lg"
								dangerouslySetInnerHTML={{ __html: props.payload.fields.trailText }}
							></p>
							<div className="sp h-2 lg:h-6"></div>
							<div className="flex justify-between">
                                <div className="text-2xl">
                                    {active + 1} / {props.max}
                                </div>
								<div className="text-right mb-4 lg:mb-8">
									<button className="mx-4" onClick={() => increase(-1)}>
										<i className="fa-solid fa-arrow-left text-3xl cursor-pointer"></i>
									</button>
									<button className="mx-4" onClick={() => increase(1)}>
										<i className="fa-solid fa-arrow-right text-3xl cursor-pointer"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepost;
