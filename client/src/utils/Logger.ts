import winston from 'winston';

const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint()
  ),
  defaultMeta: {service: 'site-wide-warning-client'},
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

export default Logger;
