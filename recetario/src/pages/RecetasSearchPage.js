import React, { useState, useEffect } from 'react';

// import RecetaList from '../components/RecetaList';

// var APIURL = 'http://localhost:8000';


const RecetasSearchPage = () => {


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

				<h1>Buscar receta</h1>
			</div>

			<div>
				<form action="/">



					<p>
						Por favor introduzca el nombre de la receta
					</p>

					<div className="form-floating mb-3 mt-3">
						<input type="search" placeholder="Nombre" className="form-control"></input>
						<label> Nombre </label>

					</div>
					<br></br>

					<label> Tiempo de preparación </label>
					<div className='row'>
						<div className="form-floating mb-3 mt-3 col-sm-5">
							<input type="number" maxLength="4" min="0" placeholder="60" className="form-control"></input>
							<label> Tiempo máximo (min) </label>
						</div>


						<div className="form-floating mb-3 mt-3 col-sm-5">
							<input type="number" placeholder="10" min="0" className="form-control"></input>
							<label> Tiempo mínimo (min) </label>
						</div>
					</div>
					<br></br>

					<label> Número de ingredientes </label>
					<div className='row'>
					<div className="form-floating mb-3 mt-3 col-sm-5">
						<input type="number" placeholder="20" min="1" className="form-control"></input>
						<label> Ingredientes máximos </label>
					</div>

					<div className="form-floating mb-3 mt-3 col-sm-5">
						<input type="number" placeholder="2" min="1" className="form-control"></input>
						<label> Ingredientes mínimos </label>
					</div>

					</div>

					<br>
					</br>

					<label> Dificultad de preparación:</label>
					<div className='row'>
					<div className="form-floating mb-3 mt-3 col-sm-4">
						<input type="number" placeholder="5" min="0" max="10" className="form-control"></input>
						<label> Min </label>
					</div>

					<div className="form-floating mb-3 mt-3 col-sm-4">
						<input type="number" placeholder="5" min="0" max="10" className="form-control"></input>
						<label>Máx</label>
					</div>

					</div>

					<div >
						<input type="range" min="0" max="10" step="0.5" className="form-range" id="diffRange"></input>
						<label id="diffRangeLabel">Difficulty x/10</label>
					</div>
					<br>
					</br>


					{/* <p> Seleccione el método de búsqueda:</p> <br></br>
					<input type="radio" id="html" name="fav_language" value="HTML" />
					<label for="html">HTML</label>
					<input type="radio" id="css" name="fav_language" value="CSS" />
					<label for="css">CSS</label>
					<input type="radio" id="javascript" name="fav_language" value="JavaScript" />
					<label for="javascript">JavaScript</label> */}


					<br></br>
					<p>Seleccione el método de clasificación:</p>
					<br></br>
					<input type="radio" id="alfaAsc" name="age" value="Alfabético - ascendente" />
					<label>Alfabético ascendente</label>
					<input type="radio" id="alfaDesc" name="age" value="Alfabético - descendente" />
					<label>Alfabético descendente</label>
					<input type="radio" id="tiempoAsc" name="age" value="Tiempo de preparación" />
					<label>Tiempo de preparación</label>
					<br></br>
					<input type="submit" value="Submit" />

				</form>


			</div >
		</>

	)
};


export default RecetasSearchPage;