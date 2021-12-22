"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const partenaire_module_1 = require("./partenaire.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(partenaire_module_1.PartenaireModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map