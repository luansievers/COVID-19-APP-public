FROM node:alpine

WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
