import { PageWrapper } from './styles'

export function AcessoNegado() {
  return (
    <PageWrapper>
      <h1>Acesso Negado</h1>
      <h2>Você precisa estar logado para acessar essa página!</h2>
      <a href="/">Voltar a página inicial</a>
    </PageWrapper>
  )
}
