"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartenaireModule = void 0;
const common_1 = require("@nestjs/common");
const partenaire_service_1 = require("./partenaire.service");
const partenaire_controller_1 = require("./partenaire.controller");
const mongoose_1 = require("@nestjs/mongoose");
const partenaire_Model_1 = require("./partenaire.Model");
let PartenaireModule = class PartenaireModule {
};
PartenaireModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.q79uc.mongodb.net/planet?retryWrites=true&w=majority'), mongoose_1.MongooseModule.forFeature([{ name: partenaire_Model_1.Partenaire.name, schema: partenaire_Model_1.PartenaireSchema }])],
        controllers: [partenaire_controller_1.PartenaireController],
        providers: [partenaire_service_1.PartenaireService],
        exports: []
    })
], PartenaireModule);
exports.PartenaireModule = PartenaireModule;
//# sourceMappingURL=partenaire.module.js.map