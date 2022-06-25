// Login — компонент авторизации пользователя с необходимыми стейт-переменными.

import React from "react";

function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div className="auth page__auth">
            <h3 className="auth__title">Вход</h3>
            <form className="auth__from">
                <input className='auth__input' type='email' placeholder='Email' value={email || ''} required />
                <input className='auth__input' type='password' placeholder='Пароль' value={password || ''} required />
                <button type="submit" className="auth__button">Войти</button>
            </form>
        </div>
    )
}

export default Login