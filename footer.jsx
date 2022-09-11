import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Footer = (props) => {
<footer>
  <div className="container">
      <div className="row">
          <div className="col-lg-12 text-center p-5 text-white" style="background-color:#414141">
              <p>Copyright &copy;{props.copyright} </p>
          </div>
      </div>
  </div>
</footer>
}


Footer.propTypes = {
	copyright: PropTypes.string,
};

ReactDOM.render(
	<Footer
        copyright="Made with love by the Girl's team : Ginicode, - 2022"
	/>,

	document.querySelector("#footer")
);