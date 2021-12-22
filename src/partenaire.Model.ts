
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PartenaireDocument = Partenaire & Document;

@Schema()
export class Partenaire {
  @Prop({required:false, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_4iKi8owqyt-oU_QQCDMDySUPfzbJ1PNIitvKbD2qtswmajdaAyz2C2s7PjvwybLIUE&usqp=CAU' })
  Image: string;
  @Prop()
  Nom: string;

  @Prop()
  Prénom: string;

  @Prop()
  Profession: string;

  @Prop()
  NuméroDeTéléphone: string;

  @Prop()
  AdresseEmail: string;

  @Prop()
  NomDeLaCompagnie: string;

  @Prop()
  Pays: string;

  @Prop()
  ObjetDuPartenariat: string;

  @Prop()
  Sujet: string;

  @Prop()
  Message: string;
  
  
}

export const PartenaireSchema = SchemaFactory.createForClass(Partenaire);