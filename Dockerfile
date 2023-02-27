FROM node:18-alpine AS runtime
WORKDIR /usr/src/app

ENV PORT=3000 \
    NODE_ENV=production \
    TZ=Europe/Oslo

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

COPY build/ ./build
COPY public/build ./public/build
COPY node_modules/ ./node_modules

EXPOSE 3000
USER node

CMD ["npm", "run", "start", "--loglevel=verbose"]