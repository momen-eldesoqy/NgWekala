import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBrandDto } from 'src/app/_models/brandDto';
import { ICart } from 'src/app/_models/cart';
import { BrandService } from 'src/app/services/brand.service';
import { CartService } from 'src/app/services/cart.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

  brand:IBrandDto = {id:0,name:"",description:"",products:[]};
  cartItems:Array<any> = [];
  newl:any;

  constructor(private ac:ActivatedRoute , private _cartService:CartService , private brandServ:BrandService) {
      brandServ.getBrandById(ac.snapshot.params['id']).subscribe({
        next:(res)=>{
          this.brand = res ;
          this.newl = this.brand.products;
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
