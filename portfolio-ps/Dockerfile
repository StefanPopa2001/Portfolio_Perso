# syntax=docker/dockerfile:1.4
FROM node:22-alpine AS build

WORKDIR /app

# copy only package files first to take advantage of Docker layer caching
COPY package*.json ./

# Install build deps
RUN --mount=type=cache,target=/root/.npm \
	npm install --silent

# copy rest of the project and build
COPY . .

RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app

# Copy only production dependencies and the dist output
COPY package*.json ./

# Install only production deps (serve)
RUN --mount=type=cache,target=/root/.npm \
	npm install --production --silent

# Copy built assets into /app/dist for serve
COPY --from=build /app/dist ./dist

ENV PORT=80
EXPOSE 80

CMD ["npm", "start"]