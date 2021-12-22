import { PartenaireDocument, Partenaire } from './partenaire.Model';
import { Model } from 'mongoose';
export declare class PartenaireService {
    private readonly PartenaireModel;
    constructor(PartenaireModel: Model<PartenaireDocument>);
    getPartenaireById(_id: string): Promise<Partenaire>;
    getPartenaires(): Promise<Partenaire[]>;
    createPartenaire(Image: string, Nom: string, Prénom: string, Profession: string, NuméroDeTéléphone: string, AdresseEmail: string, NomDeLaCompagnie: String, Pays: string, ObjetDuPartenariat: string, Sujet: string, Message: string): Promise<Partenaire>;
    updatePartenaire(_id: string, PartenaireUpdates: Partenaire): Promise<Partenaire>;
    deletePartenaire(_id: string): Promise<Partenaire>;
}
