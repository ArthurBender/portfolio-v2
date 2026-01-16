# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build the app
RUN npm run build

# ---------- Runtime stage ----------
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
