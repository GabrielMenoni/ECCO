/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route } from 'react-router-dom'
import { EsqueciSenha } from './pages/Acess/EsqueciSenha/index'
import { Login } from './pages/Acess/Login'
import { NovaSenha } from './pages/Acess/NovaSenha/index'

import { Calendario } from './pages/BuscarServico/PesquisaAvancada'
import { ServicosDisponiveis } from './pages/BuscarServico/ServicosDisponiveis'

import { VerificarEmail } from './pages/Acess/VerificacaoEmail'

import { Cadastro as FazerCadastro } from './pages/Cadastro'

import { Chat } from './pages/Chat/ChatsDisponiveis'

import { Home } from './pages/Home'

import { Perfil } from './pages/MeuPerfil/Perfil'

import { NegarServico } from './pages/NegarServico'

import { Calendario as CalendarioPrestar } from './pages/PrestarServico/Calendario'
import { EnderecoPreco } from './pages/PrestarServico/EnderecoPreco'
import { PrestarServico } from './pages/PrestarServico/'

import { ServicosAndamento } from './pages/ServicosAndamento'

import { ServicosFinalizados } from './pages/ServicosFinalizados'
import { Avaliacao } from './pages/ServicosFinalizados/AvaliarServico'

import { Contato } from './pages/Contato'

import { AcessoNegado } from './pages/Acess/AcessoNegado'
import { PrivateRoute } from './PrivateRoute'

// import { Configuracoes } from './pages/Configuracoes/Configuracoes'
// import { ChatId } from './pages/Chat/ChatId'

// --Home
// / -- rota feita
// /pesquisaavancada --rota feita

// --Outras
// /contato -- rota feita
// /sobre  -- num tem mais kkk

// --Perfil
// /perfil -- rota feita
// /perfil/editardados -- ue kd a tela
// /perfil/mudarsenha  -- rota feita
// /perfil/contratante/{user} -- vai ter logo kkk
// /perfil/prestador/{user} -- vai ter logo kkk

// --Acess
// /login -- rota feita
// /login/esquecisenha -- rota feita
// /login/esquecisenha/confirmacao/{token}  -- nao e assim q a banda toca sepa
// /cadastrar -- rota feita

// --Serviços
// /procurarservico  -- feito
// /servicosdisponiveis/{param}
// /servicosandamento/{user} -- feito
// /cadastrarservico -- feito
// /editarservico/{token} -- falta dar o merge, mas rota feita na linha
// /negarservico/{param} --feito
// /servicosfinalizados/{user} -- feito
// /avaliarservico/{token} -- feito

// --Chat
// /chatdisponiveis/{user} -- feito
// /chat/{token} -- feito

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* feito, editar LoggedIn com token */}
      <Route path="/pesquisaavancada" element={<Calendario />} /> {/* feito */}
      <Route path="/login" element={<Login />} />
      {/* feito, redirecionar pra home logada apos o login e alertar senha errada :p */}
      <Route path="/login/esquecisenha" element={<EsqueciSenha />} />
      <Route path="/login/esquecisenha/email" element={<VerificarEmail />} />
      {/* feito */}
      <Route path="/cadastrar" element={<FazerCadastro />} />
      {/* precisa implementar o pós cadastro, so mudar o componente */}
      <Route path="/contato" element={<Contato />} /> {/* feito */}
      <Route path="/acessonegado" element={<AcessoNegado />} />
      <Route path="/perfil/mudarsenha" element={<NovaSenha />} />
      {/* feito, juntar com o enderecoepreco, apos selecionar no calendario */}
      {/* Rotas privadas */}
      <Route element={<PrivateRoute />}>
        <Route path="/pesquisaavancada" element={<Calendario />} />
        <Route path="/perfil" element={<Perfil />} /> {/* feito */}
        {/* feito */}
        <Route path="/servicosfinalizados" element={<ServicosFinalizados />} />
        {/* feito */}
        <Route path="/avaliarservico" element={<Avaliacao />} /> {/* feito */}
        {/* feito */}
        <Route path="/procurarservico" element={<CalendarioPrestar />} />
        <Route
          path="/buscarservico/enderecoepreco"
          element={<EnderecoPreco />}
        />
        <Route path="/servicosdisponiveis" element={<ServicosDisponiveis />} />
        {/* feito */}
        <Route path="/servicosandamento" element={<ServicosAndamento />} />
        {/* feito */}
        <Route path="/cadastrarservico" element={<PrestarServico />} />
        {/* feito */}
        <Route path="/editarservico" element={<Home />} />
        {/* falta dar o merge */}
        <Route path="/negarservico" element={<NegarServico />} />
        <Route path="/chat" element={<Chat />} />
        {/* kkkk esse vai se ossada em */}
      </Route>
    </Routes>
  )
}
