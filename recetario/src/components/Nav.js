import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-sm ">

			<ul>
				<li>
					<Link to="/"> Inicio </Link>
				</li>

				{/* <li>
					<Link to="/recetas"> Recetas </Link>
				</li> */}
				
				<li className="recetasDropdown">
					{/* <a href="pages/recetasPages" class="dropbtn">Recetas</a> */}
					<Link to="/recetas"> Recetas </Link>
					<div className="dropdown-content">
						<Link to="/recetasSearch"> Buscar</Link>
						
						<Link to="/recetasModify">Gestionar</Link>

						<Link to="/recetasCreate">Añadir </Link>
						
						{/* <Link></Link> */}
						
					</div>
				</li>
				

				<li className="about">
					<Link to="/about"> Info </Link>
				</li>
				{/* <li>
					<Link to="/weather"> Weather </Link>
				</li> */}


			</ul>
		</nav>
	)
};

export default Nav;