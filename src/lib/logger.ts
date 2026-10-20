type LogContext = Record<string, unknown>;

type Logger = {
  debug: (message: string, context?: LogContext) => void;
  info: (message: string, context?: LogContext) => void;
  warn: (message: string, context?: LogContext) => void;
  error: (message: string, error?: unknown, context?: LogContext) => void;
};

const isProduction = import.meta.env.PROD;

function write(
  level: "debug" | "info" | "warn" | "error",
  message: string,
  context?: LogContext,
  error?: unknown,
) {
  if (isProduction && level === "debug") return;

  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...context,
    ...(error !== undefined && { error }),
  };

  switch (level) {
    case "debug":
      console.debug(entry);
      break;
    case "info":
      console.info(entry);
      break;
    case "warn":
      console.warn(entry);
      break;
    case "error":
      console.error(entry);
      break;
  }
}

export const logger: Logger = {
  debug: (message, context) => write("debug", message, context),

  info: (message, context) => write("info", message, context),

  warn: (message, context) => write("warn", message, context),

  error: (message, error, context) => write("error", message, context, error),
};
