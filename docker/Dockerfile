# pull official base image
FROM node:22-alpine as build

# set work directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN NODE_OPTIONS="--max-old-space-size=8192" npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
# start app
EXPOSE 5173

# Start Vite dev server
CMD ["yarn", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]