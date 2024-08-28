import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../components/Header'
import {
  AcessVerification,
  userData,
} from '../../../components/AcessVerification'
import {
  BodyWrapper,
  FooterWrapper,
  IconePerfil,
  CirculoIcone,
  FotoPerfil,
  PerfilBotao,
  IconeSobreMim,
  Lapis,
  Logout,
  Excluir,
} from './styles'
import LogoArt from '../../../assets/images/LogoArtHome.svg'

export function Perfil() {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [user, setUser] = useState<userData | null>(null)

  useEffect(() => {
    async function getUser(): Promise<void> {
      const acess = await AcessVerification()
      setUser(acess.user)

      if (acess.user.fotoPerfil && acess.user.fotoPerfil !== 'null') {
        setSelectedImage(acess.user.fotoPerfil)
      }
    }

    getUser()
  }, [])

  console.log(user)

  function HandleLogOut() {
    localStorage.removeItem('authToken')
    navigate('/')
  }

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = async () => {
        const base64String = reader.result as string
        setSelectedImage(base64String)

        await updateUserProfileImage(base64String)
      }
      reader.readAsDataURL(file)
    }
  }

  const updateUserProfileImage = async (base64String: string) => {
    // Faça a requisição para a API para atualizar a imagem do perfil do usuário aqui

    // Simulação de armazenamento no estado do usuário (se necessário)
    setUser((prevUser) =>
      prevUser ? { ...prevUser, fotoPerfil: base64String } : null,
    )
  }

  return (
    <>
      <Header logged={true} />
      <BodyWrapper>
        <div className="title">
          Meu perfil <IconePerfil />
        </div>
        <div className="profileWrapper">
          <label htmlFor="file-input" className="Icon">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Foto de Perfil"
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              />
            ) : (
              <>
                <CirculoIcone />
                <div className="IconHolder">
                  <FotoPerfil /> Editar Foto
                </div>
              </>
            )}
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <div className="aboutme">
            <button>
              Editar características sobre mim <IconeSobreMim />
            </button>
          </div>
          <div className="options">
            <button>
              Editar meus dados <PerfilBotao />
            </button>
            <button onClick={() => navigate('/perfil/mudarsenha')}>
              Mudar minha senha <Lapis />
            </button>
            <button onClick={HandleLogOut}>
              Log Out <Logout />
            </button>
            <button>
              Excluir minha conta <Excluir />
            </button>
          </div>
        </div>
        <img src={LogoArt} alt="" className="logoArt" />
        <FooterWrapper>
          <a href="/contato">Contato (xx) - xxxx-xxxx</a>© ECCO - 2024
        </FooterWrapper>
      </BodyWrapper>
    </>
  )
}
