# API EnaFood

> Api da Enafood, empresa fictícia para o teste da Enacom para desenvolvedores Back-End

### StackHolders
- Hélter Pinheiro
  - Desenvolvedor
  - Contato: [helterpinheiro@gmail.com](helterpinheiro@gmail.com)

- Enacom
  - Empresa 
  - Contato: [comercial@enacom.com.br](comercial@enacom.com.br)

Ferramentas e Bibliotecas utilizadas
  - Node.JS (versão 18.16.0)
  - Npm (versão 9.6.7)
  - Typescript (versão 5.0.0)
  - Nest.JS (versão 9.5.0)
  - bcrypt (versão 5.1.0)
  - class-transformer (versão 0.5.1)
  - class-validator (versão 0.14.0)
  - dotenv (versão 16.3.1)
  - moment-timezone (versão 0.5.43)
  - mongoose (versão 7.4.0)
  - passport (versão 0.6.0)
  - passport-jwt (versão 4.0.1)
  - passport-local (versão 1.0.0)
  - reflect-metadata (versão 0.1.13)
  - rxjs (versão 7.2.0)
  - swagger-ui-express (versão 5.0.0)
  - uuid (versão 9.0.0)
  - @nestjs/common (versão 9.0.0)
  - @nestjs/core (versão 9.0.0)
  - @nestjs/jwt (versão 10.0.0)
  - @nestjs/mongoose (versão 10.0.0)
  - @nestjs/passport (versão 10.0.0)
  - @nestjs/platform-express (versão 9.0.0)
  - @nestjs/swagger (versão 7.1.2)

### Introdução
  A api da Enafood oferece uma experiência de gerenciamento de usuários, pedidos e compras. Projetado para atender uma ampla gama de clientes, a Enafood aceita clientes pessoas físicas quanto clinetes pessoas jurídicas. Desenvolvido com Nest.JS, uma poderosa ferramenta de desenvolvimento e Typescrip, o Enafood permite a criação, modificação e listagen de perfis de usuários, bem como modificação e criação de produtos e compras feitas pelo app.

### Instalação 
  O sistema funciona com containers, e para isso você precisa ter instalado o Docker, para que os containers possam rodar e assim o nosso sistema execute. Dê uma olhada nesse tutorial de instalação caso não tenha instalado em sua máquina:
  [Instalação Docker](https://docs.docker.com/get-docker/)

  É necessário também que o Docker Compose esteja instalado, já que ele ajudará na orquestraação e gerenciamento de containers
  [Instalação Docker Compose](https://docs.docker.com/compose/install/)

  Possíveis dúvidas podem ser sanadas na documentação oficial do Docker:
  [Documentação Docker](https://docs.docker.com/)

  ### 1) Build do Docker Compose
  Após verificar que o Docker está instalado e operante em sua máquina, é necessário que se abra o terminal na pasta raíz do projeto e execute o seguinte comando do Docker Compose:
  > docker compose build

  E logo após, ainda na pasta raíz do projeto no terminal, você irá digitar:
  > docker compose up

  E pronto, o docker-compose irá criar um container para o nosso banco de dados e para nossa aplicação com todas as nossas ferramentas já instaladas.

  Para verificar se a aplicação está rodando perfeitamente, é recomendado que se olhe o log do container da aplicação, e para isso você vai digitar no seu terminal o seguinte comando:
  > docker logs enafood -f

### Ferramentas

#### Banco de dados
##### MongoDB
  O nosso banco de dados é o MongoDB, uma banco de dados NoSQL, de código aberto e altamente popular. Ele foi criado para lidar com uma grande variedade de dados, permitindo que os desenvolvedores armazenem e acessem informações de forma flexível e escalável.
  
##### MongoDB Altas
  Utilizamos o MongoDB Atlas como alternativa ao banco de dados local, pois é um serviço de gerenciamento em nuvem fornecido pela MongoDB, INC.  Ele oferece uma plataforma hospedada e totalmente gerenciada para implantação, gerenciamento e escalabilidade de bancos de dados MongoDB.
  
##### Mongoose
  Utilizamos o Mongoose para ser a nossa ODM. Essa biblioteca permite a modelagem objetos do MongoDB em um ambiente NOde.JS. O mongoose permite que os desenvolvedores interajam com o banco de dados MongoDB usando uma sintaze simples e baseada em schemas.

#### Request handler

##### Nest.Js
  O Nest.Js é um framework de desenvolvimento de aplicações web Node.Js. Possui uma arquitetura rosbusta e escalável. Possui uma arquitetura modular para organizar o código, portanto, deixa o código mais limpo e de fácil entendimento. O framework suporta injeção de dependência, isso permite que os componentes sejam facilmente testados e substituidos de forma isolada. O Nest.Js possui uma integração fácil com ferramentas como Swagger, permitindo gerar automaticamente uma documentação completa da api.

#### Containers

##### Docker
  O Docker é uma plataforma de código aberto que permite criar, implantar e executar aplicativos em contêineres. Ele utiliza a virtualização a nível de sistema operacional para criar ambientes isolados, chamados contêineres, onde os aplicativos podem ser executados de forma consistente, independentemente do ambiente de hospedagem.

#### Documentação

#### Swagger
  O Swagger fornece uma forma padronizada e legível por máquina para descrever APIs Restful. Ele nos ajuda a documentas endpoints, parâmetros, esquemas de dados e respostas relevantes da nossa API e nos ajuda a entender as respostas do código.

  Caso gostaria de saber como são as nossas rotas e como funcionam, está disponível uma documentação interativa, feita com a ferramenta Swagger.
  Ela só pode ser acessada quando nossa aplicação estiver rodando e ela pode ser acessada pela rota.
  >(localhost:3333/docs)





