FROM gcr.io/distroless/nodejs18-debian11

WORKDIR /var

COPY build/ build/
COPY server/build server/
COPY public/ public/

EXPOSE 3000

CMD ["./server/server.js"]