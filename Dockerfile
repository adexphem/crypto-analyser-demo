# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN yarn global add serve
RUN yarn add react-scripts@3.2.0 -g

EXPOSE 3000

# start app
CMD ["yarn", "start"]