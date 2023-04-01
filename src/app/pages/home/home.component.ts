import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { v4 as uuidv4 } from 'uuid';
import { ICart } from '../../_models/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // variables
  Products:Array<any> = [];
  cartItems:Array<any> = [];
  productImg:any;

  constructor(private _service:ProductService, private _cartService:CartService){}
 
  

  allProducts(){
    this._service.getAllProducts().subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
        this.Products = resopnse;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  searchForProduct(str:string){
    this._service.searchForProduct(str).subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
        this.Products = resopnse;
      },
      error:(error)=>{
        console.log(error)
      }
    })
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

  ngOnInit(): void {
    this.allProducts();
    var cartItems = JSON.parse(localStorage.getItem("CartItems")!)
    if(cartItems)
    {
      this.cartItems = cartItems
    }
  }

}
