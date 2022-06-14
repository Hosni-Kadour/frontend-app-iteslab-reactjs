FROM node:10 as build-stage


WORKDIR /app



COPY package*.json ./


RUN npm install

COPY . .




EXPOSE 3000

CMD [ "npm","start" ]
FROM nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf






