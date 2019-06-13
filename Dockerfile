FROM node:dubnium-stretch-slim

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm i --no-save

COPY src ./src

CMD ["node", "src/index.js"]
