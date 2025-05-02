import React from 'react';
import './style.css'
import { createUser } from '../../utils/db';
import { Link, useNavigate } from 'react-router'

export default function SingUp() {
    const [message, setMessage] = React.useState("")
    const [isError, setIsError] = React.useState(false)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        const {
            email: { value: email },
            password: { value: password },
            name: { value: name },
            lastName: { value: lastName },
            birthDate: { value: birthDate }
        } = e.target.elements
        if (email && password && name && lastName && birthDate) {
            createUser({
                email,
                password,
                name,
                lastName,
                birthDate
            }).then(() => {
                setMessage("Criado com sucesso!")
                setIsError(false)
                navigate('/sign-in')
            }).catch(() => {
                setMessage("Algo deu errado!")
                setIsError(true)
            })
        } else {
            setMessage("Dados inválidos!")
            setIsError(true)
        }
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
            <h1 className='form-title'>Cadastro</h1>
            <div className='input-container'>
                <label htmlFor="name">Nome</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Digite seu nome'
                />
            </div>
            <div className='input-container'>
                <label htmlFor="lastName">Sobrenome</label>
                <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Digite seu sobrenome'
                />
            </div>
            <div className='input-container'>
                <label htmlFor="birthDate">Data de nascimento</label>
                <input
                    type='date'
                    name='birthDate'
                    id='birthDate'
                    placeholder='Digite sua data de nascimento'
                />
            </div>
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
                <p className='description'>Já tem uma conta? <Link to="/sign-in">Clique aqui</Link></p>
            </div>
            <div className='input-buttons-container'>
                <button type='reset'>
                    Redefinir
                </button>
                <button type='submit'>
                    Cadastrar
                </button>
            </div>
        </form>
    )
}