FROM gcr.io/distroless/nodejs20-debian11

WORKDIR /var

COPY build/ build/
COPY node_modules/ node_modules/

CMD ["npm run start"]