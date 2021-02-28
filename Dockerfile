# Check out https://hub.docker.com/_/node to select a new base image
FROM node:10-slim

RUN useradd -ms /bin/bash admin

# Set to a non-root built-in user `node`
# USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node:node package*.json ./



RUN npm install



# Bundle app source code
COPY --chown=node:node . .

RUN chown -R admin:admin /home/node/app

RUN chgrp -R 0 /home/node/ && \
    chmod -R g=u /home/node/ 

USER admin

RUN npm run build

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "node", "." ]
