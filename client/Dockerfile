# Gunakan image Node.js sebagai base image untuk klien UI
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]