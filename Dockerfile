FROM node:20

ENV NODE_ENV production
WORKDIR /var

COPY node_modules/ node_modules/
COPY build/ build/
COPY public/ public/

EXPOSE 3000

CMD ["./build/server.js"]