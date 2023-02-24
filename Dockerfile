FROM navikt/node-express:18

WORKDIR /usr/src/app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

COPY build/ ./build
COPY public/build ./public/build
COPY node_modules/ ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]