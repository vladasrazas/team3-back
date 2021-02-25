"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RequestController = class RequestController {
    constructor(requestModelRepository) {
        this.requestModelRepository = requestModelRepository;
    }
    async create(requestModel) {
        return this.requestModelRepository.create(requestModel);
    }
    async count(where) {
        return this.requestModelRepository.count(where);
    }
    async find(filter) {
        return this.requestModelRepository.find(filter);
    }
    async updateAll(requestModel, where) {
        return this.requestModelRepository.updateAll(requestModel, where);
    }
    async findById(id, filter) {
        return this.requestModelRepository.findById(id, filter);
    }
    async updateById(id, requestModel) {
        await this.requestModelRepository.updateById(id, requestModel);
    }
    async replaceById(id, requestModel) {
        await this.requestModelRepository.replaceById(id, requestModel);
    }
    async deleteById(id) {
        await this.requestModelRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/request'),
    rest_1.response(200, {
        description: 'RequestModel model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.RequestModel) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RequestModel, {
                    title: 'NewRequestModel',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/request/count'),
    rest_1.response(200, {
        description: 'RequestModel model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.RequestModel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/request'),
    rest_1.response(200, {
        description: 'Array of RequestModel model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.RequestModel, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.RequestModel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/request'),
    rest_1.response(200, {
        description: 'RequestModel PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RequestModel, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.RequestModel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.RequestModel, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/request/{id}'),
    rest_1.response(200, {
        description: 'RequestModel model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RequestModel, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.RequestModel, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/request/{id}'),
    rest_1.response(204, {
        description: 'RequestModel PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.RequestModel, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.RequestModel]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/request/{id}'),
    rest_1.response(204, {
        description: 'RequestModel PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.RequestModel]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/request/{id}'),
    rest_1.response(204, {
        description: 'RequestModel DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestController.prototype, "deleteById", null);
RequestController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RequestModelRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RequestModelRepository])
], RequestController);
exports.RequestController = RequestController;
//# sourceMappingURL=request.controller.js.map