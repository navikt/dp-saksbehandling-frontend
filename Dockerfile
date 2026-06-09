FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:26@sha256:bee098dbaa2be980751509cca822b8f93b10e64b65f3fc173569436cb6e9bf03 AS runtime
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