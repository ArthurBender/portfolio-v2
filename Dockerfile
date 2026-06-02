# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV APP_PREFIX=PREFIX_
ENV ASSET_DIR=.next/static

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

COPY env.sh ./env.sh
RUN chmod +x ./env.sh

EXPOSE 3000

CMD ["sh", "-c", "./env.sh && node server.js"]
