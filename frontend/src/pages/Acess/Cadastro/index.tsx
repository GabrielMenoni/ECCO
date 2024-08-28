import { AcessFrame } from '../../../components/acessFrame'
import { SignUpVerificationDiv } from './styles'
import { Button } from '../../../components/button'
import { useNavigate } from 'react-router-dom'

export function CadastroConfirma() {
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/')
  }

  return (
    <>
      <AcessFrame />
      <SignUpVerificationDiv>
        <div className="text">
          Seu registro está sendo verificado.
          <br /> Nossa equipe enviará um e-mail quando estiver tudo pronto.
        </div>
        <Button
          variant="jumpSubcategoryBigger"
          text="Voltar para a home"
          onClick={handleNavigateHome}
        />
      </SignUpVerificationDiv>
    </>
  )
}