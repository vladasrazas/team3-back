import { Entity } from '@loopback/repository';
export declare class Skills extends Entity {
    id?: number;
    user_id: string;
    user_name: string;
    skills_offered: string[];
    availability: boolean;
    profile_picture: string;
    constructor(data?: Partial<Skills>);
}
export interface SkillsRelations {
}
export declare type SkillsWithRelations = Skills & SkillsRelations;
