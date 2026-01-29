# Example Node API Dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 1212

CMD ["node", "app.js"]
