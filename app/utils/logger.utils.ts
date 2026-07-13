import { ecsFormat } from "@elastic/ecs-pino-format";
import type { DestinationStream, Logger, LoggerOptions } from "pino";
import { pino } from "pino";

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
  mixin: () => ({ "@version": "1" }),
  formatters: {
    level: (label) => ({ level: label }),
  },
};

export function createLogger(destination?: DestinationStream) {
  const options = getEnv("IS_LOCALHOST") === "true" ? devConfig : prodConfig;
  const pinoLogger: Logger = destination ? pino(options, destination) : pino(options);

  return {
    info: (data: unknown) => {
      if (typeof document === "undefined") {
        pinoLogger.info(data);
      } else {
        console.log(data);
      }
    },
    error: (data: unknown) => {
      if (typeof document === "undefined") {
        pinoLogger.error(data);
      } else {
        console.error(data);
      }
    },
    warn: (data: unknown) => {
      if (typeof document === "undefined") {
        pinoLogger.warn(data);
      } else {
        console.warn(data);
      }
    },
  };
}

// Logger wrapper to handle server-side and client-side logging. Console.log is needed client-side for faro auto capture to function properly
export const logger = createLogger();
