import React, { FormEvent, useCallback, useState } from 'react';
import { useAuth } from '../hooks/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { useToast } from '../hooks/ToastContext';
import '../styles/pages/login.css'


function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const { signIn } = useAuth();
    const history = useHistory()
    const { addToast } = useToast();

    const handleLogin = useCallback(async (event: FormEvent) => {

        event.preventDefault();
        try {
            if (email !== '' && pass !== '') {
                await signIn({
                    email: email,
                    password: pass
                })

                history.push('/dashboard');
            }
        } catch (err) {
            addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
            });
        }


    }, [email, pass, signIn, history, addToast])



    return (
        <div className="container">

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


                <Link to="/register">Crie sua conta!</Link>
            </form>
        </div>
    )
}

export default Login;