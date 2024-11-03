import { Injectable } from '@angular/core';
import { produit } from '../model/produit.model';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits!: produit[];
  apiURL: string = 'http://localhost:8090/produits/api';

  constructor(private http: HttpClient) {}

  listeProduit(): Observable<produit[]> {
    return this.http.get<produit[]>(this.apiURL);
  }

  ajouterProduit(prod: produit): Observable<produit> {
    return this.http.post<produit>(this.apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterProduit(id: number): Observable<produit> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<produit>(url);
  }

  // Fix the parameter name to match the expected argument
  updateProduit(prod :produit) : Observable<produit>
{
return this.http.put<produit>(this.apiURL, prod, httpOptions);
}

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }
}
