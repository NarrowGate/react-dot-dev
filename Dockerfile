FROM node:20.18-alpine3.20
RUN apk --no-cache add git
# RUN npm install -g vite@5.4.1

USER node

RUN mkdir /home/node/mw
RUN mkdir /home/node/mw/react
WORKDIR /home/node/mw/react

