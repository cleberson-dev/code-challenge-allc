import {SchemaComposer} from 'graphql-compose';

const schemaComposer = new SchemaComposer();

import {UserQuery, UserMutation} from './user';
import {WarningQuery, WarningMutation} from './warning';

const queries = [UserQuery, WarningQuery];
const mutations = [UserMutation, WarningMutation];

queries.forEach((query) => schemaComposer.Query.addFields({
  ...query,
}));

mutations.forEach((mutation) => schemaComposer.Mutation.addFields({
  ...mutation,
}));

export default schemaComposer.buildSchema();
