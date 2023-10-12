import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'platillos/'
   }

   getListProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.myAppUrl + this.myApiUrl + 'ListaCompleta');
   }

   deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}Eliminar/${id}`, { responseType: 'text' });
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}Agregar`, product, { responseType: 'text' })
      .pipe(
        catchError(error => {
          console.error('Error al agregar producto:', error);
          throw error;
        })
      );
  }
}
