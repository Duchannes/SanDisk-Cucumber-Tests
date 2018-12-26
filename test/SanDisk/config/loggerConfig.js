const winston = require(`winston`);
const { createLogger, format, transports } = winston;

let logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    }),
    new transports.File({
      format: format.combine(
        format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
        format.simple()
      ),
      filename: `combined.log`
    }),
    new transports.File({
      format: format.combine(
        format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
        format.simple()
      ),
      level: `error`,
      filename: `error.log`
    })
  ]
});

module.exports = {
  logger
};
