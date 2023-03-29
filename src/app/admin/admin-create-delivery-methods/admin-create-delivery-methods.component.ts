import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDeliveryMethod } from 'src/app/_models/deliveryMethod';
import { DeliveryService } from 'src/app/services/Delivery.service';

@Component({
  selector: 'app-admin-create-delivery-methods',
  templateUrl: './admin-create-delivery-methods.component.html',
  styleUrls: ['./admin-create-delivery-methods.component.css']
})
export class AdminCreateDeliveryMethodsComponent {

  constructor(private _HttpClient:HttpClient , private router:Router , private _deliverDervice:DeliveryService){}

  registerData = new FormGroup({

    name:new FormControl(null,[
      Validators.required
    ]),
    cost:new FormControl(null,[

      Validators.required,

      Validators.pattern(/[0-9]/)

    ]),
    deliveryTime:new FormControl("2004-01-02 00:00:00.0000000",[
      Validators.required
    ]),

    description:new FormControl(null,[
      Validators.required
      
    ]),


  })

  add() {
    if(this.registerData.valid) {
      console.log(this.registerData.value);
      let del:IDeliveryMethod = {
        description : this.registerData.controls.description.value!,
        cost : this.registerData.controls.cost.value!,
        name : this.registerData.controls.name.value!,
        id:0
      }
      this._deliverDervice.addDeliveryMethod(del).subscribe({
        next:(resopnse)=>{
          this.router.navigateByUrl("admin/deliveryMethods");
        },
        error:(error)=>{
          console.log(error)
        }
      })

      // this._HttpClient.post("https://localhost:7179/api/DeliveryMethod",this.registerData.value).subscribe({
      //   next:(resopnse)=>{
      //     this.router.navigateByUrl("admin/deliveryMethods");
      //     console.log(resopnse);
      //   },
      //   error:(error)=>{
      //     console.log(error)
      //   }
      // });
      
    }else {
      console.log("else")
    }
  }
}
