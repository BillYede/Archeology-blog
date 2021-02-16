FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV PORT=3080

EXPOSE 3000

CMD [ "npm", "start" ]