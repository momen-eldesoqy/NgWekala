import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class BrandService {

    constructor(private _HttpClient:HttpClient) { }

    getAllBrands():Observable<any>{
        return this._HttpClient.get(`https://localhost:7179/api/Brand`)
      }
}
