FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24@sha256:642bd8052d07d46efee10412362b7f7e1fbbe5a411fa52ee193be5902018ce84 AS runtime
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