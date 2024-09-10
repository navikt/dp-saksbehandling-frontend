import type { Logger, LoggerOptions } from "pino";
import { pino } from "pino";
import { getEnv } from "~/utils/env.utils";
import { ecsFormat } from "@elastic/ecs-pino-format";

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
