import { Component , EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICart } from 'src/app/_models/cart';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {
  cart:any;
  cartItems:Array<any> = []
  total:number = 0;
  @Output() sTotal = new EventEmitter<any>();

  constructor(private _cartService:CartService){}

  
  getCart(id:string){
    this._cartService.getCart(id).subscribe({
      next:(resopnse)=>{
        console.log(resopnse);
        this.cart = resopnse;
        this.cartItems = resopnse.items;
        //count total
        this.cartItems.forEach(element => {
            this.total += (element.product_Price * element.product_Quantity);
        });
        console.log(this.total)
        this.sTotal.emit(this.total)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  updateCart(cart:ICart){
    this._cartService.addCart(cart).subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  
  increaseQuantity(item:any){
    if(item.product_Quantity){ 
      item.product_Quantity++;
    }else{
      item.product_Quantity=1;
    }

    for (var i = 0; i < this.cartItems.length; i++) {
      if(item.product_Name === this.cartItems[i].product_Name){
        this.cartItems[i].value =item.value ;
      }
    }

    const cart:ICart ={
      id: this.cart.id,
      items: this.cartItems,
    }

    this.updateCart(cart);

    console.log(this.cartItems)
    console.log(item);

    //update total after update cart
    this.total = 0;
    this.getCart(this.cart.id)

    
  }

  decreaseQuantity(item:any){
    if(item.product_Quantity > 1){ 
      item.product_Quantity--;
    }else{
      item.product_Quantity=1;
    }

    for (var i = 0; i < this.cartItems.length; i++) {
      if(item.product_Name === this.cartItems[i].product_Name){
        this.cartItems[i].value =item.value ;
      }
    }

    const cart:ICart ={
      id: this.cart.id,
      items: this.cartItems,
    }

    this.updateCart(cart);

    //update total after update cart
    this.total = 0;
    this.getCart(this.cart.id)
    
  }

  removeProduct(productId:number){
    this.cartItems.splice(this.cartItems.findIndex(i => i.product_Id == productId),1);

    const cart:ICart ={
      id: this.cart.id,
      items: this.cartItems,
    }

    localStorage.setItem("CartItems",JSON.stringify(this.cartItems))

    this.updateCart(cart);

    //update total after update cart
    this.total = 0;
    this.getCart(this.cart.id)
  }

  ngOnInit(): void {
    var cartId = localStorage.getItem("CartId")
    if(cartId){
      this.getCart(cartId)
    }
    
  }

}
