import React from 'react';

export default function Jumbotron() {
    return (
		<div className="jumbotron col-md-10 bg-light mx-auto px-5 pb-5 pt-3 ">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
			<a className="btn btn-primary btn-lg" href= "#" role="button">
				Call to action!
			</a>
		</div>
	);
}