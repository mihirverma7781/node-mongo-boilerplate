const winston = require("winston");
require("winston-daily-rotate-file");
const { config } = require("./config");

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

const formatForConsole = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const formatForFiles = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  ),
  winston.format.json()
);

const dailyLogRotateTransport = new winston.transports.DailyRotateFile({
  dirname: config.logConfig.logDirectory,
  filename: `${config.currentLocation}-%DATE%-logs.log`,
  maxSize: config.logConfig.logFileSize,
  maxFiles: config.logConfig.logMaxFiles,
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  format: formatForFiles,
});

const transports = [
  new winston.transports.Console({
    format: formatForConsole,
  }),
  dailyLogRotateTransport,
];

const LogScheme = winston.createLogger({
  level: level(),
  levels,
  transports,
});

module.exports = { LogScheme };
