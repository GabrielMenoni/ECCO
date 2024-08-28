import { BellIcon, DropDownWrapper } from './styles'
import { useState } from 'react'
import { BsBell, BsXCircle, BsPip, BsCheck, BsStarFill } from 'react-icons/bs'

export function NotificationDropDown() {
  const [DropState, setDropState] = useState(false)

  function handleClick() {
    setDropState(!DropState)
  }

  return (
    <>
      <BellIcon onClick={handleClick} />
      {DropState && (
        <DropDownWrapper>
          <div>
            <p>Notificações</p>
            <BsBell />
          </div>
          <div>
            <p>Oferta cancelada</p>
            <BsXCircle />
          </div>
          <div>
            <p>Documentos verificados</p>
            <BsPip />
          </div>
          <div>
            <p>Serviço finalizado</p>
            <BsCheck />
          </div>
          <div>
            <p>Nova avaliação!</p>
            <BsStarFill />
          </div>
        </DropDownWrapper>
      )}
    </>
  )
}
