# build app
FROM denoland/deno:alpine-2.5.6 AS app-build
WORKDIR /app

COPY ./.npmrc ./
COPY ./app ./app
COPY ./mocks ./mocks
COPY ./public ./public/
COPY ./graphql ./graphql
COPY ./vite.config.ts ./
COPY ./package.json ./package.json
COPY ./deno.jsonc ./
COPY ./deno.lock ./

RUN deno install
RUN deno task build

# export build to filesystem (GitHub)
FROM scratch AS build-export
COPY --from=app-build /app/build ./

# runtime
FROM denoland/deno:distroless-2.5.6 AS deno
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV TZ="Europe/Oslo"
EXPOSE 3000

COPY ./public ./public/
COPY ./package.json ./package.json
COPY ./deno.jsonc ./
COPY --from=app-build /app/build/ ./build/
COPY --from=app-build /app/node_modules ./node_modules
ENV NODE_ENV=production

CMD ["--allow-env", "--allow-read", "--no-prompt","-P", "./node_modules/@react-router/serve/dist/cli.js", "./build/server/index.js"]