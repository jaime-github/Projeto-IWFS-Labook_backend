> Status do Projeto: Concluido

# Projeto: Labook

O LaBook é uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal), comentá-los e curti-los também.

### Cadastrar

Para o cadastro nessa rede social, o usuário deve fornecer seu nome, seu e-mail e uma senha. Além disso, esse endpoint já tem que realizar o login do usuário, fornecendo seu token de autenticação no retorno da requisição.

### Logar

Para realizar o login, basta informar seu e-mail e a sua senha. O retorno deve conter o token de autenticação do usuário.

### Fazer amizade

Criar uma amizade é simples: basta receber o token de autenticação junto com o Id do usuário com o qual se deseja fazer amizade. 

Uma amizade é uma "relação mútua": quando um usuário vira amigo de outro, esse outro "já é amigo" desse primeiro usuário (ou seja, o segundo usuário não precisa virar amigo do outro depois)

**Não há a necessidade de "aceitar" uma amizade.**

### Desfazer Amizade

Encerrar uma amizade segue o mesmo fluxo de fazer: com o token de autenticação e o id do usuário, já é possível realizar esse processo.

Observação: você deve retornar um erro caso o usuário tente desfazer uma amizade com alguém com quem não tem essa amizade registrada no banco!

### Criar post

O post deve ser criado, passando-se as informações de: foto, descrição, data de criação e tipo ("normal" ou "evento").

### Ver todo o Feed

O feed é composto por todos os posts dos  amigos do usuário logado. Os posts devem ser retornado em ordem de criação: do mais recente ao mais antigo.

### Ver apenas um tipo de post do Feed

Esse endpoint deve receber um tipo ("normal" ou "evento") e retornar todos os posts que sejam do tipo especificado. Os posts devem ser retornado em ordem de criação: do mais recente ao mais antigo.

# Linguagens de programação e bibliotecas utilizadas

- TypeScript
- Node
- Express
- MySQL
- UUID
- BcryptJS
- Jsonwebtoken

# Arquitetura 

- MVC

# Como iniciar o projeto

### Entre no diretório do projeto e execute:

`npm install`

Instala as dependencias do projeto.

`npm start`

Executa o servidor na porta 3000.<br />
Abra [http://localhost:3000](http://localhost:3000) para fazer requisições.
