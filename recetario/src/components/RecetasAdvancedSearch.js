import React, { useState } from "react";
import "../App.css";

const rangeSlider = () => {

	var minDiffSlider = document.getElementById("minDiff");
	var maxDiffSlider = document.getElementById("maxDiff");


	document.getElementById("minDiffLabel").innerText = "Dificultad mínima: " + minDiffSlider.value + " /10";
	document.getElementById("maxDiff").min = minDiffSlider.value;

	document.getElementById("maxDiffLabel").innerText = "Dificultad máxima: " + maxDiffSlider.value + " /10";
}

const AdvancedSearch = ({ children }) => {
	const full = children;
	const [isAdvancedSearch, setIsAdvancedSearch] = useState(true);
	const toggleAdvancedSearch = () => {
		setIsAdvancedSearch(!isAdvancedSearch);
	};

	const [recetaName, setName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`The name you entered was: ${recetaName}`)
	};

	return (
		<>
			{isAdvancedSearch ? 
			
			<form onSubmit={handleSubmit}>

						<p>
							Por favor introduzca el nombre de la receta
						</p>

						<div className="form-floating mb-3 mt-3 col-sm-5">
							<input type="text" placeholder="Nombre" name="RecipeName" className="form-control" value={recetaName} onChange={(e) => setName(e.target.value)}></input>
							<label> Nombre </label>

						</div>
			</form>

			: full}
			<span style={{cursor:"pointer",textDecoration:"underline"}} onClick={toggleAdvancedSearch} >
				{isAdvancedSearch ? <><br></br>Búsqueda avanzada</> : <><br></br>Búsqueda simple</>}
			</span>
		</>
	);
};

const Content = () => {
	const [recetaName, setName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`The name you entered was: ${recetaName}`)
	};
	
	return (
		<div className="container-fluid main-container">
			<h2>
				<AdvancedSearch>
					<form onSubmit={handleSubmit}>

						<p>
							Por favor introduzca el nombre de la receta
						</p>

						<div className="form-floating mb-3 mt-3 col-sm-5">
							<input type="text" placeholder="Nombre" name="RecipeName" className="form-control" value={recetaName} onChange={(e) => setName(e.target.value)}></input>
							<label> Nombre </label>

						</div>
						<br></br>

						<label> Tiempo de preparación </label>
						<div className='row'>
							<div className="form-floating mb-3 mt-3 col-sm-5">
								<input type="number" name="maxTime" maxLength="4" min="0" placeholder="60" className="form-control"></input>
								<label> Tiempo máximo (min) </label>
							</div>


							<div className="form-floating mb-3 mt-3 col-sm-5">
								<input type="number" name="minTime" placeholder="10" min="0" className="form-control"></input>
								<label> Tiempo mínimo (min) </label>
							</div>
						</div>
						<br></br>

						<label> Número de ingredientes </label>
						<div className='row'>
							<div className="form-floating mb-3 mt-3 col-sm-5">
								<input type="number" name="maxIngred" placeholder="20" min="1" className="form-control"></input>
								<label> Ingredientes máximos </label>
							</div>

							<div className="form-floating mb-3 mt-3 col-sm-5">
								<input type="number" name="minIngred" placeholder="2" min="1" className="form-control"></input>
								<label> Ingredientes mínimos </label>
							</div>

						</div>

						<br>
						</br>

						<div className='diffSlider'>
							<div>
								<label id="minDiffLabel">Dificultad mínima: x/10</label>
								<input type="range" name="minDiff" min="0" max="10" step="0.1" className="form-range col-sm-3" id="minDiff" onChange={rangeSlider}></input>
							</div>
							<div display='flex'>
								<label id="maxDiffLabel">Dificultad máxima: x/10</label>
								<input type="range" name="maxDiff" min="0" max="10" step="0.1" className="form-range col-sm-3" id="maxDiff" onChange={rangeSlider}></input>
							</div>
						</div>
						<br>
						</br>




						<br></br>
						<p>Seleccione el método de clasificación:</p>
						<br></br>
						<input type="radio" id="alfaAsc" name="order" value="Alfabético - ascendente" />
						<label>Alfabético ascendente</label>
						<br></br>
						<input type="radio" id="alfaDesc" name="order" value="Alfabético - descendente" />
						<label>Alfabético descendente</label>

						<br></br>
						<input type="radio" id="tiempoAsc" name="order" value="Tiempo de preparación" />
						<label>Tiempo de preparación</label>
						<br></br>


						<input type="submit" value="Submit" />

					</form>
				</AdvancedSearch>
			</h2>
		</div>
	);
};

export default Content;
