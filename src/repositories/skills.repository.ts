import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Skills, SkillsRelations} from '../models';

export class SkillsRepository extends DefaultCrudRepository<
  Skills,
  typeof Skills.prototype.id,
  SkillsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Skills, dataSource);
  }
}
