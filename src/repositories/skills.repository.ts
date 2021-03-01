import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Skills, SkillsRelations} from '../models';

export class SkillsRepository extends DefaultCrudRepository<
  Skills,
  typeof Skills.prototype.id,
  SkillsRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Skills, dataSource);
  }
}
