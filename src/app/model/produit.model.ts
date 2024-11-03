import { Categorie } from "./categorie.model";

export class produit{
    idProduit! : number;
    nomProduit! : string;
    prixProduit! : number;
    dateCreation!: Date;
    categorie!: Categorie;
    id!: number;
}
