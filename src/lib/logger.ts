/**
 * Logger utility for backend operations with colorized output.
 *
 * In production:
 * - Only error logs are shown
 * - Info, debug, and warn logs are suppressed
 *
 * In development:
 * - All log levels are shown with colors for clarity
 */

type LogLevel = "info" | "warn" | "error" | "debug";

const isProduction = process.env.NODE_ENV === "production";

// ANSI color codes
const LEVEL_COLORS: Record<LogLevel, string> = {
  info: "\x1b[36m", // cyan
  warn: "\x1b[33m", // yellow
  error: "\x1b[31m", // red
  debug: "\x1b[35m", // magenta
};
const RESET_COLOR = "\x1b[0m";

class Logger {
  private context: string;

  constructor(context: string) {
    this.context = context;
  }

  private formatMessage(
    level: LogLevel,
    message: string,
    meta?: unknown
  ): [string, ...unknown[]] {
    const timestamp = new Date().toISOString();
    const metaStr = meta ? ` ${JSON.stringify(meta)}` : "";
    const levelColor = LEVEL_COLORS[level] || "";
    const coloredLevel = `${levelColor}${level.toUpperCase()}${RESET_COLOR}`;
    const coloredContext = `\x1b[2m[${this.context}]\x1b[0m`; // faint/dim

    return [
      `[${timestamp}] [${coloredLevel}] ${coloredContext} ${message}${metaStr}`,
    ];
  }

  /**
   * Log informational messages
   * Suppressed in production
   */
  info(message: string, meta?: unknown): void {
    if (isProduction) return;
    console.log(...this.formatMessage("info", message, meta));
  }

  /**
   * Log warning messages
   * Suppressed in production
   */
  warn(message: string, meta?: unknown): void {
    if (isProduction) return;
    console.warn(...this.formatMessage("warn", message, meta));
  }

  /**
   * Log error messages
   * Always shown, including in production
   */
  error(message: string, error?: unknown): void {
    const errorDetails =
      error instanceof Error
        ? { name: error.name, message: error.message, stack: error.stack }
        : error;
    console.error(...this.formatMessage("error", message, errorDetails));
  }

  /**
   * Log debug messages
   * Suppressed in production
   */
  debug(message: string, meta?: unknown): void {
    if (isProduction) return;
    console.debug(...this.formatMessage("debug", message, meta));
  }
}

/**
 * Create a logger instance with a specific context
 * @param context - The context/module name for the logger
 * @returns Logger instance
 */
export function createLogger(context: string): Logger {
  return new Logger(context);
}
