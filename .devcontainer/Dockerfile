FROM node
RUN apt -y update && apt -y install git
RUN npm i -g bun
COPY ../. /home/node/neo-lorem
WORKDIR /home/node/neo-lorem
EXPOSE 4321
