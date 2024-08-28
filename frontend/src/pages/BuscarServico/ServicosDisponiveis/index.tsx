import { Header } from '../../../components/Header'
import { BodyWrapper, TitleTool } from './styles'
import LogoArt from '../../../assets/images/LogoArtHome.svg'
import { AvailableCard } from '../../../components/availableCard'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../../api'
import { AcessVerification } from '../../../components/AcessVerification'

export interface DiaServico {
  id?: string // Optional for creation
  data: string
  periodo: string
  servicoId?: string
}

// Foi adicionado a seguinte interface para ser possivél o acesso no objeto serviço
interface Subcategoria {
  id: string
  nome: string
  categoriaId: string
}

// Foi adicionado a seguinte interface para ser possivél o acesso no objeto serviço
interface Usuario {
  id: string
  nome: string
  email: string
  senha: string
  celular: string
  avaliacao: number
  fotoFrenteDocumento: string
  fotoVersoDocumento: string
  tipoDocumento: string
  verificado: boolean
  fotoPerfil: string
}

interface Servico {
  id: string
  momentoCriacao: string
  precoFixo?: number | null
  precoMin?: number | null
  precoMax?: number | null
  subcategoria: Subcategoria // Adicionado para acessar os atributos de Subcategoria
  subcategoriaId: string
  usuarioId: string
  usuario: Usuario // Adicionado para acessar os atributos de Usuario
  diasServico?: DiaServico[]
}

export function ServicosDisponiveis() {
  const location = useLocation() // Instancia do location que recupera os valores locais passadas da pagina anterior
  const [servicos, setServicos] = useState<Servico[]>([])
  const { categorySelected, subCategorySelected, dates } = location.state || {} // Retorna as variavéis do objeto

  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/pesquisaavancada')
  }

  useEffect(() => {
    async function getUser(): Promise<any> {
      const acess = await AcessVerification()
      return acess.user.id
    }

    async function getServices(): Promise<any> {
      const user = await getUser()

      // Verifica se os dados existem e faz a requisição para o backEnd
      try {
        if (categorySelected && subCategorySelected && dates) {
          const params = {
            id: user,
            category: categorySelected,
            subCategory: subCategorySelected,
            dates,
          }

          const servicos = await api.get('/services/search', { params })
          return servicos
        }
      } catch (error) {
        console.error('Erro ao buscar serviços:', error)
      }
    }

    getServices().then((response) => {
      setServicos(response.data)
      console.log('--------', response.data)
    })
  }, [])

  function toTitleCase(str: string): string {
    return str
      .toLowerCase() // Converte toda a string para minúsculas
      .split(' ') // Divide a string em um array de palavras
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Converte a primeira letra de cada palavra para maiúscula
      .join(' ') // Junta as palavras de volta em uma string
  }

  return (
    <>
      <Header logged={true} />
      <BodyWrapper>
        <div className="contentHolder">
          <div className="textsHolder">
            <div className="titleHolder">
              <h1>
                Serviços Disponíveis
                <TitleTool />
              </h1>
            </div>
            <div className="subtitleHolder">
              <h2>
                {servicos.length} Serviços{categorySelected ? ` de ${categorySelected}` : ''} encontrados
              </h2>
            </div>
          </div>
          <div className="cardHolder">
            {servicos.map((servico) => {
              return (
                <AvailableCard
                  key={servico.id}
                  nome={servico.usuario.nome} // Acessa o atributo nome do objeto usuario dentro de serviço
                  servico={toTitleCase(
                    categorySelected + ' - ' + servico.subcategoria.nome,
                  )} // Acessa o atributo nome do objeto subcategoria dentro de serviço
                  nota={4.7}
                  fixVal={servico.precoFixo !== null}
                  valorFixo={servico.precoFixo == null ? 0 : servico.precoFixo}
                  minVal={servico.precoMin == null ? 0 : servico.precoMin}
                  maxVal={servico.precoMax == null ? 0 : servico.precoMax}
                  diasDisponiveis={servico.diasServico!}
                  id={servico.id}
                />
              )
            })}
          </div>

          <div className="buttonWrapper">
            <button onClick={handleBackClick}>Voltar</button>
          </div>
        </div>
        <img src={LogoArt} alt="" className="logoArt" />
      </BodyWrapper>
    </>
  )
}
