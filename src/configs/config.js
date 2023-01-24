class Config {
  logConfig = {
    logFileSize: "10m",
    logMaxFiles: 5,
    logDirectory: "logs",
  };

  currentLocation = process.cwd().split("/").pop();

  constructor() {}
}
const config = new Config();

module.exports = { config };
