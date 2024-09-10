import type { Logger, LoggerOptions } from "pino";
import { pino } from "pino";
import { getEnv } from "~/utils/env.utils";
import type { Context } from "@opentelemetry/api";
import { trace } from "@opentelemetry/api";

const devConfig: LoggerOptions = {
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
};

const prodConfig: LoggerOptions = {
  base: undefined, // remove default fields
  formatters: {
    // display level as a string
    level: (label) => ({
      level: label,
    }),
  },
};

export const logger: Logger = pino(getEnv("IS_LOCALHOST") ? devConfig : prodConfig);

export function getLoggerWithTraceContext(context: Context) {
  let current_span = trace.getSpan(context);
  let trace_id = current_span?.spanContext().traceId;
  let span_id = current_span?.spanContext().spanId;

  return logger.child({ trace_id, span_id });
}
