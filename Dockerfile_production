FROM node:16 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH


COPY package*.json ./
RUN npm install --silent

COPY . .

RUN npm run build --silent

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

