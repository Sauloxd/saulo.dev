FROM node:current-slim

# Set the work dir
WORKDIR /usr/src/app

COPY package.json .

COPY . .

RUN yarn

# Why can't I expose this port :'(
EXPOSE 8000

CMD [ "yarn", "workspace", "@saulo.dev/blog", "build" ]
