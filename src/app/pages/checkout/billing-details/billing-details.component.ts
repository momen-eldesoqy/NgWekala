import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IorderDto } from 'src/app/_models/order';


@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent {

  constructor(private _HttpClient:HttpClient){}

  AddProduct(orderDto:IorderDto):Observable<any>{
    return this._HttpClient.post(`https://localhost:7179/api/Order`,orderDto)
  }

}
