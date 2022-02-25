import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import SlideGallery from '../components/SlideGallery';
import NotFoundPage from './NotFoundPage';
import RecetaInfo from '../components/RecetaInfo';

// only for front end only app
import recetas from '../recetas.json';



// var APIURL = 'http://localhost:8000';

const RecetaPage = () => {



	const { id } = useParams();

	if (!id) {
		return <NotFoundPage />
	};

	console.log(recetas);
	console.log(recetas["recetas"])
	console.log(recetas["recetas"][3])

	return (
		<>
			{/* <RecetaList receta={receta} /> */}
			<div className='recetaInfo'>

				{/* <section className='plantInfoSec'> */}
				{recetas === [] ? 'Nothing found' :

					// <RecetaInfo receta={receta[0]} />

					<RecetaInfo receta={recetas["recetas"][id]} />}

			</div>
		</>

	)
};


export default RecetaPage;