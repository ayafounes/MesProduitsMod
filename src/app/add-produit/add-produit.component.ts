import { Component, OnInit } from '@angular/core';
import { produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {
  newProduit = new produit();
  message: string = "0";
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  constructor(private ps: ProduitService, private router: Router) {}

  ngOnInit(): void {
    // Si tu souhaites récupérer la liste des catégories, décommente la ligne suivante.
    // this.categories = this.ps.listeCategories();
  }

  addProduit() {
    this.ps.ajouterProduit(this.newProduit).subscribe((prod: any) => {
      console.log(prod);
      this.router.navigate(['produits']);
    });
  }
}
