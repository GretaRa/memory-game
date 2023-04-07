import { useEffect, useState } from "react";
import CardBoard from "./components/CardBoard.js";
import Footer from "./components/Footer.js";
import HoverExample from "./components/Hover";
import Card from "./components/Card.js";

function App() {
	const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleBestScore = () => {
    if (score > bestScore){
      setBestScore(() => score)
    }
  }

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
				<p className="text-2xl">Your score: {score} Best score: {bestScore}</p>
				<div className="main grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-5 justify-items-center p-5 md:p-10">
        <CardBoard/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
