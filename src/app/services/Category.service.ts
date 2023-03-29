import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../_models/category';

@Injectable({
    providedIn: 'root'
  })
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }

  getAllCategories():Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/Category`)
  }
  AddProduct(category:ICategory):Observable<any>{
    return this._HttpClient.post(`https://localhost:7179/api/Category`,category)
  }
  getCategoryById(id:number):Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/Category/${id}`)
  }
  updateCategory(id:number,category:ICategory):Observable<any>{
    return this._HttpClient.put(`https://localhost:7179/api/Category/${id}`,category)
  }
  deleteProduct(id:number):Observable<any>{
    return this._HttpClient.delete(`https://localhost:7179/api/Category/${id}`)
  }
}
