import React from 'react';
import RecetaInfo from './RecetaInfo';

const RecetaList = ({ recetas }) => {


	return (
		<>
			{recetas !== [] ?
				recetas.map((receta, index) => (
					<div className='receta-list-item' key={index} >
						<RecetaInfo receta={receta} />
					</div>))
				: <p> Nothing was found! </p>}
		</>
	)
};


export default RecetaList;