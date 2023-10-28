import React from "react";
import PropTypes from "prop-types";
import "../style/Btn.css";

const Button = ({ text, onClick, icon: Icon }) => {
  return (
    <div>
      <button onClick={onClick} className="btn">
        {Icon && <Icon className="icon" />}
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
};

export default Button;
