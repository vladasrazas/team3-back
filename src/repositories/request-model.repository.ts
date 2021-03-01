import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {RequestModel, RequestModelRelations} from '../models';

export class RequestModelRepository extends DefaultCrudRepository<
  RequestModel,
  typeof RequestModel.prototype.id,
  RequestModelRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(RequestModel, dataSource);
  }
}
