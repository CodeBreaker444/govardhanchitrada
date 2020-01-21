# base image
FROM node:13.6.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install --production
ADD src /usr/src/app/src
ADD public /usr/src/app/public
RUN npm build
CMD [ "npm", "start" ]
