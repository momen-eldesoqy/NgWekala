import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICart } from 'src/app/_models/cart';
import { IStore } from 'src/app/_models/store';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.srevice';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  cartItems:Array<any> = [];

  store:IStore = {city:"" , country : "" , description : "" , id : 0 ,name : "" , 
  products : [{brand_Id:0,category_Id:0,descriptio:"",id:0,name:"",price:0,quantity:0,store_Id:0}] ,
  street : "" , supplier_Id : ""}

constructor(private ac:ActivatedRoute , private _cartService:CartService ,private storeServ:StoreService ){

  storeServ.getStoreById(ac.snapshot.params['id']).subscribe({
    next:(res)=>{
      this.store = res;
    },
    error:(err)=>{
      console.log(err);
    }
  })


  var cartItems = JSON.parse(localStorage.getItem("CartItems")!)
    if(cartItems)
    {
      this.cartItems = cartItems
    }
}



  addToCart(product:any,productImg:any){

    console.log(productImg);
    
    this.cartItems.push({
      "product_Id": product.id,
      "product_Name": product.name,
      "product_Price": product.price,
      "product_Quantity": 1,
      "product_Image": productImg
    })

    const cart:ICart ={
      id: localStorage.getItem("CartId")!?localStorage.getItem("CartId")!:uuidv4(),
      items: this.cartItems,
    }

    this.callCartApi(cart);
    localStorage.setItem("CartItems",JSON.stringify(this.cartItems))
    localStorage.setItem("CartId",cart.id);
  }

  callCartApi(cart:ICart){
    this._cartService.addCart(cart).subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
