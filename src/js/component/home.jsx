import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [select, setSelect] = useState("");


	return (
		<div className="container row justify-content-center">
			<div className="traffic-light-top"></div>
			<div className="container row justify-content-center">
				<div className="traffic-light rounded-4">
					<button className={`red ${select === "red" ? 'on' : ''}`} onClick={() => setSelect("red")}></button>
					<button className={`yellow ${select === "yellow" ? 'on' : ''}`} onClick={() => setSelect("yellow")}></button>
					<button className={`green ${select === "green" ? 'on' : ''}`} onClick={() => setSelect("green")}></button>
				</div>
			</div>
		</div>
	);

};

export default Home;
