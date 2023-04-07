import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const HoverableIcon = ({ handleMouseOver, handleMouseOut }) => {
	return (
		<FaQuestionCircle
			className="text-3xl"
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		/>
	);
};

const HoverText = () => {
	return (
		<span className="absolute z-10 text-lg mt-5 p-2 bg-rose-100 border-rose-400 border-2">
			Get points for choosing a card, but don't click on the same card more than
			once!
		</span>
	);
};

const HoverForRules = () => {
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div>
			<HoverableIcon
				handleMouseOver={handleMouseOver}
				handleMouseOut={handleMouseOut}
			/>
			{isHovering && <HoverText />}
		</div>
	);
};

export default HoverForRules;
