import React from 'react';
// import { useParams } from 'react-router-dom';
// import SlideGallery from '../components/SlideGallery';
// import NotFoundPage from './NotFoundPage';


// Get filenames



// var APIURL = 'http://localhost:8000';

const RecetaInfo = ({ receta }) => {

	return (
		<>
			<div className='recetaInfo'>

				{/* <section className='recetaInfoSec'>  */}
				{receta === 0 ? 'Nothing found' :

					<section className='plantInfoSec'>
						<h1>
							{receta.name}
						</h1>

						<p> {receta.description}
						</p>
						<h3>Elaboración</h3>
						<p> Tiempo de preparación: {receta.prepTime} minutos </p>


						<p> Guía de preparación: </p>  <p>{receta.prepGuide}</p>
					</section>
				}

			</div>
		</>

	)
};


export default RecetaInfo;