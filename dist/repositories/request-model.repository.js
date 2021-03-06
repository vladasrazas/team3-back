"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModelRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
// import {MongodbDataSource} from '../datasources';
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RequestModelRepository = class RequestModelRepository extends repository_1.DefaultCrudRepository {
    //VLADAS
    constructor(dataSource) {
        super(models_1.RequestModel, dataSource);
    }
};
RequestModelRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource])
], RequestModelRepository);
exports.RequestModelRepository = RequestModelRepository;
//# sourceMappingURL=request-model.repository.js.map