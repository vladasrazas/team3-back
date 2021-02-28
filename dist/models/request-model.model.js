"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModel = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let RequestModel = class RequestModel extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], RequestModel.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RequestModel.prototype, "user_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], RequestModel.prototype, "skills_required", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RequestModel.prototype, "requested_time", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RequestModel.prototype, "requested_date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], RequestModel.prototype, "description", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], RequestModel.prototype, "is_open", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], RequestModel.prototype, "is_matched", void 0);
RequestModel = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], RequestModel);
exports.RequestModel = RequestModel;
//# sourceMappingURL=request-model.model.js.map