import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
}

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
