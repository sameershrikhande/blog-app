// import React from "react";
import logoImage from '../assets/logo.jpg';

function Logo({ width = "100px" }) {
  return (
    <>
      <div>
        <img src={logoImage} className="ring ring-white ring-offset-base-100 ring-offset-2 rounded-lg " alt="Logo" style={{ width: width }}  />
      </div>
    </>
  );
}

export default Logo;
