import logger from './logger';

export const serverStatusPlugin = {
  async serverWillStart() {
    logger.info('Starting Site Wide Warning server');
    return {
      async serverWillEnd() {
        logger.info('Shutting down Site Wide Warning server');
      },
    };
  },
};
