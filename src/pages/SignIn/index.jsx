import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router'
import './style.css'
import { signIn } from '../../utils/db';
import authContext from '../../contexts/authContext';

export default function SignIn() {
    const [message, setMessage] = React.useState("")
    const [isError, setIsError] = React.useState(false)
    const { setUser } = useContext(authContext)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const { email: { value: email }, password: { value: password } } = e.target.elements
        signIn(email, password)
            .then(user => {
                setUser(user)
                navigate("/")
            })
            .catch(() => {
                setMessage("Usuário ou senha incorretos!")
                setIsError(true)
            })
    }

    const handleReset = () => {
        setIsError(false)
        setMessage("")
    }

    return (
        <form
            className='form'
            onSubmit={handleSubmit}
            noValidate
            onReset={handleReset}
        >
            <h1 className='form-title'>Login</h1>
            <div className='input-container'>
                <label htmlFor="email">Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Digite seu e-mail'
                />
            </div>
            <div className='input-container'>
                <label htmlFor="password">Senha</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Digite sua senha'
                />
                {message && <p className={`message ${isError && "message-error"}`}>{message}</p>}
                <p className='description'>Não tem uma conta? <Link to="/sign-up">Clique aqui</Link></p>
            </div>
            <div className='input-buttons-container'>
                <button type='reset'>
                    Redefinir
                </button>
                <button type='submit'>
                    Acessar
                </button>
            </div>
        </form>
    )
}