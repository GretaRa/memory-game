import { useState } from "react";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";
import HoverExample from "./components/Hover";

function App() {
	const [score, setScore] = useState(0);

	const incrementScore = () => {
		setScore(() => score + 1);
	};

	return (
		<div className="App text-center flex flex-col h-screen">
			<div className=" flex-grow">
				<header className="flex justify-center items-center">
					<p className="text-5xl m-3">Plant memory game</p>
					<HoverExample />
				</header>
				<span className="text-2xl">Your score: {score} Best score: 0</span>
				<div className="main grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-5 justify-items-center p-5 md:p-10">
					<Card
						incrementScore={incrementScore}
						title={"Peony"}
						source={
							"https://images.pexels.com/photos/2534524/pexels-photo-2534524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
					/>
					<Card
						title={"Rose"}
						source={
							"https://images.pexels.com/photos/4899534/pexels-photo-4899534.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						}
					/>
					<Card
						title={"Tulip"}
						source={
							"https://images.pexels.com/photos/12374985/pexels-photo-12374985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
					/>
					<Card
						title={"Sunflower"}
						source={
							"https://images.pexels.com/photos/54267/sunflower-blossom-bloom-flowers-54267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
					/>
					<Card
						title={"Crocus"}
						source={
							"https://images.pexels.com/photos/348287/pexels-photo-348287.jpeg"
						}
					/>
					<Card
						title={"Dahlia"}
						source={
							"https://images.pexels.com/photos/2891092/pexels-photo-2891092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
					/>
					<Card
						title={"Daisy"}
						source={
							"https://images.pexels.com/photos/1196445/pexels-photo-1196445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
					/>
					<Card
						title={"Carnation"}
						source={
							"https://images.pexels.com/photos/8355483/pexels-photo-8355483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
					/>
					<Card
						title={"Cosmos"}
						source={
							"https://images.pexels.com/photos/14613972/pexels-photo-14613972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
					/>
					<Card
						title={"Aster"}
						source={
							"https://images.pexels.com/photos/85679/aster-tongolensis-michelmas-daisy-mauve-flower-85679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
