import { api } from '../../api'

export interface userData {
  avaliacao: number
  celular: string
  email: string
  fotoFrenteDocumento: string
  fotoPerfil: string
  fotoVersoDocumento: string
  id: string
  nome: string
  tipoDocumento: string
  verificado: boolean
}

interface AcessVerificationReturn {
  logged: boolean
  token: string | null
  user: userData
}

export async function AcessVerification(): Promise<AcessVerificationReturn> {
  const token = localStorage.getItem('authToken')
  let returned: AcessVerificationReturn = {
    logged: false,
    token: null,
    user: {} as userData,
  }
  await api
    .get('/users/me', { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      // Sucess
      returned = { logged: true, token, user: response.data.user }
    })
    .catch(() => {
      // Error
      returned = { logged: false, token: null, user: {} as userData }
    })
  return returned
}
