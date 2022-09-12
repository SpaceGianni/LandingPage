import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ jumbotron }) => {
	return (<div className="jumbotron col-md-10 bg-light mx-auto px-5 pb-5 pt-3 ">
		<h1 className="display-4">{jumbotron.title}</h1>
		<p className="lead">{jumbotron.subtitle}</p>
		<a className="btn btn-primary btn-lg" href={jumbotron.button.link} role="button">{jumbotron.button.label} </a>
		{/* {
			jumbotron.options.map(({ link, label }, index) => {
				return (
					<li className="btn btn-primary btn-lg" role="button" key={index} href={link}>{label}</li>
				)
			})
		} */}
	</div>)

};

Jumbotron.propTypes = {
	jumbotron: PropTypes.object.isRequired,
};

export default Jumbotron;

