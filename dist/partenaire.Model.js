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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartenaireSchema = exports.Partenaire = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Partenaire = class Partenaire {
};
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_4iKi8owqyt-oU_QQCDMDySUPfzbJ1PNIitvKbD2qtswmajdaAyz2C2s7PjvwybLIUE&usqp=CAU' }),
    __metadata("design:type", String)
], Partenaire.prototype, "Image", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "Nom", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "Pr\u00E9nom", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "Profession", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "Num\u00E9roDeT\u00E9l\u00E9phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "AdresseEmail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "NomDeLaCompagnie", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "Pays", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "ObjetDuPartenariat", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "Sujet", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partenaire.prototype, "Message", void 0);
Partenaire = __decorate([
    (0, mongoose_1.Schema)()
], Partenaire);
exports.Partenaire = Partenaire;
exports.PartenaireSchema = mongoose_1.SchemaFactory.createForClass(Partenaire);
//# sourceMappingURL=partenaire.Model.js.map