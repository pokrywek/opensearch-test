FROM node:12-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production
RUN rm -r src tsconfig.* \
  && mv -f build/dist/* . \
  && rm -r build

EXPOSE 8081
CMD ["node", "src/index.js"]
