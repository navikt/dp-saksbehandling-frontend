FROM node:18-alpine AS runtime
WORKDIR /usr/src/app

ENV PORT=3000 \
    NODE_ENV=production \
    TZ=Europe/Oslo

COPY remix.config.js ./
COPY package.json ./

COPY public ./public
COPY build ./build
COPY node_modules ./node_modules

EXPOSE 3000
USER node

CMD ["npm", "run" ,"start"]
