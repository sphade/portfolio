import React from "react";
import "../styles/logo.css";
function Logo({ width, height }) {
  let styles = {
    width: width,
    height: height,
  };
  return (
    <div className="logo" style={styles}>
      <div className="box box-1"></div>
      <div className="box box-2"></div>
      <div className="box box-3"></div>
    </div>
  );
}

export default Logo;
