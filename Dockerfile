FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24@sha256:9bf4022b10e6ca5612bdaeaf7d30bda09f0cacd0674aab907a2bcd0e9206146d AS runtime
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV TZ="Europe/Oslo"
EXPOSE 3000

COPY ./public ./public/
COPY ./package.json ./package.json
COPY ./build/ ./build/
COPY ./node_modules ./node_modules

CMD ["./node_modules/@react-router/serve/dist/cli.js", "./build/server/index.js"]