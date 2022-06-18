import fs from 'fs-extra';
import path from 'path';
import {graphql} from 'graphql';
import {introspectionQuery, printSchema} from 'graphql/utilities';
import logger from '../utils/logger';

import Schema from '../schema';

/**
 * Builds the Apollo GraphQL schema
 */
const buildSchema = async () => {
  await fs.ensureFile('../data/schema.graphql.json');
  await fs.ensureFile('../data/schema.graphql');

  fs.writeFileSync(
      path.join(__dirname, '../data/schema.graphql.json'),
      JSON.stringify(await graphql(Schema, introspectionQuery), null, 2),
  );

  fs.writeFileSync(
      path.join(__dirname, '../data/schema.graphql.txt'),
      printSchema(Schema),
  );
};

/**
 * Runs the Apollo GraphQL schema builder
 */
const run = async () => {
  await buildSchema();
  logger.info('Apollo GraphQL schema built successfully');
};

run().catch((e) => {
  logger.error(e);
  process.exit(0);
});
