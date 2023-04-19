import { useState, useEffect } from "react";

const Card = ({
	title,
	source,
	randomizeCards,
	incrementScore,
	handleBestScore,
}) => {
	const [clicked, setClicked] = useState(0);

	useEffect(() => {
		randomizeCards();
	}, []);

	const handleClick = () => {
		randomizeCards();
		setClicked(() => 1);

		if (clicked === 1) {
			handleBestScore();
			setClicked(0); //make this for all cards
			console.log("loss");
		} else {
			incrementScore();
		}
	};

	return (
		<div
			onClick={handleClick}
			className="card bg-[#EBBAB9] border-[#B89291] border-2  rounded-md p-3 cursor-pointer"
		>
			<img
				className=" rounded-md h-72 w-72 object-cover"
				src={source}
				alt="plant"
			></img>
			<p className="text-3xl text-center pt-2">{title}</p>
		</div>
	);
};

export default Card;
