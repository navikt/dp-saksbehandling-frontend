import type { Logger, LoggerOptions } from "pino";
import { pino } from "pino";
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

const prodConfig: LoggerOptions = { ...ecsFormat() };

export const logger: Logger = pino(getEnv("IS_LOCALHOST") ? devConfig : prodConfig);
