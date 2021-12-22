import { PartenaireService } from './partenaire.service';
import { Partenaire } from './partenaire.Model';
export declare class PartenaireController {
    private readonly PartenaireService;
    constructor(PartenaireService: PartenaireService);
    getPartenaire(_id: string): Promise<Partenaire>;
    deletePartenaire(_id: string): Promise<Partenaire>;
    getPartenaires(): Promise<Partenaire[]>;
    createPartenaire(createPartenaire: Partenaire): Promise<Partenaire>;
    updatePartenaire(_id: string, updatePartenaire: Partenaire, Image: any): Promise<Partenaire>;
}
