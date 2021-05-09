import React, { FormEvent, useCallback, useState } from 'react';
import { useAuth } from '../hooks/AuthContext'
import { useHistory } from 'react-router-dom'

import '../styles/pages/login.css'


function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const { signIn } = useAuth();
    const history = useHistory()


    const handleLogin = useCallback(async (event: FormEvent) => {
        console.log(signIn)
        event.preventDefault();
        try {
            
            console.log(email, pass)
            if (email !== '' && pass !== '') {
                await signIn({
                    email: email,
                    password: pass
                })

                history.push('/app');
            }
        } catch (err) {
            console.log(err)
        }


    }, [email, pass, signIn, history])



    return (
        <div className="container">
            <div className="backimg"></div>
            <form onSubmit={handleLogin} className="data" autoComplete="off" autoCorrect="off">

                <h2>Seja Bem vindo!</h2>

                <label htmlFor="email">Digite um e-mail válido</label>
                <input
                    id="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="pass">Digite sua senha</label>
                <input
                    id="pass"
                    type="password"
                    autoComplete="off"
                    onChange={(e) => setPass(e.target.value)}
                />

                <input type="submit" value="Entrar" />
            </form>
        </div>
    )
}

export default Login;