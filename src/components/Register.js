import React from "react";

function Register() {
    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')

    return (
        <div className="auth page__auth">
            <h3 className="auth__title">Регистрация</h3>
            <form className="auth__form">
                <input className="auth_input" type="email" placeholder="Email" value={email || ''} required />
                <input className="auth_input" type="password" placeholder="Пароль" value={password || ''} required />
                <button className="auth__button" type="submit">Зарегистрироваться</button>
            </form>
            <span className="auth__link">Уже зарегистрированы? Войти</span>
        </div>
    )
}

export default Register