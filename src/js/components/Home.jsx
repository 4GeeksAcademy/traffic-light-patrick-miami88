import React, { useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	const colors = ["red", "yellow", "green"];
	const [current, setCurrent] = useState(colors[0]);
	const [currentIndex, setCurrentIndex] = useState(0)
	
	const setLightColors = (index) => {
		setCurrentIndex(index);
		setCurrent(colors[index])
		return
	}

	return (
		<div className="text-center d-flex flex-column align-items-center">
			<div className="d-flex justify-content-center h1 p-3">Hey look, it's a stop light</div>
            <div className="stop-light-top mt-4"></div>
			<div className="stop-light-box d-flex flex-column align-items-center">
				<div className={"stop-lights red-light " + (current === "red" ? "active-red-light" : "")} onClick={() => setLightColors(0)}></div>
				<div className={"stop-lights yellow-light " + (current === "yellow" ? "active-yellow-light" : "")} onClick={() => setLightColors(1)}></div>
				<div className={"stop-lights green-light " + (current === "green" ? "active-green-light" : "")} onClick={() => setLightColors(2)}></div>
			</div>
		</div>
	);
};

export default Home;