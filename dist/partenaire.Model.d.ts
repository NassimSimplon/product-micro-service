import { Document } from 'mongoose';
export declare type PartenaireDocument = Partenaire & Document;
export declare class Partenaire {
    Image: string;
    Nom: string;
    Prénom: string;
    Profession: string;
    NuméroDeTéléphone: string;
    AdresseEmail: string;
    NomDeLaCompagnie: string;
    Pays: string;
    ObjetDuPartenariat: string;
    Sujet: string;
    Message: string;
}
export declare const PartenaireSchema: import("mongoose").Schema<Document<Partenaire, any, any>, import("mongoose").Model<Document<Partenaire, any, any>, any, any, any>, any>;
