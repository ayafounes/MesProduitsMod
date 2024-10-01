import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { produit } from '../model/produit.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})
export class UpdateProduitComponent {
  currentProduit =new produit();
  constructor(private activatedRoute:ActivatedRoute,
    private produitService:ProduitService,
    private router :Router
  ) {}
  ngOnInit():void{
    this.currentProduit=this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentProduit);


  }
  updateProduit(){
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }

}
