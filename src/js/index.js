import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SecondsCounter(props) {
	return (
		<div className="contenedor">
			<div className="reloj">
				<i className="far fa-clock"></i>
			</div>
			<div className="dijito4">{props.digitCuatro % 10}</div>
			<div className="digito3">{props.digitTres % 10}</div>
			<div className="digito2">{props.digitDos % 10}</div>
			<div className="digito1">{props.digitUno % 10}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitCuatro: PropTypes.number,
	digitTres: PropTypes.number,
	digitDos: PropTypes.number,
	digitUno: PropTypes.number
};

let contador = 0;

setInterval(function() {
	const digito4 = Math.floor(contador / 1000);
	const digito3 = Math.floor(contador / 100);
	const digito2 = Math.floor(contador / 10);
	const digito1 = Math.floor(contador / 1);
	console.log(digito4, digito3, digito2, digito1);

	contador++;

	ReactDOM.render(
		<SecondsCounter
			digitUno={digito1}
			digitDos={digito2}
			digitTres={digito3}
			digitCuatro={digito4}
		/>,
		document.querySelector("#app")
	);
}, 1000);
