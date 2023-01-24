# syntax=docker/dockerfile:1
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install 
EXPOSE 3000
CMD ["node", "dist/app.js"] 