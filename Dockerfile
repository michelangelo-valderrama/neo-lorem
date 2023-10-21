FROM node:slim
RUN apt -y update && apt -y install git
RUN npm i -g bun firebase-tools
COPY . /home/node/neo-lorem
WORKDIR /home/node/neo-lorem
EXPOSE 4321
