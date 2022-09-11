import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Cards = (props) => {
	//here you have to return expected html using the properties being passed to the component
    <div className="row mt-4">
    <div className="col-12 col-md-3 gx-4">
        <div className="card border border-0">
            <div className="card-header border border-0 rounded-0 d-flex align-items-center justify-content-center fs-3 text-secondary"
                style="height:200px; width:100%; background-color: lightgray;">{props.cardHeader}</div>
            <div className="card-body  border px-0">
                <h5 className="card-title text-center fs-4 text text-dark">{props.title}</h5>
                <p className="card-text text-center py-2 px-4"><small>{props.description}</small></p>
            </div>
            <div className="card-footer border mb-5 d-flex justify-content-center">
              <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    </div>

    <div className="col-12 col-md-3 gx-4">
        <div className="card border border-0">
            <div className="card-header border border-0 rounded-0 d-flex align-items-center justify-content-center fs-3 text-secondary"
                style="height:200px; width:100%; background-color: lightgray;">{props.cardHeader}</div>
            <div className="card-body  border px-0">
                <h5 className="card-title text-center fs-4 text text-dark">{props.title}</h5>
                <p className="card-text text-center py-2 px-4"><small>{props.description}</small></p>
            </div>
            <div className="card-footer border mb-5 d-flex justify-content-center">
              <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    </div>

    <div className="col-12 col-md-3 gx-4">
        <div className="card border border-0">
            <div className="card-header border border-0 rounded-0 d-flex align-items-center justify-content-center fs-3 text-secondary"
                style="height:200px; width:100%; background-color: lightgray;">{props.cardHeader}</div>
            <div className="card-body  border px-0">
                <h5 className="card-title text-center fs-4 text text-dark">{props.title}</h5>
                <p className="card-text text-center py-2 px-4"><small>{props.description}</small></p>
            </div>
            <div className="card-footer border mb-5 d-flex justify-content-center">
              <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    </div>

    <div className="col-12 col-md-3 gx-4">
        <div className="card border border-0">
            <div className="card-header border border-0 rounded-0 d-flex align-items-center justify-content-center fs-3 text-secondary"
                style="height:200px; width:100%; background-color: lightgray;">{props.cardHeader}</div>
            <div className="card-body  border px-0">
                <h5 className="card-title text-center fs-4 text text-dark">{props.title}</h5>
                <p className="card-text text-center py-2 px-4"><small>{props.description}</small></p>
            </div>
            <div className="card-footer border mb-5 d-flex justify-content-center">
              <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    </div>

  </div>
  


};

Cards.propTypes = {
	cardHeader: PropTypes.string,
    title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

ReactDOM.render(
	<Cards
        cardHeader="500 x 325"
        title="Card Title"
		description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, impedit
        praesentium, commodi officia sit, molestiae nesciunt saepe accusantium officiis."
		buttonLabel="Find out more!"
		buttonURL="#"
	/>,

	document.querySelector("#cards")
);

