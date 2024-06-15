FROM node:20.14.0-alpine3.19

WORKDIR /express-demo

COPY package*.json /express-demo/

RUN npm install

COPY . /express-demo/
