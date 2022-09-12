import React from "react";
import PropTypes from "prop-types";

const Footer = ({Footer}) => {
<footer>
  <div className="container">
      <div className="row">
          <div className="col-lg-12 text-center p-5 text-white" style="background-color:#414141">
              <p>Copyright &copy;{Footer.text} </p>
          </div>
      </div>
  </div>
</footer>
}


Footer.propTypes = {
	Footer: PropTypes.object.isRequired,
};


