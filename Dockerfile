FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24@sha256:8f84467000d70e2c58237cddaf9654a7fe285a73f29bbc58eeb7b563ccab49b1 AS runtime
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