import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {PartenaireDocument ,Partenaire} from './partenaire.Model'
import { Model } from 'mongoose';
 
@Injectable()
export class PartenaireService {

constructor(@InjectModel(Partenaire.name) private readonly  PartenaireModel: Model <PartenaireDocument>){}
//@GET By ID
async getPartenaireById( _id:string):Promise<Partenaire>{
let result = await this.PartenaireModel.findOne({_id})
 return result
}
//@GET All
async getPartenaires():Promise<Partenaire[]>{
 let result = await this.PartenaireModel.find()
 return result

}
//@POST 
async createPartenaire(Image:string,Nom:string,Prénom:string,Profession:string,NuméroDeTéléphone:string,AdresseEmail:string,NomDeLaCompagnie:String,Pays:string,ObjetDuPartenariat:string,Sujet:string,Message:string):Promise<Partenaire>{
 let result = await this.PartenaireModel.create({
  Image, Nom,Prénom,Profession,NuméroDeTéléphone,AdresseEmail,NomDeLaCompagnie,Pays,ObjetDuPartenariat,Sujet,Message
  })
  return result
}
//@PUT
async updatePartenaire(_id:string,PartenaireUpdates:Partenaire ):Promise<Partenaire>{
 let result = await await  this.PartenaireModel.findOneAndUpdate({_id},  PartenaireUpdates
  )
 return result
}
//@Delete
async deletePartenaire(_id:string):Promise<Partenaire>{
 let result = await this.PartenaireModel.findOneAndDelete({_id})
 return result

} 
}
