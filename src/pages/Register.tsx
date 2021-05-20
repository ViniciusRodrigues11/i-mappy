import React, { FormEvent, useCallback, useState } from 'react';
import { useAuth } from '../hooks/AuthContext'
import { Link, useHistory } from 'react-router-dom'

import '../styles/pages/login.css'


function Register() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const { userRegister } = useAuth();
    const history = useHistory()


    const handleLogin = useCallback(async (event: FormEvent) => {
        
        event.preventDefault();
        try {


            if (name !== '' && email !== '' && pass !== '') {
                await userRegister({
                    name: name,
                    email: email,
                    password: pass
                })

                history.push('/login');
            }
        } catch (err) {
            console.log(err)
        }


    }, [name, email, pass, userRegister, history])



    return (
        <div className="container">
            <div className="backimg"></div>
            <form onSubmit={handleLogin} className="data" autoComplete="off" autoCorrect="off">

                <h2>Crie sua conta</h2>

                <label htmlFor="name">Qual o seu nome?</label>
                <input
                    id="name"
                    type="name"
                    onChange={(e) => setName(e.target.value)}
                />


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

                <Link to="/login">Voltar para Login</Link>
                
            </form>
        </div>
    )
}

export default Register;