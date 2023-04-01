import { Component, Injectable } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute , Router } from '@angular/router';
import { IProduct } from 'src/app/_models/product';
import { ICart } from 'src/app/_models/cart';
import { CartService } from 'src/app/services/cart.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
@Injectable()
export class ProductComponent {
  public product:IProduct = {
    brand_Id : 0 ,
    brandName:"" , 
    category_Id:0,
    description:"",
    id:0 ,
    categoryName:"",
    name:"",
    price:0,
    newPrice:0,
    promotionalText:"",
    quantity:0,
    reviews:[{pro_Review:""}],
    store_Id:0,
    storeName:""
  } 

  Products:Array<any> = [];
  cartItems:Array<any> = [];
  productImg:any;
  quantity:number = 1;
  bind:number = 1;

  constructor(private _service:ProductService , private _cartService:CartService,private _Router:Router ,public ac:ActivatedRoute){

   this._service.getProductById(this.ac.snapshot.params['id']).subscribe({

    next:(res)=>{

      this.product = res;

      console.log(this.product);

    },

    error:(err)=>{

      console.log(err)

    }

   })
    
   this.getProductImg()
  }

  allProducts(){

    this._service.getAllProducts().subscribe({

      next:(resopnse)=>{
        
        console.log(resopnse)
        
      }
    })
  }

  getProductImg(){
    this._service.getProductImages(this.ac.snapshot.params['id']).subscribe({
      next:(resopnse)=>{
        this.productImg = resopnse[0].pro_Img;
        console.log(this.productImg)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  increaseQuantity(){
      this.quantity++;
      console.log(this.quantity)
  }
  decreaseQuantity(){
    if(this.quantity > 1){
      this.quantity--;
      console.log(this.quantity)
    }
  }

  addToCart(){

    
    this.cartItems.push({
      "product_Id": this.product.id,
      "product_Name": this.product.name,
      "product_Price": this.product.price,
      "product_Quantity": this.quantity,
      "product_Image": this.productImg
    })

    console.log(this.cartItems)
    const cart:ICart ={
      id: localStorage.getItem("CartId")!?localStorage.getItem("CartId")!:uuidv4(),
      items: this.cartItems,
    }

    this.callCartApi(cart);
    localStorage.setItem("CartItems",JSON.stringify(this.cartItems))
    localStorage.setItem("CartId",cart.id);

    this._Router.navigate(['/cart']);

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
