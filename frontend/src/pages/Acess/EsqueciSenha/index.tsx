import { EsqueciSenhaDiv } from './styles'
import { AcessFrame } from '../../../components/acessFrame'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/button/index'
import { useState } from 'react'
import { VerificarEmail } from '../VerificacaoEmail'
import { useNavigate } from 'react-router-dom'

export function EsqueciSenha() {
  const navigate = useNavigate()
  const [step, setStep] = useState('login')
  const [email, setEmail] = useState('')

  const handleStepChange = (newStep: string) => {
    setStep(newStep)
    console.log(email)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const isEmailValid = email.includes('@') && email.includes('.com')

  return (
    <>
      {step === 'login' ? (
        <>
          <AcessFrame />
          <EsqueciSenhaDiv>
            <form>
              <div className="titleContainer">
                <h1>Encontre sua conta da ECCO</h1>
                <p>
                  Informe o e-mail associado à sua conta para alterar sua senha.
                </p>
              </div>
              <div className="inputHolder">
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="buttonHolder">
                <Button
                  variant="primary"
                  text="Avançar"
                  onClick={() =>
                    navigate('/login/esquecisenha/email', { state: { email } })
                  }
                  disabled={!isEmailValid}
                />
              </div>
            </form>
          </EsqueciSenhaDiv>
        </>
      ) : (
        <VerificarEmail />
      )}
    </>
  )
}
