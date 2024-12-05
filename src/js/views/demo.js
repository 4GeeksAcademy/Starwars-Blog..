import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Personas from "../component/personas";
import Vehiculos from "../component/vehiculos";
import Planetas from "../component/planetas";
import "../../styles/demo.css";


export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Demo de Funcionalidades</h1>
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<div className="section">
				<h2>Personas</h2>
				<Personas />
			</div>
			<div className="section">
				<h2>Vehiculos</h2>
				<Vehiculos />
			</div>
			<div className="section">
				<h2>Planetas</h2>
				<Planetas />
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
export default Demo;