import { VerificarEmailDiv } from './styles'
import { AcessFrame } from '../../../components/acessFrame'
import { DigitInput } from '../../../components/digitInput/index'
import { Button } from '../../../components/button'
import { useState } from 'react'
import { NovaSenha } from '../NovaSenha'
import { useLocation, useNavigate } from 'react-router-dom'

export function VerificarEmail() {
  const email = useLocation().state.email
  const navigate = useNavigate()

  const handleStepChange = (newStep: string) => {
    setStep(newStep)
  }

  return (
    <>
      <AcessFrame />
      <VerificarEmailDiv>
        {true ? (
          <form>
            <div className="allTexts">
              <div className="titleContainer">
                <h1>Encontre sua conta da ECCO</h1>
              </div>
              <div className="textContainer">
                <p>
                  Um código de confirmação foi enviado para <a>{email}</a>
                </p>
              </div>
            </div>
            <div className="inputHolder">
              <DigitInput />
            </div>
            <div className="buttonHolder">
              <Button
                variant="primary"
                text="Avançar"
                onClick={() =>
                  navigate('/perfil/mudarsenha', { state: { email } })
                }
              />
              <a>Enviar outro codigo</a>
            </div>
          </form>
        ) : (
          <NovaSenha />
        )}
      </VerificarEmailDiv>
    </>
  )
}
