import { Module } from '@nestjs/common';
import { PartenaireService } from './partenaire.service';
import { PartenaireController } from './partenaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Partenaire,PartenaireSchema } from './partenaire.Model';
 @Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.q79uc.mongodb.net/planet?retryWrites=true&w=majority'),MongooseModule.forFeature([{name:Partenaire.name,schema:PartenaireSchema}])] ,
  controllers: [PartenaireController],
  providers: [PartenaireService],
  exports:[]
})
export class PartenaireModule {}
