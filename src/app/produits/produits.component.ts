import { Component } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
  
})
export class ProduitsComponent {
  produits!: produit[];
  
  
  constructor(private produitServices: ProduitService  ){
    /* // this.produits=this.produitServices.ListeProduits(); */
  
  }

  ngOnInit(): void{
    this.chargerProduits();
  }

  chargerProduits(){
    this.produitServices.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    });
    }

  supprimerProduit(p: produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitServices.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        //this.chargerProduits();
        
      });
  }
}
