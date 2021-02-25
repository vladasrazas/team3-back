import { Entity } from '@loopback/repository';
export declare class RequestModel extends Entity {
    id?: string;
    user_id: string;
    skills_required: string[];
    requested_time: string;
    requested_date: string;
    description?: string;
    constructor(data?: Partial<RequestModel>);
}
export interface RequestModelRelations {
}
export declare type RequestModelWithRelations = RequestModel & RequestModelRelations;
