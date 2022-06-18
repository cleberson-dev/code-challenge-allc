import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.prettyPrint(),
  ),
  defaultMeta: {service: 'site-wide-warning-server'},
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({filename: 'logs/all.log'}),
  ],
});

export default logger;
