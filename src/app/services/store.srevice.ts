import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class StoreService {

    constructor(private _HttpClient:HttpClient) { }

    getAllStores():Observable<any> {
        return this._HttpClient.get(`https://localhost:7179/api/Store`)
    }
    getStoreById(id:number):Observable<any>{
      return this._HttpClient.get(`https://localhost:7179/api/Store/${id}`)
    }
    deleteStore(id:number):Observable<any>{
      return this._HttpClient.delete(`https://localhost:7179/api/Store/${id}`)
    }
}
