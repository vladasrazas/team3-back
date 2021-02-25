import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Skills, SkillsRelations } from '../models';
export declare class SkillsRepository extends DefaultCrudRepository<Skills, typeof Skills.prototype.id, SkillsRelations> {
    constructor(dataSource: DbDataSource);
}
