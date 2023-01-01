FROM node:latest

WORKDIR /src/app

RUN npm install -g typescript

COPY package.json yarn.lock  ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000

CMD ["node", "dist/index.js"]