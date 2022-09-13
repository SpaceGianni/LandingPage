import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ jumbotron }) => {
	return (
		<div className="container-fluid p-0 justify-content-center">
			<div className="jumbotron col-10 m-auto p-5">
				<h1 className="display-3">{jumbotron.title}</h1>
				<p className="lead">{jumbotron.subtitle}</p>
				<a className="btn btn-primary btn-lg" href={jumbotron.button.link} role="button">{jumbotron.button.label} </a>
			</div>
		</div>)

};

Jumbotron.propTypes = {
	jumbotron: PropTypes.object.isRequired,
};

export default Jumbotron;

