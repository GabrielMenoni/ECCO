import React from 'react'
import {
  primaryButton,
  secondaryButton,
  primaryExtendedButton,
  secondaryExtendedButton,
  OfferButtonEsq,
  OfferButtonDir,
  ButtonsWrapper,
  BackButton,
  BackIcon,
  nextButton,
  nextIcon,
  RatingButton,
  AiOutlineSendIcon,
  JumpSubcategoryButton,
  JumpSubcategoryBiggerButton,
  FaPlayIcon,
  PlusSquareIcon,
  EditPasswordButton,
  BsPencilIcon,
  DeleteAccountButton,
  AiOutlineWarningIcon,
  EditDataButton,
  BsPersonFillIcon,
  LogOutButton,
  AiOutlineLogoutIcon,
  DenyServiceButton,
  BsXSquareIcon,
  AcceptServiceButton,
  BsFillCheckSquareFillIcon,
  RequestServiceButton,
} from './styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant:
    | 'primary'
    | 'secondary'
    | 'primaryExtended'
    | 'secondaryExtended'
    | 'offerEsq'
    | 'offerDir'
    | 'back'
    | 'next'
    | 'sendRating'
    | 'jumpSubcategory'
    | 'jumpSubcategoryBigger'
    | 'editPassword'
    | 'deleteAccount'
    | 'editData'
    | 'logOut'
    | 'denyService'
    | 'acceptService'
    | 'requestService'
  text: string
  type?: 'button' | 'submit' | 'reset'
  icon?: boolean
}

const buttonMap = {
  primary: primaryButton,
  secondary: secondaryButton,
  primaryExtended: primaryExtendedButton,
  secondaryExtended: secondaryExtendedButton,
  offerEsq: OfferButtonEsq,
  offerDir: OfferButtonDir,
  back: BackButton,
  next: nextButton,
  sendRating: RatingButton,
  jumpSubcategory: JumpSubcategoryButton,
  jumpSubcategoryBigger: JumpSubcategoryBiggerButton,
  editPassword: EditPasswordButton,
  deleteAccount: DeleteAccountButton,
  editData: EditDataButton,
  logOut: LogOutButton,
  denyService: DenyServiceButton,
  acceptService: AcceptServiceButton,
  requestService: RequestServiceButton,
}

const iconMap: { [key: string]: React.ElementType } = {
  offerEsq: PlusSquareIcon,
  offerDir: PlusSquareIcon,
  back: BackIcon,
  next: nextIcon,
  sendRating: AiOutlineSendIcon,
  jumpSubcategory: AiOutlineSendIcon,
  jumpSubcategoryBigger: FaPlayIcon,
  editPassword: BsPencilIcon,
  deleteAccount: AiOutlineWarningIcon,
  editData: BsPersonFillIcon,
  logOut: AiOutlineLogoutIcon,
  denyService: BsXSquareIcon,
  acceptService: BsFillCheckSquareFillIcon,
  requestService: PlusSquareIcon,
}

export function Button({
  variant,
  text,
  type = 'button',
  icon = true,
  ...props
}: ButtonProps) {
  const Component = buttonMap[variant]
  const Icon = iconMap[variant]

  return (
    <Component type={type} {...props}>
      <ButtonsWrapper>
        {/* A linha abaixo coloca um icone se a condição for cumprida */}
        {(variant === 'offerEsq' ||
          variant === 'back' ||
          variant === 'next' ||
          variant === 'denyService' ||
          variant === 'acceptService' ||
          variant === 'requestService') &&
          icon && <Icon />}
        {text}
        {(variant === 'offerDir' ||
          variant === 'sendRating' ||
          variant === 'jumpSubcategory' ||
          variant === 'jumpSubcategoryBigger' ||
          variant === 'editPassword' ||
          variant === 'deleteAccount' ||
          variant === 'editData' ||
          variant === 'logOut') &&
          icon && <Icon />}
      </ButtonsWrapper>
    </Component>
  )
}
