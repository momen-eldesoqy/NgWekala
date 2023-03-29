import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeliveryMethod } from 'src/app/_models/deliveryMethod';
import { DeliveryService } from 'src/app/services/Delivery.service';

@Component({
  selector: 'app-admin-delivery-methods',
  templateUrl: './admin-delivery-methods.component.html',
  styleUrls: ['./admin-delivery-methods.component.css']
})
export class AdminDeliveryMethodsComponent  {

  public deliveryMethods:IDeliveryMethod[] = [] ;

  constructor(private _deliveryMethodService:DeliveryService , private router:Router){
    this._deliveryMethodService.getAllDeliveryMethods().subscribe({
      next:(res)=> {
        this.deliveryMethods = res ;
      },
      error:(err)=> {
        console.log(err);
      }
    })
  }

  deleteDeliveryMethod(deliveryMethod:IDeliveryMethod) {
    let rout = this.router;
    this._deliveryMethodService.deleteDeliverMethod(deliveryMethod).subscribe({
      next(res){
        rout.navigateByUrl("admin/deliveryMethods");
      },
      error(err){
        console.log(err);
      }
    })
  }


}
