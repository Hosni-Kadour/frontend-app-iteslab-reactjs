FROM node:16 as node-build


WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH


COPY package*.json ./
RUN npm install --silent

COPY . .

RUN npm run build --silent



EXPOSE 3000


CMD ["npm", "start"]




