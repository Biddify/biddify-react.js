FROM node:alpine:15.13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .
RUN npm run build

CMD ["npm", "start"]