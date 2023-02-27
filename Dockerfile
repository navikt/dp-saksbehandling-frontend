FROM node:18-alpine AS runtime
WORKDIR /usr/src/app

ENV PORT=3000 \
    NODE_ENV=production \
    TZ=Europe/Oslo


COPY node_modules/ ./node_modules

COPY build/ ./build
COPY public/build ./public/build

EXPOSE 3000
USER node

CMD ["remix-serve", "build"]