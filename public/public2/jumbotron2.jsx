import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	return (<div className="jumbotron col-md-10 bg-light mx-auto px-5 pb-5 pt-3 ">
	<h1 className="display-4">{props.title}</h1>
	<p className="lead">{props.description}</p>
	<a className="btn btn-primary btn-lg" href={props.buttonUrl} role="button">
		{props.buttonLabel}
	</a>
</div>)
	
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description:PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};

<Jumbotron title="A Warm Welcome!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." buttonUrl="#" buttonLabel="Call to action!"/>



