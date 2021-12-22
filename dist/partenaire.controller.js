"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartenaireController = void 0;
const common_1 = require("@nestjs/common");
const partenaire_service_1 = require("./partenaire.service");
const partenaire_Model_1 = require("./partenaire.Model");
const platform_express_1 = require("@nestjs/platform-express");
const fs_1 = require("fs");
let PartenaireController = class PartenaireController {
    constructor(PartenaireService) {
        this.PartenaireService = PartenaireService;
    }
    async getPartenaire(_id) {
        return this.PartenaireService.getPartenaireById(_id);
    }
    async deletePartenaire(_id) {
        return this.PartenaireService.deletePartenaire(_id);
    }
    async getPartenaires() {
        return this.PartenaireService.getPartenaires();
    }
    async createPartenaire(createPartenaire) {
        return this.PartenaireService.createPartenaire(createPartenaire.Image, createPartenaire.Nom, createPartenaire.Prénom, createPartenaire.Profession, createPartenaire.NuméroDeTéléphone, createPartenaire.AdresseEmail, createPartenaire.NomDeLaCompagnie, createPartenaire.Pays, createPartenaire.ObjetDuPartenariat, createPartenaire.Sujet, createPartenaire.Message);
    }
    async updatePartenaire(_id, updatePartenaire, Image) {
        const path = './src/images/' + Image.originalname;
        let fileStream = (0, fs_1.createWriteStream)(path);
        fileStream.write(Image.buffer);
        fileStream.end();
        updatePartenaire.Image = path;
        return this.PartenaireService.updatePartenaire(_id, updatePartenaire);
    }
};
__decorate([
    (0, common_1.Get)('getPartenaire/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartenaireController.prototype, "getPartenaire", null);
__decorate([
    (0, common_1.Delete)('deletePartenaire/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartenaireController.prototype, "deletePartenaire", null);
__decorate([
    (0, common_1.Get)('getPartenaires'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartenaireController.prototype, "getPartenaires", null);
__decorate([
    (0, common_1.Post)('addPartenaire'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [partenaire_Model_1.Partenaire]),
    __metadata("design:returntype", Promise)
], PartenaireController.prototype, "createPartenaire", null);
__decorate([
    (0, common_1.Put)('updatePartenaire/:_id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('Image')),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, partenaire_Model_1.Partenaire, Object]),
    __metadata("design:returntype", Promise)
], PartenaireController.prototype, "updatePartenaire", null);
PartenaireController = __decorate([
    (0, common_1.Controller)('Partenaire'),
    __metadata("design:paramtypes", [partenaire_service_1.PartenaireService])
], PartenaireController);
exports.PartenaireController = PartenaireController;
//# sourceMappingURL=partenaire.controller.js.map