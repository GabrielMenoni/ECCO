import { NovaSenhaDiv, SenhaCriadaDiv } from './styles'
import { AcessFrame } from '../../../components/acessFrame'
import { Input } from '../../../components/Input/index'
import { Button } from '../../../components/button'
import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function NovaSenha() {
  const [password, setPassword] = useState('')
  const [correctPassword, setCorrect] = useState(false)
  const navigate = useNavigate()

  const getPassword = (event: { preventDefault: () => void }) => {
    const contemMaiuscula = /[A-Z]/.test(password)
    const contemMinuscula = /[a-z]/.test(password)
    const contemNumero = /[0-9]/.test(password)
    const contemEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password) // pode adicionar outros especiais :p

    event.preventDefault()
    if (
      password.length >= 8 && // maior q 8 caracteres
      contemMaiuscula && // tem maiuscula
      contemMinuscula && // tem minuscula
      contemNumero && // tem numero
      contemEspecial && // tem especial
      password.trim() === password // se a senha sem espaço no fim e no começo for igual a senha (nao tem espaços)
    ) {
      setCorrect(true)
    }
  }

  const handleBackToLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <AcessFrame />
      {correctPassword === false ? (
        <NovaSenhaDiv>
          <form className="envioSenha" onSubmit={getPassword}>
            <div className="titlesContainer">
              <h1>Redefinir sua senha</h1>
              <h2>Crie uma nova senha</h2>
            </div>
            <ul>
              <li>Escolha senhas com pelo menos 8 caracteres</li>
              <li>
                Utilize no mínimo uma letra minúscula, maiúscula, um número e um
                caractere especial
              </li>
              <li>Não comece ou termine com um espaço em branco</li>
            </ul>
            <div className="inputHolder">
              <Input
                type="text"
                placeholder="Nova senha"
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setPassword(e.target.value)
                }
              />
            </div>
            <div className="buttonHolder">
              <Button variant="primary" text="Avançar" type="submit" />
            </div>
          </form>
        </NovaSenhaDiv>
      ) : (
        <SenhaCriadaDiv>
          <div className="titleWrapper">
            <h1 className="senhaRedefinida">Senha redefinida com sucesso</h1>
          </div>
          <div className="buttonWrapper">
            <Button
              variant="primary"
              text="Voltar para Login"
              onClick={handleBackToLogin}
            />
          </div>
        </SenhaCriadaDiv>
      )}
    </>
  )
}
