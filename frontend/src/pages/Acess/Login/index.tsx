import { Input } from '../../../components/Input'
import { Button } from '../../../components/button'
import { AcessFrame } from '../../../components/acessFrame'
import { LoginDiv } from './styles'
import { useState, useEffect } from 'react'
import { api } from '../../../api'
import { useNavigate } from 'react-router-dom'
import { AcessVerification } from '../../../components/AcessVerification'

export function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const acess = await AcessVerification()
      setLogged(acess.logged)
    }
    fetchData()
  }, [])

  if (logged) {
    navigate('/')
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    api
      .post('/sessions', {
        email,
        senha: password,
      })
      .then((response) => {
        localStorage.setItem('authToken', response.data.token)
        navigate('/')
        // Redirecionar para a página desejada após o login, se necessário
      })
      .catch(() => {
        alert('E-mail ou senha incorretos')
      })
  }

  const handleForgotPassword = () => {
    navigate('/login/esquecisenha')
  }

  return (
    <>
      <AcessFrame />
      <LoginDiv>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="inputs">
            <Input
              type="text"
              placeholder="E-mail"
              onChange={handleEmailChange}
              value={email}
            />
            <Input
              type="password"
              placeholder="Senha"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="bottomWrapper">
            <div className="buttons">
              <Button variant="primaryExtended" text="Avançar" type="submit" />
              <Button
                variant="secondaryExtended"
                text="Esqueci minha senha"
                onClick={handleForgotPassword}
              />
            </div>
            <div className="bottom">
              Não tem uma conta?
              <a href="/cadastrar">Inscreva-se</a>
            </div>
          </div>
        </form>
      </LoginDiv>
    </>
  )
}
