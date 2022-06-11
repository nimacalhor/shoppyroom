import useDeviceType from "@modules/general/libraries/device-type";
import Logo from "@modules/general/components/logo";
import stl from "./Footer.module.scss";
import React from "react";

const Footer = () => {
  return (
    <div className={stl.root}>
      <Logo deviceType={useDeviceType()} />
    </div>
  );
};

export default Footer;
