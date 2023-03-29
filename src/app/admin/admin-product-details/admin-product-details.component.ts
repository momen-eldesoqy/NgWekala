import { Component } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/_models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent {
  public product:IProduct = {
    brand_Id:0,
    brandName:"",
    category_Id:0,
    categoryName:"",
    description:"",
    id:0,
    name:"",
    newPrice:0,
    price:0,
    promotionalText:"",
    quantity:0,
    reviews:[{pro_Review:""}],
    store_Id:0,
    storeName:""
  }
  constructor( private _prodService:ProductService , private ac:ActivatedRoute){
    _prodService.getProductById(this.ac.snapshot.params["id"]).subscribe({
      next:(response)=>{
        this.product = response;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


}
