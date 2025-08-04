import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  // products:Iproduct;
  constructor(private httpClient: HttpClient, private _UserAuthService:UserAuthService) { }
  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/api/Product`, {
      headers: new HttpHeaders({
        "authorization": this._UserAuthService.getToken()
      })
    });
  }
  getProductById(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(`${environment.baseUrl}/api/Product/${id}`)
  }
  getProductByCatId(catId: number): Observable<Iproduct[]> {
    let searchString= new HttpParams()
    searchString=searchString.append("catId",catId)
  searchString=  searchString.append("limits",5)
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/api/Product`,{
      // params: new HttpParams().set("catId",catId)
      params:searchString
       
    })
  }
  addProduct(newProduct: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(`${environment.baseUrl}/api/Product`, JSON.stringify(newProduct))
  }
  deleteProductById(id: number): Observable<Iproduct> {
    return this.httpClient.delete<Iproduct>(`${environment.baseUrl}/api/Product/${id}`)
  }

  updateProductById(id: number, updatedProduct: Iproduct): Observable<Iproduct> {
    return this.httpClient.put<Iproduct>(`${environment.baseUrl}/api/Product/${id}`, JSON.stringify(updatedProduct));
  }
}
