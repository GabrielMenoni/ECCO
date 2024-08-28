import { useState } from 'react'
import { DivInput, EyeIcon, EyeSlashIcon } from './styles'

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password'
}

export function Input(props: PropsInput) {
  const [passwordType, setPasswordType] = useState('password')

  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === 'password' ? 'text' : 'password',
    )
  }

  if (props.type === 'text') {
    return (
      <DivInput>
        <input {...props} className="noIcon" />
      </DivInput>
    )
  } else {
    return (
      <DivInput>
        <input
          {...props}
          type={passwordType}
          placeholder={props.placeholder || 'Senha'}
        />
        <button type="button" onClick={togglePassword}>
          {passwordType === 'password' ? <EyeIcon /> : <EyeSlashIcon />}
        </button>
      </DivInput>
    )
  }
}
