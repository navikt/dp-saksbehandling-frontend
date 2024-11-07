FROM node:20-alpine as node
RUN --mount=type=secret,id=NODE_AUTH_TOKEN \
   npm config set //npm.pkg.github.com/:_authToken=$(cat /run/secrets/NODE_AUTH_TOKEN)
RUN npm config set @navikt:registry=https://npm.pkg.github.com


# build app
FROM node as app-build
WORKDIR /app

COPY ./app ./app
COPY ./mocks ./mocks
COPY ./graphql ./graphql
COPY ./vite.config.ts ./
COPY ./package.json ./
COPY ./package-lock.json  ./

RUN npm ci --ignore-scripts
RUN npm run build


# install dependencies
FROM node as app-dependencies
WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json  ./

RUN npm ci --ignore-scripts --omit dev


# runtime
#FROM gcr.io/distroless/nodejs20-debian12 as runtime
FROM node
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV TZ="Europe/Oslo"
EXPOSE 3000

COPY ./public ./public/
COPY ./package.json ./package.json
COPY --from=app-build /app/build/ ./build/
COPY --from=app-dependencies /app/node_modules ./node_modules

CMD ["npm" ,"run", "start"]