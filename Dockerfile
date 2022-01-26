FROM node:16.13.1

# Create app directory
RUN mkdir -p  /usr/src/app/node_modules
WORKDIR /usr/src/app



# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Update PATH
ENV PATH "/usr/src/app/node_modules/.bin:${PATH}"

ENTRYPOINT ["/bin/bash", "-c", "sleep infinity"]

