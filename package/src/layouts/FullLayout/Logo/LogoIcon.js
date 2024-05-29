import React from "react";
// import logoicn from "../../../assets/images/logo-dark.svg";
import regress_logo from "../../../assets/images/regress_logo.png";
const LogoIcon = (props) => {

  return <img alt="Logo" src={regress_logo} width={"210px"} height={"70px"} {...props} />;
};

export default LogoIcon;
