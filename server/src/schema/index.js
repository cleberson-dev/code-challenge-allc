import {SchemaComposer} from 'graphql-compose';

const schemaComposer = new SchemaComposer();

import {UserQuery, UserMutation} from './user';
import {WarningQuery, WarningMutation} from './warning';

schemaComposer.Query.addFields({
  ...UserQuery,
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
});

schemaComposer.Query.addFields({
  ...WarningQuery,
});

schemaComposer.Mutation.addFields({
  ...WarningMutation,
});

export default schemaComposer.buildSchema();
