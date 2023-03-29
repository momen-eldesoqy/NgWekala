import { Component, Injectable } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute , Router } from '@angular/router';
import { IProduct } from 'src/app/_models/product';

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

  constructor(private _service:ProductService , public ac:ActivatedRoute){

   this._service.getProductById(this.ac.snapshot.params['id']).subscribe({

    next:(res)=>{

      this.product = res;

      console.log(this.product);

    },

    error:(err)=>{

      console.log(err)

    }

   })
    
  }

  allProducts(){

    this._service.getAllProducts().subscribe({

      next:(resopnse)=>{
        
        console.log(resopnse)
        
      }
    })
  }
}
