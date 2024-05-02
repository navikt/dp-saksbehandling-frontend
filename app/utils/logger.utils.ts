import type { Logger, LoggerOptions } from "pino";
import { destination, pino } from "pino";
import { ecsFormat } from "@elastic/ecs-pino-format";
import { getEnv } from "~/utils/env.utils";
import fs from "node:fs";

const devConfig: LoggerOptions = {
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
};

const prodConfig: LoggerOptions = {
  ...ecsFormat(),
  timestamp: false,
  formatters: {
    level: (label) => ({ level: label }),
  },
};

export const logger: Logger = pino(getEnv("IS_LOCALHOST") ? devConfig : prodConfig);

const sikkerLogPath = () =>
  fs.existsSync("/secure-logs/") ? "/secure-logs/secure.log" : "./secure.log";
export const sikkerLogger: Logger = pino(
  {
    formatters: {
      level: (label) => ({ level: label }),
    },
  },
  destination(sikkerLogPath()),
);
