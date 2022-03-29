<h1 align ="center">Exercício de C214 - API REST de Super heróis</h1> 

<p>A aplicação em questão se trata de um API Rest, que realiza um crud completo de super heróis, foi desenvolvida para um exercício de laboratório da disciplina de C214 - Engenharia de software</p>

- Projeto

<p>Totalmente desenvolvida em JavaScript. O banco de dados escolhido para persistência dos dados foi o MongoDB Atlas.</p>

### 💻 Funcionalidades

- Cadastrar heróis.
- Listar heróis.
- Atualizar dados de heróis.
- Deletar heróis.

### 📋 Pré-requisitos para execução
- Visual Studio Code
- NodeJS
- Postman
- MongoDB


### 🚀 Começando
Para obter uma cópia do projeto a fim de operá-lo/testá-lo em sua máquina,clone o repositório em uma pasta na sua máquina:

```
git clone https://github.com/G-ilian/api-C214-superHeroi
```

### 🔧 Instalação e execução
<p>Após ter clonado o projeto em seu computador, acesse uma IDE de sua opção, desde que esta tenha suporte para a linguagem JavaScript, e abra a pasta onde você clonou o repositório, dentro dessa IDE abra o terminal e execute os seguintes passos: </p>

- Para executar o projeto é de suma importância estar na pasta de raiz do mesmo, caso você tenha aberto o projeto na pasta de raiz "Aula 06 - api", desconsidere este passo. Agora se você não estiver na pasta de raiz execute o seguinte comando no terminal: 

<p>Outra chave do sucesso para executar o código com eficiência é mudar a url padrão do código para a url do banco de dados que você utilizará, ISTO É CRUCIAL PARA O FUNCIONAMENTO DA API. Para dada as estruturas de pastas do projeto. Procure pelo arquivo database.js, que se encontrará na pasta infrastructure, abaixo encontra um esquema que facilitará a busca:</p>

    📂Aula 06 - api
        📂src
            📁application
            📂infrastructure
                📄database.js
                📄rest_server.js
            📁port
            📁utils
            
- 1º Passo

```
cd "api-C214-superHeroi"
``` 

- 2º Passo

```
cd "Aula 06 - api"
```

📎 Instalando as dependências 

Posteriormente a isto,estando no terminal e na pasta de raiz do projeto, digite:

```
npm install
```

📎 Iniciando o projeto

Após ter instalado as dependências, dê o start no projeto, com o seguinte processo:

```
npm start
```

- 🌐 Endpoints 
<p>Para realizar todas as operações utilizarmos de operações que criamos, será necessário usar dos chamados endpoints, que são rotas que levarão a aquela operação que desejamos fazer.</p>
<p>Ao executarmos o comando anteriormente apresentado será nos gerado o seguinte uma url de servidor, mostra a seguir: </p>

```
http://localhost:5000
```

Obs: Por padrão foi configurado a porta 5000, caso haja algum conflito de rota dentro de seu computador, entre no arquivo server.js e altere o valor atribuído a porta.

<p>Esta rota pode ser utilizada dentro do Postman ou de outro cliente HTTP, sugiro utilizar no postman</p>

Para acessar os endpoints a rota padrão configurarada foi /heroes, logo sempre que quiser usar algum dos endpoints terá antes de colocar /heroes

- ⛓️ Endpoint Create
Para acessar o endpoint que permite a criação dos heróis, digite :
```
http://localhost:5000/heroes/create
```
Lembrando que este será um metódo do tipo POST, ou seja, permitirá a você adicionar arquivos no banco de dados.

- ⛓️ Endpoint Read
Para acessar o endpoint que permite a listagem de todos os heróis contidos no banco de dados, digite :
```
http://localhost:5000/heroes/list

```
<p>Lembrando que este será um metódo do tipo GET, ou seja, permitirá a você ver todos os heróis listados no banco.</P>
<p>Tratando dos endpoint para listagem ainda existem duas opções, listar por equipe e listar por poder, pode ser feito respectivamente as listagem através de:</p>

- Por equipe 

```
http://localhost:5000/heroes/listByTeam

```
- Por poder 
```
http://localhost:5000/heroes/listByPower

```

- ⛓️ Endpoint Update
Para acessar o endpoint que permite a atualização dos heróis, digite :
```
http://localhost:5000/heroes/update
```
Lembrando que este será um metódo do tipo PUT, ou seja, permitirá a você atualizar arquivos no banco de dados. O dado escolhido para ser atualizado é o nome do herói, para identifica-lo será necessário portanto passar a equipe a qual ele pertence e o nome que você deseja muda-lo.

- ⛓️ Endpoint Delete
Para acessar o endpoint que permite a atualização dos heróis, digite :
```
http://localhost:5000/heroes/delete
```
Lembrando que este será um metódo do tipo DELETE, ou seja, permitirá a você deletar arquivos no banco de dados. O herói escolhido para ser deletado do banco de dados é identificado através de seu nome, então é necessário passar o nome para execução do comando.

## ✒️ Autor

***Gabriel Ilian Fonseca Barboza*** - [Gabriel](https://github.com/G-ilian)