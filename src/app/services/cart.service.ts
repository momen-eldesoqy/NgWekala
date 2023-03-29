import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../_models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  getCart(id:string):Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/cart?cartId=${id}`)
  }

  addCart(cart:ICart):Observable<any>{
    return this._HttpClient.post(`https://localhost:7179/api/cart`,cart)
  }
  
}
