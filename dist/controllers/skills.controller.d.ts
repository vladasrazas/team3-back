import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Skills } from '../models';
import { SkillsRepository } from '../repositories';
export declare class SkillsController {
    skillsRepository: SkillsRepository;
    constructor(skillsRepository: SkillsRepository);
    create(skills: Skills): Promise<Skills>;
    count(where?: Where<Skills>): Promise<Count>;
    find(filter?: Filter<Skills>): Promise<Skills[]>;
    updateAll(skills: Skills, where?: Where<Skills>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Skills>): Promise<Skills>;
    updateById(id: number, skills: Skills): Promise<void>;
    replaceById(id: number, skills: Skills): Promise<void>;
    deleteById(id: number): Promise<void>;
}
