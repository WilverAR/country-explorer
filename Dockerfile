FROM node:18.17.1-alpine AS build
LABEL authors="Wilver_AR"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Path: Dockerfile
FROM nginx:stable
COPY default.conf /etc/nginx/conf.d
COPY --from=build /app/dist /usr/share/nginx/html