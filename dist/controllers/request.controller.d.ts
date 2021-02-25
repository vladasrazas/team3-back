import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { RequestModel } from '../models';
import { RequestModelRepository } from '../repositories';
export declare class RequestController {
    requestModelRepository: RequestModelRepository;
    constructor(requestModelRepository: RequestModelRepository);
    create(requestModel: Omit<RequestModel, 'id'>): Promise<RequestModel>;
    count(where?: Where<RequestModel>): Promise<Count>;
    find(filter?: Filter<RequestModel>): Promise<RequestModel[]>;
    updateAll(requestModel: RequestModel, where?: Where<RequestModel>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<RequestModel>): Promise<RequestModel>;
    updateById(id: string, requestModel: RequestModel): Promise<void>;
    replaceById(id: string, requestModel: RequestModel): Promise<void>;
    deleteById(id: string): Promise<void>;
}
