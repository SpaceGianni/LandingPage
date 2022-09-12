import React from "react";
import PropTypes from "prop-types";

const Footer = ({footer}) => {
<footer>
  <div className="container">
      <div className="row">
          <div className="col-lg-12 text-center p-5 text-white" style="background-color:#414141">
              <p>Copyright &copy;{footer.text} </p>
          </div>
      </div>
  </div>
</footer>
}



Footer.propTypes = {
	footer: PropTypes.object.isRequired,
};

export default Footer;


