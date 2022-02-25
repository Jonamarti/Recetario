import React from 'react';
import { Link } from 'react-router-dom';
import RecetaInfo from './RecetaInfo';

const RecetaList = ({recetas}) => {

	return (
		<>
			{recetas !== []? 
			recetas.map((receta, index) => (
				<Link className='plant-list-item' key={index} to={`/receta/${receta.id}`}>
					<RecetaInfo receta={receta} />
				</Link>))
				: <p> Nothing was found! </p>}
		</>
	)
};


export default RecetaList;