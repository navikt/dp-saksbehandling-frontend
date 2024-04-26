import type { Logger, LoggerOptions } from "pino";
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

const prodConfig: LoggerOptions = {};

export const logger: Logger = pino(getEnv("IS_LOCALHOST") ? devConfig : prodConfig);
