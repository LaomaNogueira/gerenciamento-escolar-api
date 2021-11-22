<h1 align="center"> API PARA GERENCIAMENTO ESCOLAR </h1>

## 📕 Índice

- [Sobre](#Sobre)
- [Tecnologias](#Tecnologias)
- [Iniciando o projeto](#Iniciando)
- [Licença](#Licença)
- [Contato](#Contato)

<hr>

<!-- About -->

## Sobre

<p align="left"> API para Gerenciamento Escolar - organiza escola, professor, aluno, notas e matérias.
Por enquanto, o CRUD de usuários está funcional. 
</p>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=⚠ EM%20DESENVOLVIMENTO ⚠&color=&style=for-the-badge"/>
</p>

### Features

- [x] Cadastro de usuário
- [x] Lista os tipos de usuários
- [x] Lista todos os usuários
- [x] Lista usuários por tipo
- [x] Lista usuário por ID
- [x] Atualização de usuário
- [x] Delete de usuário(inativação)
- [x] Lista usuário inativos
- [x] Restaura usuário inativo
- [ ] Cadastro de matérias
- [ ] Cadastro de notas
- [ ] Lista de notas por aluno (boletim)
- [ ] Lista de alunos por matéria ou turma
- [ ] Lista de matérias por aluno, turma ou professor
- [ ] Atualização de matérias
- [ ] Atualização de notas
- [ ] Delete de matéria

<hr>
<!-- TECHNOLOGIES -->

## Tecnologias️
  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [NodeJS](https://nodejs.org/en/)
  - [MySQL](https://www.mysql.com/downloads/)

<hr>

<!-- TECHNOLOGIES -->

## Iniciando

### 📋 Pré-requisitos

- Node JS

  ```sh
  https://nodejs.org/en/
  ```

- Npm ou Yarn

  ```sh
  https://www.npmjs.com/
  ```


### Instalação

1. Clonar o repositório:

   ```sh
   git clone https://github.com/LaomaNogueira/gerenciamento-escolar-api.git
   ```
   ```
   cd gerenciamento-escolar-api
   ```

2. Instalar os pacotes:

   ```sh
   npm install
   ```


### Uso

1. Para usar e testar a API, você precisa rodar as migrations do banco de dados:
   ```sh
   npx sequelize-cli db:migrate
   ```


2. Copie o arquivo `.env.example`, renomeie para `.env` e crie suas variáveis de ambiente e substitua-as.


3. Subir o servidor:

   ```sh
   npm run dev
   ```


4. Rodar os testes conforme indicado abaixo.


### Testes

Com a API em funcionamento, vamos rodar os testes via [Insomnia](https://insomnia.rest/download) (ou algum similar). Seguem os testes:

<hr>

<!-- ## 🚀 Deploy 

**__Heroku__**: [Code Girls](https://code-girls.herokuapp.com/docs/) 

<hr>-->


<!-- CONTACT -->

## Contato

#### Laoma Nogueira

<p align="left"> 🤝 Se tiver interesse em conversar comigo, será ótimo trocar uma ideia com você! Estes são os meus contatos: </p>

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/LaomaNogueira)](https://github.com/LaomaNogueira)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/laoma-nogueira/)](https://www.linkedin.com/in/laoma-nogueira/)
<a href="mailto:laomanogueira@gmail.com" alt="gmail" target="_blank">
<img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=mailto:laomanogueira@gmail.com" />
</a>

Link do projeto: [https://github.com/LaomaNogueira/gerenciamento-escolar-api.git](https://github.com/LaomaNogueira/gerenciamento-escolar-api.git)

<hr>