# specify the node base image with your desired version node:<version>
FROM node:20
# replace this with your application's default port
EXPOSE 3000

ADD ["build","/usr/src"]

WORKDIR /usr/src

RUN ["npm", "install", "--global", "serve"]

CMD ["serve", "."]

