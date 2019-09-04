FROM node:alpine

WORKDIR /usr/src/app/
USER root
ADD package.json ./
RUN npm install --silent --no-cache --registry=https://registry.npm.taobao.org

COPY ./ ./

CMD ["npm", "run", "build-webpack"]
