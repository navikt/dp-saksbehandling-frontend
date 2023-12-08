FROM gcr.io/distroless/nodejs20-debian11

WORKDIR /var

COPY node_modules/ node_modules/

COPY build/ build/
COPY public/ public/

EXPOSE 3000

CMD ["npm", "start"]