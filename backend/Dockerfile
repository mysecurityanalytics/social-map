FROM node:12.18.4-alpine3.9
RUN mkdir -p /app/node_modules && chown -R node:node /app
WORKDIR /app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 80
CMD ["npm", "run", "start"]