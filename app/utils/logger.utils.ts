import winston from "winston";
import fs from "fs";

const sikkerLogPath = () =>
  fs.existsSync("/secure-logs/") ? "/secure-logs/secure.log" : "./secure.log";

export const logger = winston.createLogger({
  format: process.env.NODE_ENV === "development" ? winston.format.simple() : winston.format.json(),
  transports: new winston.transports.Console(),
});

export const sikkerLogger = winston.createLogger({
  format: process.env.NODE_ENV === "development" ? winston.format.simple() : winston.format.json(),
  transports:
    process.env.NODE_ENV === "development"
      ? new winston.transports.Console()
      : [
          new winston.transports.File({
            filename: sikkerLogPath(),
            maxsize: 5242880,
            maxFiles: 10,
          }),
        ],
});
