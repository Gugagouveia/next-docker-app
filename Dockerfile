# Usar Node 20 Alpine
FROM node:20-alpine

# Diretório da aplicação
WORKDIR /app

# Copiar package.json e package-lock.json (ou npm-shrinkwrap.json)
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do projeto
COPY . .

# Build da aplicação Next.js
RUN npm run build

# Expor porta 3000
EXPOSE 3000

# Rodar Next.js escutando 0.0.0.0
CMD ["npm", "start"]
