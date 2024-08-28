import React, { useState, ChangeEvent, FormEvent } from 'react'
import { NovaSenhaDiv } from './styles'
import { AcessFrame } from '../../components/acessFrame/index'
import { Input } from '../../components/Input/index'
import { Button } from '../../components/button/index'
import { api } from '../../api'
import { CadastroConfirma } from '../Acess/Cadastro'

export function Cadastro() {
  // Definindo o estado para os inputs
  const [nomeCompleto, setNomeCompleto] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [rg, setRg] = useState<string>('')
  const [celular, setCelular] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [step, setStep] = useState('doing')

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    switch (name) {
      case 'nomeCompleto':
        setNomeCompleto(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'rg':
        setRg(value)
        break
      case 'celular':
        setCelular(value)
        break
      case 'senha':
        setSenha(value)
        break
      default:
        break
    }
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStep('done')

    api.post('/users', {
      nome: nomeCompleto,
      email,
      senha,
      celular,
      avaliacao: 0,
      fotoFrenteDocumento: 'null',
      fotoVersoDocumento: 'null',
      tipoDocumento: 'rg',
      verificado: false,
      fotoPerfil: 'null',
    })
  }

  return (
    <>
      {step === 'doing' ? (
        <>
          <AcessFrame />
          <NovaSenhaDiv>
            <form onSubmit={handleSubmit}>
              <div className="titleContainer">
                <h1>Cadastre-se</h1>
              </div>
              <div className="inputsHolder">
                <Input
                  type="text"
                  name="nomeCompleto"
                  value={nomeCompleto}
                  placeholder="Nome Completo"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="E-mail"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="rg"
                  value={rg}
                  placeholder="RG"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="celular"
                  value={celular}
                  placeholder="Celular"
                  onChange={handleInputChange}
                />
                <Input
                  type="password"
                  name="senha"
                  value={senha}
                  placeholder="Senha"
                  onChange={handleInputChange}
                />
              </div>
              <div className="listHolder">
                <ul>
                  <li>Escolha senhas com pelo menos 8 caracteres</li>
                  <li>
                    Utilize no mínimo uma letra minúscula, maiúscula, um número
                    e um caractere especial
                  </li>
                  <li>Não comece ou termine com um espaço em branco</li>
                </ul>
              </div>
              <div className="buttonHolder">
                <Button variant="primary" text="Criar" type="submit" />
              </div>
            </form>
          </NovaSenhaDiv>
        </>
      ) : (
        <CadastroConfirma />
      )}
    </>
  )
}