import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class PromoService {

    constructor(private _HttpClient:HttpClient) { }

    getAllPromotions():Observable<any>{
        return this._HttpClient.get(`https://localhost:7179/api/Promotion`);
      }
}
