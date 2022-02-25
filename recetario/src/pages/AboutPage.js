import React from "react";


const AboutPage = ()=>{

	return(
		<>
		<div className="aboutPage">
		<h1> About</h1>

		<h2> </h2>

		<p> This is the first full stack app I have made. I got the idea from checking the weather
			for extreme conditions that could harm the plants I have in the balconies, so I had to bring them inside. 
			This is not a concern when you are at home and can see the weather in situ, but 
			becomes a problem when you are outside and a sudden temperature drop or hailstorm or strong winds
			can harm your plant.
		</p>

		<p>
			Uses MongoDB for the database, NodeJS and Express for the backend, and React for the front end.
			The images are stored (for now) in the users storage. Front end makes API calls to the backend, 
			which then calls the database.

		</p>

		<p>

		</p>
		</div>
		</>
	);
};

export default AboutPage;