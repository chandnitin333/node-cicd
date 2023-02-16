

FROM node:16.17-alpine as base

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --production=false



EXPOSE 3000

CMD ["npm","run","dev"]

# CMD ["node", "dist/app.js"] 


# 
# FROM node:12.17.0-alpine
# WORKDIR /usr
# COPY package.json ./
# COPY tsconfig.json ./
# COPY src ./src
# RUN ls -a
# RUN npm install
# RUN npm run build
# ## this is stage two , where the app actually runs
# FROM node:12.17.0-alpine
# WORKDIR /usr
# COPY package.json ./
# RUN npm install --only=production
# COPY --from=0 /usr/dist .
# RUN npm install pm2 -g
# EXPOSE 80
# CMD ["pm2-runtime","app.js"]
