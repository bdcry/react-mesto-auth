import React from "react";
import VectorLogo from "../images/logo.svg";
import { Switch, Route, Link } from 'react-router-dom'

function Header({ onSignOut, userEmail }) {
  return (
    <header className="header page__header">
      <img src={VectorLogo} alt="Логотип" className="logo page__logo" />
      <Switch>
        <Route path="/sign-in">
          <Link className="auth__link" to="/sign-up">
            Регистрация
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link className="auth__link" to="/sign-in">
            Войти
          </Link>
        </Route>
        <Route path="/">
          <div>
            <span className='auth__email'>{userEmail || ''}</span>
            <Link onClick={onSignOut} className="auth__link auth__link_signout" to="/sign-in">
              Выйти
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
