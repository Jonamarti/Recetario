import React, { useState, useEffect } from 'react';

// import RecetaList from '../components/RecetaList';

// var APIURL = 'http://localhost:8000';


const RecetasModifyPage = () => {


	// const [recetasList, setRecetasList] = useState([]);



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



	
	// useEffect(() => {
	// 	const fetchData = async () => {

	// 		const result = await fetch(`recetas.json`);
	// 		const body = await result.json();
	// 		setRecetasList(body["recetas"]);
	// 	}
	// 	fetchData();

	// }, []);

	return (
		<>
			<div>

				<h1>Modificar receta</h1>
			</div>

			<div>

			</div>
		</>

	)
};


export default RecetasModifyPage;