import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {RequestModel, RequestModelRelations} from '../models';

export class RequestModelRepository extends DefaultCrudRepository<
  RequestModel,
  typeof RequestModel.prototype.id,
  RequestModelRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(RequestModel, dataSource);
  }
}
