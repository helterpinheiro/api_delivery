# intalando o node
FROM node

# Define a pasta onde as informações vão ser armazenadas
WORKDIR /urs/app

# Copiar o package.json para o diretório /usr/app
COPY package.json ./

RUN npm install -g typescript @nestjs/cli
RUN npm install

# copiando tudo para a pasta de destino
COPY . .

RUN npm run setup

EXPOSE 3333

CMD ["npm", "run", "start:dev"]