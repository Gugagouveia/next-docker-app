# Usar Node 20 Alpine
FROM node:20-alpine AS base

# Instalar dependências apenas quando necessário
FROM base AS deps
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./
RUN npm ci

# Build da aplicação
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js
RUN npm run build

# Produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
