import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ Jumbotron }) => {
	return (<div className="jumbotron col-md-10 bg-light mx-auto px-5 pb-5 pt-3 ">
		<h1 className="display-4">{Jumbotron.title}</h1>
		<p className="lead">{Jumbotron.subtitle}</p>
		{
			Jumbotron.options.map(({ link, label }, index) => {
				return (
					<li className="btn btn-primary btn-lg" role="button" key={index}><a className="nav-link" href={link}>{label}</a></li>
				)
			})
		}
		{/* <a className="btn btn-primary btn-lg" href={jumbotron.button.link} role="button">
		{jumbotron.button.label}
	</a> */}
	</div>)

};

Jumbotron.propTypes = {
	Jumbotron: PropTypes.object.isRequired,
};

export default Jumbotron;

