import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDeliveryMethod } from '../_models/deliveryMethod';

@Injectable({
    providedIn: 'root'
  })
export class DeliveryService {

    constructor(private _HttpClient:HttpClient) { 

    }

    getAllDeliveryMethods():Observable<any> {
        return this._HttpClient.get(`https://localhost:7179/api/DeliveryMethod`)
    }
    addDeliveryMethod(deliverMethod:IDeliveryMethod):Observable<any>{
      return this._HttpClient.post(`https://localhost:7179/api/DeliveryMethod/` , deliverMethod);
    }
    deleteDeliverMethod(deliverMethod:IDeliveryMethod):Observable<any>{
      return this._HttpClient.delete(`https://localhost:7179/api/DeliveryMethod/`,{body:deliverMethod})
    }
}
