FROM node:18-alpine AS runtime
WORKDIR /usr/src/app

ENV PORT=3000 \
    NODE_ENV=production \
    TZ=Europe/Oslo

COPY remix.config.js ./remix.config.js
COPY server.js ./server.js
COPY node_modules ./node_modules

COPY build ./build
COPY public ./public

EXPOSE 3000
USER node

CMD ["node", "server.js"]
