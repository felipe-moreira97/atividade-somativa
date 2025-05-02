import { useContext, useEffect } from "react"
import authContext from "../../contexts/authContext"
import { useNavigate } from 'react-router'

export default function Dashboard() {
    const { user } = useContext(authContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate('/sign-in')
        }
    })
    if (!user) {
        return <p>Usuário não autenticado</p>
    }
    return (
        <div>
            <p>Nome: {user.name}</p>
            <p>Sobrenome: {user.lastName}</p>
            <p>Data de nascimento: {user.birthDate}</p>
        </div>
    )
}