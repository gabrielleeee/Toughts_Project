
# Toughts

Tought é uma aplicação web baseada em um padrão de arquitetura MVC que desenvolvi durante o curso "Node.js do Zero a Maestria com diversos Projetos" com o instrutor Matheus Battisti na Udemy.  

É um projeto de CRUD de pensamentos, onde os usuários podem registrar uma conta, fazer login, cadastrar seus próprios pensamentos e visualizar pensamentos de outros usuários. A aplicação inclui recursos de autenticação, filtros de ordenação e pesquisa para facilitar a navegação e o gerenciamento de pensamentos.

# Funcionalidades

Autenticação de Usuários: Os usuários podem registrar uma conta, fazer login e fazer logout para acessar as funcionalidades da aplicação.

Cadastro de Pensamentos: Os usuários autenticados podem cadastrar seus próprios pensamentos na plataforma.

Dashboard: A página de dashboard exibe os pensamentos cadastrados pelos usuários, onde é possível visualizar e interagir com eles.

Filtros e Pesquisa: Os pensamentos podem ser filtrados e ordenados de acordo com diferentes critérios, como data de criação, autor, etc. Além disso, há uma funcionalidade de pesquisa para encontrar pensamentos específicos.

# Tecnologias 

## Backend
- Node.js: Ambiente de execução JavaScript.
- Express.js: Framework web para Node.js.
- Express-handlebars: Engine de templates para o Express que permite renderizar views usando Handlebars.
- Bcryptjs: Biblioteca para hashing de senhas.
- Express-session: Middleware para gerenciamento de sessões de usuário no Express.
- Connect-flash: Middleware para exibir mensagens flash no Express.
- Express-flash: Middleware para exibir mensagens flash no Express.
- Mysql2: Driver MySQL para Node.js.
- Sequelize: ORM para Node.js que suporta bancos de dados relacionais.
- Session-file-store: Armazenamento de sessões em arquivos para o Express.

## Frontend
- Handlebars: Engine de templates que permite a renderização de views dinâmicas no lado do servidor.
- HTML: Linguagem de marcação padrão para criação de páginas web.
- CSS: Linguagem de estilo utilizada para estilizar as páginas HTML.

## Banco de Dados:
- MySQL: Banco de dados relacional utilizado para armazenar os dados do projeto.

# Como Usar
Clone este repositório:
```
git clone https://github.com/gabrielleeee/Toughts_Project
```

Instale as dependências:
```
npm install
```

Configure as variáveis de ambiente:

Abra o arquivo conn.js na pasta db e insira suas próprias credenciais de banco de dados (nome do banco de dados, usuário, senha, host, etc.):

```
const sequelize = new Sequelize('nome_do_seu_banco_de_dados', 'seu_usuario', 'sua_senha', {
  host: 'localhost',
  dialect: 'mysql',
})

```
Inicie o servidor:
```
npm start
```
Acesse a aplicação em seu navegador:
```
http://localhost:3000
```