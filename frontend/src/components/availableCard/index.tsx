import React from 'react'
import { DiaServico } from '../../pages/BuscarServico/ServicosDisponiveis'
import { useNavigate } from 'react-router-dom'
import {
  Section,
  ArrowProfile,
  IconProfile,
  RatingStar,
  PlusSign,
  CashCoin,
} from './styles'

export interface CardProps {
  id?: string
  data?: Date
  nome?: string
  servico: string
  nota: number
  fixVal: boolean
  valorFixo?: number
  minVal?: number
  maxVal?: number
  diasDisponiveis: DiaServico[]
}

export function AvailableCard(props: CardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/procurarservico/', { state: { servico: props } })
  }

  return (
    <Section>
      <div className="dateHolder">
        <h2>Domingo de manhã, 16 junho de 2024</h2>
      </div>
      <div className="profileHolder">
        <h1>
          <IconProfile /> {props.nome ? props.nome : 'Prestador'}
        </h1>
        <ArrowProfile />
      </div>
      <div className="infosWrapper">
        <p className="ratingWrapper">
          <RatingStar /> {props.nota}
        </p>
        <p>{props.servico}</p>
        <p className="cashWrapper">
          <CashCoin />
          {props.fixVal
            ? `R$${props.valorFixo?.toFixed(2).replace('.', ',')}`
            : `R$${props.minVal?.toFixed(2).replace('.', ',')} - R$${props.maxVal?.toFixed(2).replace('.', ',')}`}
        </p>
      </div>
      <div className="buttonHolder">
        <button onClick={handleClick}>
          <PlusSign />
          Solicitar Serviço
        </button>
      </div>
    </Section>
  )
}
