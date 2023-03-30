import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICart } from 'src/app/_models/cart';
import { ICategory } from 'src/app/_models/category';
import { CategoryService } from 'src/app/services/Category.service';
import { CartService } from 'src/app/services/cart.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  cat:ICategory = {id:0,name:"",description:"",products:[]};
  cartItems:Array<any> = [];

  constructor(private catServ:CategoryService , private ac:ActivatedRoute , private _cartService:CartService){
    
    catServ.getCategoryById(ac.snapshot.params['id']).subscribe({
      next:(res)=>{
        this.cat = res;
      },
      error:(err)=> {
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
