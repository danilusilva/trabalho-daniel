
# API BIBLIOTECA

Este projeto consiste na criação de uma API para gerenciar o funcionamento de uma biblioteca.
A API utiliza um banco de dados não relacional (MongoDB) para persistir os dados e permite
o cadastro e a consulta de autores, livros, usuários e o controle de empréstimos.


## Tecnologias Utilizadas

 - [Mongoose](https://mongoosejs.com/docs/index.html)
 - [Express](https://expressjs.com/)
 - [Dotenv](https://www.npmjs.com/package/dotenv)


## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```
Configure o .env de acordo com o seu banco de dados(MongoDB)

## Uso/Exemplos
#### Rota de teste API

```http
  GET http://localhost:[seu-servidor-aqui]/biblioteca
```

| Descrição                           |
| :---------------------------------- |
| Apenas para fins de teste |

#### Listar usuários

```http
  GET http://localhost:[seu-servidor-aqui]/biblioteca/users
```
| Descrição                           |
| :---------------------------------- |
| Retorna uma lista com todos os usuários cadastrados. |

#### Cadastrar usuário

```http
  POST http://localhost:[seu-servidor-aqui]/biblioteca/users
```

| JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**: O nome de usuário. |
| `birthDate`      | `date` | **Obrigatório**: Data no formato ano-mês-dia. |
| `sex`      | `string` | **Obrigatório**: Gênero Sexual. |
| `adress`      | `string` | **Obrigatório**: Endereço completo. |

#### Listar autores

```http
  GET http://localhost:[seu-servidor-aqui]/biblioteca/authors
```
| Descrição                           |
| :---------------------------------- |
| Retorna uma lista com todos os autores cadastrados. |


#### Cadastrar autores

```http
  POST http://localhost:[seu-servidor-aqui]/biblioteca/authors
```

| JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**: O nome do autor. |
| `birthDate`      | `date` | **Obrigatório**: Data no formato ano-mês-dia. |
| `sex`      | `string` | **Obrigatório**: Gênero Sexual. |
| `writingGenre`      | `string` | **Obrigatório**: Ser alguma das opções: 'Novel', 'Poetry', 'Fantasy', 'Fiction', 'Mistery', 'Suspense'. |

#### Listar livros

```http
  GET http://localhost:[seu-servidor-aqui]/biblioteca/books
```
| Descrição                           |
| :---------------------------------- |
| Retorna uma lista com todos os livros disponíveis. |


#### Cadastrar livros

```http
  POST http://localhost:[seu-servidor-aqui]/biblioteca/books
```

| JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**: Título do livro. |
| `synopsis`      | `string` | **Obrigatório**: Sinopse do livro. |
| `year`      | `string` | **Obrigatório**: Ano de lançamento do livro. |
| `author`      | `string` | **Obrigatório**: ID exato do autor|


#### Realizar um novo empréstimo

```http
  POST http://localhost:[seu-servidor-aqui]/biblioteca/loans
```

| JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `string` | **Obrigatório**: ID exato de um usuário anteriormente cadastrado. |
| `bookId`      | `string` | **Obrigatório**: ID exato de um livro anteriormente cadastrado. |

## Autores

- [@danilusilva](https://www.github.com/danilusilva)


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danilu-silva-a416142b0/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/danxzada7?t=DNacCEPggXl7a1iUXDj6Pw&s=09)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/silvadanilu/)



