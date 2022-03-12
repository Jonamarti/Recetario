import { React, useState } from 'react';
import { Link } from 'react-router-dom';



const RecetaInfo = ({ receta }) => {


	let imgSrc = "pictureunavailable.jpg";
	if(receta.imgName){
		imgSrc = `${receta.imgName}`;
	}
	 
	console.log(receta);
	console.log(imgSrc)
	const [image, setImage] = useState("");

	(function () {
		import(
			
			  `../assets/images/${imgSrc}`

			
		).then((image) => setImage(image.default));
	})(
		
	);



	return (
		<>


			
			{receta === 0 ? 'Nothing found' :

				<section className='recetaInfoSec'>
					<div className='recetaInfo'>
						<h1>
							<Link to={`/receta/${receta.id}`}>
								{receta.name}
							</Link>
						</h1>

						<p>
							{receta.description}
						</p>
						<h3>Elaboración</h3>
						<p> Tiempo de preparación: {receta.prepTime} minutos </p>


						<p> Guía de preparación: </p>  <p>{receta.prepGuide}</p>
					</div>
					<div className='image-container'>{image && <img alt="" className="img-responsive" src={image}
						width="250px" height="auto" />}
					</div>
				</section>
			}

		
		</>

	)
};


export default RecetaInfo;