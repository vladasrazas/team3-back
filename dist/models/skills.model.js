"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Skills = class Skills extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Skills.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Skills.prototype, "user_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Skills.prototype, "user_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Skills.prototype, "email_address", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Skills.prototype, "phone_number", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Skills.prototype, "skills_offered", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Skills.prototype, "availability", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Skills.prototype, "profile_picture", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Skills.prototype, "rating", void 0);
Skills = tslib_1.__decorate([
    repository_1.model({
        settings: { strict: false },
        name: 'skills',
        plural: 'skills',
        options: {
            mongodb: {
                collection: 'skills',
            },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Skills);
exports.Skills = Skills;
//# sourceMappingURL=skills.model.js.map