import React from "react";
import VectorLogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__header">
      <img src={VectorLogo} alt="Логотип" className="logo page__logo" />
    </header>
  );
}

export default Header;
