import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IorderDto } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient:HttpClient) { }

  createOrder(orderDto:IorderDto):Observable<any>{
    return this._HttpClient.post(`https://localhost:7179/api/Order`,orderDto)
  }

  GetOrders():Observable<any>{
    return this._HttpClient.get(`https://localhost:7179/api/Order`)
  }
}
