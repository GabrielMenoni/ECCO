import { DigitInputContainer } from './styles'

export function DigitInput() {
  const HandleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1)
    }

    const nextInput = input.nextElementSibling
    if (nextInput instanceof HTMLInputElement && input.value !== '') {
      nextInput.focus()
    }
  }

  return (
    <DigitInputContainer>
      <input type="number" id="1" onInput={HandleInput} />
      <input type="number" id="2" onInput={HandleInput} />
      <input type="number" id="3" onInput={HandleInput} />
      <input type="number" id="4" onInput={HandleInput} />
      <input type="number" id="5" onInput={HandleInput} />
      <input type="number" id="6" onInput={HandleInput} />
    </DigitInputContainer>
  )
}
