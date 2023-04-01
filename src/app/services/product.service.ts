import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../_models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

  getProductById(id:number):Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/Product/${id}`)
  }

  getAllProducts():Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/Product`)
  }

  AddProduct(product:IProduct):Observable<any>{
    return this._HttpClient.post(`https://localhost:7179/api/Product`,product)
  }

  AddProductImg(product:IProduct):Observable<any>{
    return this._HttpClient.post(`https://localhost:7179/api/Product`,product)
  }
  updateProduct(id:number,product:IProduct):Observable<any>{
    return this._HttpClient.put(`https://localhost:7179/api/Product/${id}`,product)
  }

  deleteProduct(id:number):Observable<any>{
    return this._HttpClient.delete(`https://localhost:7179/api/Product/${id}`)
  }

  getLatestProduct():Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/Product/Latest`)
  }

  getBestSelling():Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/Product/BestSelling`)
  }

  getProductImages(id:number):Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/Product/image/${id}`)
  }

  searchForProduct(searchStr:string):Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/Product/Pagination?Search=${searchStr}`)
  }
}
