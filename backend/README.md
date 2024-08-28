# Application Description and Overview

    - ECCO é um website que tem como objetivo facilitar a procura de serviços,
      tanto de limpeza como de manutenção.

## Functional Requirements (Stuff the user knows about)

    - [x] Deve ser possível criar um usuário;
    - [x] Deve ser possível atualizar um usuário;
    - [x] Deve ser possível consultar um ou vários usuários; 
    - [ ] Deve ser possível verificar os documentos do usuário;
    - [x] Deve ser possível criar um serviço; 
    - [x] Deve ser possível atualizar um serviço;
    - [x] Deve ser possível deletar um serviço;
    - [x] Deve ser possível consultar um ou vários serviços;
    - [x] Deve ser possível oferecer datas disponíveis para o serviço;
    - [x] Deve ser possível criar um dia de serviço;
    - [x] Deve ser possível criar uma categoria;
    - [x] Deve ser possível atualizar uma categoria;
    - [x] Deve ser possível consultar uma ou várias categorias;
    - [x] Deve ser possível deletar uma categoria; 
    - [x] Deve ser possível criar um subcategoria;
    - [x] Deve ser possível atualizar uma subcategoria;
    - [x] Deve ser possível consultar uma ou várias subcategorias;
    - [x] Deve ser possível deletar uma subcategoria; 
    - [x] Deve ser possível criar uma reserva;
    - [x] Deve ser possível consultar uma ou várias reservas;
    - [x] Deve ser possível deletar uma reserva;
    - [x] Deve ser possível criar uma mensagem; 
    - [ ] Deve ser possível deletar uma mensagem;

## Business Rules (Constraints for the app)

    - [x] As datas disponíveis devem ter no máximo duração de 4 dias, após a criação;

    - [x] O período do dia de serviço pode ter ser atribuido como, manhã ou tarde. Caso   não seja atribuido algum valor, será atribuido todo o período;

    - [x] Cada serviço deve ter uma categoria e uma subcategoria;

    - [x] Para fazer um pedido de reserva é necessário realizar uma pesquisa por categoria, data ou uma subcategoria;

    - [ ] Na consulta de um prestador de serviço, apenas as avaliações referentes aos serviços prestados devem ser exibidos;

    - [ ] O prestado de serviço deve conseguir visualizar o perfil do cliente, visualizando apenas as suas contratações;

    - [ ] Caso o prestador de serviço negar a solicitação ele deve informar o motivo;

    - [ ] Caso o prestador de serviço aceite a solicitação deve ser criado um chat, além disso o serviço deverá ficar indisponivel;

    - [ ] O chat não deve ficar mais disponível depois do dia do serviço marcado;

    - [ ] O chat deve conter um aviso para que nenhuma transferência bancária seja feita antes do serviço. Não deve ser possívelenviar imagens, localização, documentos ou qualquer outra coisa que não seja texto puro;

    - [ ] Após a data do serviço, ambos os usuários envolvidos devem conseguir fazer uma avaliação: nota de 0 a 5 e um comentário curto;

    - [ ] As avaliações devem ser referentes a uma prestação de serviço ou uma contratação de serviço;


## Non-Functional Requirements (Stuff the user does not know about)

    - [x] A senha do usuário precisa estar criptografada;
    - [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
    - [ ] Todas as listas de dados devem estar paginadas com 10 itens por página;
    - [x] O usuário deve ser identificado por um JWT (JSON Web Token);