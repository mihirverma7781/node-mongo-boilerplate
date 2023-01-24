const { LogScheme } = require("./log-scheme.class");

class LogClass {
  info(...args) {
    return LogScheme.info(args);
  }

  warn(...args) {
    return LogScheme.warn(args);
  }

  error(...args) {
    return LogScheme.error(args);
  }
}

const log = new LogClass();

module.exports = { log };
