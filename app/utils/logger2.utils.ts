import type { Logger, LoggerOptions } from "pino";
import { pino } from "pino";
import { getEnv } from "~/utils/env.utils";

const commonConfig: LoggerOptions = {
  timestamp: false,
  formatters: {
    level: (label) => {
      return { level: label };
    },
    log: (object: any) => {
      if (object.err) {
        // backendlogger has an Error-instance, frontendlogger has already serialized it
        const err = object.err instanceof Error ? pino.stdSerializers.err(object.err) : object.err;
        object.stack_trace = err.stack;
        object.type = err.type;
        object.message = err.message;
        delete object.err;
      }

      return object;
    },
  },
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
