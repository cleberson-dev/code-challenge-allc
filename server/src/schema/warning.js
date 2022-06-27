import {WarningTC} from '../models/warning';

const WarningQuery = {
  warningById: WarningTC.getResolver('findById'),
  warningByIds: WarningTC.getResolver('findByIds'),
  warningOne: WarningTC.getResolver('findOne'),
  warningMany: WarningTC.getResolver('findMany'),
  warningCount: WarningTC.getResolver('count'),
  warningConnection: WarningTC.getResolver('connection'),
  warningPagination: WarningTC.getResolver('pagination'),
};

const WarningMutation = {
  warningCreateOne: WarningTC.getResolver('createOne'),
  warningCreateMany: WarningTC.getResolver('createMany'),
  warningUpdateById: WarningTC.getResolver('updateById'),
  warningUpdateOne: WarningTC.getResolver('updateOne'),
  warningUpdateMany: WarningTC.getResolver('updateMany'),
  warningRemoveById: WarningTC.getResolver('removeById'),
  warningRemoveOne: WarningTC.getResolver('removeOne'),
  warningRemoveMany: WarningTC.getResolver('removeMany'),
};

export {WarningQuery, WarningMutation};
