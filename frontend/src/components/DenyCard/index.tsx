import { Section, ArrowProfile, IconProfile } from './styles'

interface DenyProps {
  data?: Date
  nome?: string
  endereco?: string
  servico: string
  fixVal: boolean
  valorFixo?: number
  minVal?: number
  maxVal?: number
}
export function DenyCard(props: DenyProps) {
  return (
    <Section>
      <div className="dateHolder">
        <h2>Domingo, 16 junho de 2024</h2>
      </div>
      <div className="profileHolder">
        <h1>
          <IconProfile /> {props.nome ? props.nome : 'Prestador'}
        </h1>
        <ArrowProfile />
      </div>
      <div className="infosWrapper">
        <p>{props.servico}</p>
        <p className="cashWrapper">
          {props.fixVal
            ? `Valor: R$${props.valorFixo.toFixed(2).replace('.', ',')}`
            : `Valor: R$${props.minVal.toFixed(2).replace('.', ',')} -
             Valor: R$${props.maxVal.toFixed(2).replace('.', ',')}`}
        </p>
        <p>Rua {props.endereco}</p>
      </div>
    </Section>
  )
}
