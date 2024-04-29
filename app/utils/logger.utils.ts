import type { Logger, LoggerOptions } from "pino";
import { destination, pino } from "pino";
import { ecsFormat } from "@elastic/ecs-pino-format";
import { getEnv } from "~/utils/env.utils";

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

const logDestination = getEnv("IS_LOCALHOST") ? "./secure.log" : "/secure-logs/secure.log";
export const sikkerLogger: Logger = pino(
  {
    formatters: {
      level: (label) => ({ level: label }),
    },
  },
  destination(logDestination),
);
