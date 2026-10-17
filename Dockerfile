FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24@sha256:440c258de07a1c62d8893f7219b0f47a9be1f0ebc2b88f89aa54649412754db0 AS runtime
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