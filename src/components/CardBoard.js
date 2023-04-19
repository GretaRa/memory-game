import Card from "./Card.js";
import { useState } from "react";

const CardBoard = (props) => {
	let cardGrid = [
		{
			source:
				"https://images.pexels.com/photos/2534524/pexels-photo-2534524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Peony",
		},
		{
			source:
				"https://images.pexels.com/photos/4899534/pexels-photo-4899534.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			title: "Rose",
		},
		{
			source:
				"https://images.pexels.com/photos/12374985/pexels-photo-12374985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Tulip",
		},
		{
			source:
				"https://images.pexels.com/photos/54267/sunflower-blossom-bloom-flowers-54267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Sunflower",
		},
		{
			source:
				"https://images.pexels.com/photos/348287/pexels-photo-348287.jpeg",
			title: "Crocus",
		},
		{
			source:
				"https://images.pexels.com/photos/2891092/pexels-photo-2891092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Dahlia",
		},
		{
			source:
				"https://images.pexels.com/photos/1196445/pexels-photo-1196445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Daisy",
		},
		{
			source:
				"https://images.pexels.com/photos/8355483/pexels-photo-8355483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Carnation",
		},
		{
			source:
				"https://images.pexels.com/photos/14613972/pexels-photo-14613972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Cosmos",
		},
		{
			source:
				"https://images.pexels.com/photos/85679/aster-tongolensis-michelmas-daisy-mauve-flower-85679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Aster",
		},
	];

	const [cardLayout, setCardLayout] = useState(
		cardGrid.map((value, index) => index)
	);

	const shuffleArray = (array) => {
		let shuffledArray = array.slice(0);
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};

	const randomizeCards = () => {
		setCardLayout(shuffleArray(cardLayout));
	};

	return (
		<>
			{cardLayout.map((position) => {
				return (
					<Card
						title={cardGrid[position].title}
						key={cardGrid[position].title}
						source={cardGrid[position].source}
						randomizeCards={randomizeCards}
						incrementScore={props.incrementScore}
						handleBestScore={props.handleBestScore}
					/>
				);
			})}
		</>
	);
};

export default CardBoard;
