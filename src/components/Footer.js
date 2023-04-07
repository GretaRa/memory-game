import { FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="bg-[#EBBAB9] border-[#B89291] border-t-2 p-3 flex justify-center items-center gap-3">
			Designed and coded by Greta Rakauskaite 2023{" "}
			<a href="https://github.com/GretaRa" target="blank">
				<FaGithub className="text-2xl" />
			</a>
		</div>
	);
};

export default Footer;
