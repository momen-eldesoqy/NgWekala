import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { IorderDto } from '../../_models/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems:Array<any> = []
  total:number = 0;

  constructor(private _OrderService:OrderService,private _Router:Router, private _cartService:CartService){}
  

  registerData = new FormGroup({
    shipTo_Name:new FormControl( null , [
      Validators.maxLength(60),
      Validators.required,
      Validators.pattern("^[a-zA-Z]*$"),
    ]),
    shipTo_Street:new FormControl(null , [
      Validators.required,
    ]),
    shipTo_City:new FormControl(null , [
      Validators.required,
    ]),
    shipTo_Country:new FormControl(null , [
      Validators.required,
    ]),
  })

  registerValue(){
    var cartID = localStorage.getItem("CartId");

    const orderDto:IorderDto={
      cartId:cartID!,
      deliveryMethodId:1,
      shipTo_Name:this.registerData.controls.shipTo_Name.value!,
      shipTo_Country:this.registerData.controls.shipTo_Country.value!,
      shipTo_City:this.registerData.controls.shipTo_City.value!,
      shipTo_Street:this.registerData.controls.shipTo_Street.value!
    }

    if(this.registerData.valid){
      this._OrderService.createOrder(orderDto).subscribe({
        next:(response)=>{
          console.log(response)
          this._Router.navigate(['/order']);
        },
        error:(err)=>{
          // this.isEmailExist = err.error
          console.log(err);
        }
      })
      
    }

  }

  getCart(id:string){
    this._cartService.getCart(id).subscribe({
      next:(resopnse)=>{
        console.log(resopnse);
        this.cartItems = resopnse.items;
        //count total
        this.cartItems.forEach(element => {
            this.total += (element.product_Price * element.product_Quantity);
        });
        console.log(this.total)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
    console.log("jgjjjgjfj")
    var CartId = localStorage.getItem("CardId")!;
    this.getCart(CartId);
  }

}
