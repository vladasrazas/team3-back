import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { RequestModel, RequestModelRelations } from '../models';
export declare class RequestModelRepository extends DefaultCrudRepository<RequestModel, typeof RequestModel.prototype.id, RequestModelRelations> {
    constructor(dataSource: MongodbDataSource);
}
