import React, { useState, useEffect } from 'react';

import RecetaList from '../components/RecetaList';

// var APIURL = 'http://localhost:8000';


const RecetasResultPage = () => {

	const [recetasList, setRecetasList] = useState([]);

	/*
	fetch from backend server.
	useEffect(() => {
		const fetchData = async () => {

			const result = await fetch(`${APIURL}/api/plants`);
			const body = await result.json();
			setreceta(body);
		}
		fetchData();

	}, []);

	*/

	
	useEffect(() => {
		const fetchData = async () => {

			const result = await fetch(`recetas.json`);
			const body = await result.json();
			setRecetasList(body["recetas"]);
		}
		fetchData();

	}, []);

	

	// // fetch from json file TODO: in the previous one, implement catch error
	// useEffect(() => {
	// 	const fetchData = async () => {

	// 		const result = await fetch("recetas.json");

	// 		const body = await result.json();
	// 		fetch('recetas.json')
	// 			.then(response => {
	// 				if (!response.ok) {
	// 					throw new Error("HTTP error " + response.status);
	// 				}
	// 				return response.json();
	// 			})
	// 			.then(json => {
	// 				body = json;
	// 				// console.log(body["recetas"]);
	// 			})
	// 			.catch(function () {
	// 				// this.dataError = true;
	// 			})

	// 		setreceta(body["recetas"]);
	// 	}
	// 	fetchData();

	// }, []);

	return (
		<>
			<div>


				{/* <h1>Recetas guardadas</h1> */}
				<h2>A continuación se muestran las recetas guardadas. Selecciona una de ellas para ir a su página </h2>

				<RecetaList recetas={recetasList} />
			</div>

			<div>

			</div>
		</>

	)
};


export default RecetasResultPage;