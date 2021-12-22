import { Controller, Get, Post, Body, Param, Put, Delete ,Res,UseInterceptors,UploadedFile} from '@nestjs/common';
import { PartenaireService } from './partenaire.service';
import {Partenaire} from './partenaire.Model'
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';

@Controller('Partenaire')
export class PartenaireController {
  constructor(private readonly PartenaireService: PartenaireService) {}
  
@Get('getPartenaire/:_id')
async getPartenaire(@Param('_id') _id:string):Promise <Partenaire>{
  return this.PartenaireService.getPartenaireById(_id)
}

@Delete('deletePartenaire/:_id')
async deletePartenaire(@Param('_id') _id:string):Promise <Partenaire>{
  return this.PartenaireService.deletePartenaire(_id)
}

@Get('getPartenaires')
async getPartenaires():Promise <Partenaire[]>{
  return this.PartenaireService.getPartenaires()
}

@Post('addPartenaire')

async createPartenaire( @Body() createPartenaire:Partenaire):Promise <Partenaire>{

return this.PartenaireService.createPartenaire(createPartenaire.Image,createPartenaire.Nom,createPartenaire.Prénom,createPartenaire.Profession,createPartenaire.NuméroDeTéléphone,createPartenaire.AdresseEmail,createPartenaire.NomDeLaCompagnie,createPartenaire.Pays,createPartenaire.ObjetDuPartenariat,createPartenaire.Sujet,createPartenaire.Message
    )
}

@Put('updatePartenaire/:_id')
@UseInterceptors(FileInterceptor('Image'))

async updatePartenaire(@Param('_id') _id:string,@Body() updatePartenaire: Partenaire  , @UploadedFile() Image):Promise <Partenaire>{

const path = './src/images/' + Image.originalname;
let fileStream = createWriteStream(path)
    fileStream.write(Image.buffer); 
    fileStream.end();
    updatePartenaire.Image = path;

  return this.PartenaireService.updatePartenaire(_id,updatePartenaire)

}
 
}
