FROM node:20-alpine

WORKDIR /app
COPY app/package*.json ./
RUN npm ci

COPY app/ .

ENV APP_VERSION=local

EXPOSE 4000
CMD ["node", "index.js"]
