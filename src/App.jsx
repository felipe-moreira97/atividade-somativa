import React from 'react';
import './App.css';

const validEmail = "eduardo.lino@pucpr.br"
const validPassword = "123456"

function App() {

  const [message, setMessage] = React.useState("")
  const [isError, setIsError] = React.useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    if (email === validEmail && password === validPassword) {
      setMessage("Acessado com sucesso!")
      setIsError(false)
    } else {
      setMessage("Usuário ou senha incorretos!")
      setIsError(true)
    }
  }

  const handleReset = e => {
    setIsError(false)
    setMessage("")
  }
  

  return (
    <div className="App">
      <form 
        className='form' 
        onSubmit={handleSubmit} 
        noValidate
        onReset={handleReset}
      >
        <h1 className='form-title'>Login</h1>
        <div className='input-container'>
          <label htmlFor="email">Email</label>
          <input type='email' name='email' id='email' placeholder='Digite seu e-mail' />
        </div>
        <div className='input-container'>
          <label htmlFor="password">Senha</label>
        <input type='password' name='password' id='password' placeholder='Digite sua senha' />
       {message && <p className={`message ${isError && "message-error"}`}>{message}</p>}
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
    </div>
  );
}

export default App;
