"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SkillsController = class SkillsController {
    constructor(skillsRepository) {
        this.skillsRepository = skillsRepository;
    }
    async create(skills) {
        return this.skillsRepository.create(skills);
    }
    async count(where) {
        return this.skillsRepository.count(where);
    }
    async find(filter) {
        return this.skillsRepository.find(filter);
    }
    async updateAll(skills, where) {
        return this.skillsRepository.updateAll(skills, where);
    }
    async findById(id, filter) {
        return this.skillsRepository.findById(id, filter);
    }
    async updateById(id, skills) {
        await this.skillsRepository.updateById(id, skills);
    }
    async replaceById(id, skills) {
        await this.skillsRepository.replaceById(id, skills);
    }
    async deleteById(id) {
        await this.skillsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/skills'),
    rest_1.response(200, {
        description: 'Skills model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Skills) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Skills, {
                    title: 'NewSkills',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Skills]),
    tslib_1.__metadata("design:returntype", Promise)
], SkillsController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/skills/count'),
    rest_1.response(200, {
        description: 'Skills model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Skills)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SkillsController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/skills'),
    rest_1.response(200, {
        description: 'Array of Skills model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Skills, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Skills)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SkillsController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/skills'),
    rest_1.response(200, {
        description: 'Skills PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Skills, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Skills)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Skills, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SkillsController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/skills/{id}'),
    rest_1.response(200, {
        description: 'Skills model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Skills, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Skills, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SkillsController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/skills/{id}'),
    rest_1.response(204, {
        description: 'Skills PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Skills, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Skills]),
    tslib_1.__metadata("design:returntype", Promise)
], SkillsController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/skills/{id}'),
    rest_1.response(204, {
        description: 'Skills PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Skills]),
    tslib_1.__metadata("design:returntype", Promise)
], SkillsController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/skills/{id}'),
    rest_1.response(204, {
        description: 'Skills DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SkillsController.prototype, "deleteById", null);
SkillsController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SkillsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SkillsRepository])
], SkillsController);
exports.SkillsController = SkillsController;
//# sourceMappingURL=skills.controller.js.map