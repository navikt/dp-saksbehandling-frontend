import type { Logger, LoggerOptions } from "pino";
import { pino } from "pino";
import { ecsFormat } from "@elastic/ecs-pino-format";
import { getEnv } from "~/utils/env.utils";

const commonConfig: LoggerOptions = {
  ...ecsFormat,
};

const devConfig: LoggerOptions = {
  ...commonConfig,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
};

const prodConfig: LoggerOptions = { ...commonConfig };

export const logger: Logger = pino(getEnv("IS_LOCALHOST") ? devConfig : prodConfig);
