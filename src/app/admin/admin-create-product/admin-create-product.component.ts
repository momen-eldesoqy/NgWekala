import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBrand } from 'src/app/_models/brand';
import { ICategory } from 'src/app/_models/category';
import { IStore } from 'src/app/_models/store';
import { CategoryService } from 'src/app/services/Category.service';
import { BrandService } from 'src/app/services/brand.service';
import { StoreService } from 'src/app/services/store.srevice';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.css']
})
export class AdminCreateProductComponent {

  brands:IBrand[] = [];

  stores:IStore[] =[] ;

  categories:ICategory[] = [];

  // { city:"" , country : "" , description:"" , id:0 , name:"" , 
  // products :[{
  //   brand_Id:0,
  //   category_Id:0,
  //   descriptio:"" ,
  //   id:0,
  //   name:"",
  //   price:0,
  //   quantity:0,
  //   store_Id:0
  // }] , street : "" , supplier_Id : ""};

  constructor(private _HttpClient:HttpClient ,
     private router:Router ,
     _brands:BrandService ,
     _stores:StoreService ,
     _categories:CategoryService
     ) 
     {

    _brands.getAllBrands().subscribe({
      next:(res)=>{
        this.brands = res;
      },
      error:(err)=>{
        console.log(err);
      }
    }) ;

    _stores.getAllStores().subscribe({
      next:(res)=>{
        this.stores = res;
      },
      error:(err)=>{
        console.log(err);
      }
    })

    _categories.getAllCategories().subscribe({
      next:(res)=>{
        this.categories = res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  registerData = new FormGroup({

    name:new FormControl(null,[
      Validators.required
    ]),

    description:new FormControl(null,[
      Validators.required
      
    ]),
    price:new FormControl(null,[
      Validators.required,
      Validators.pattern(/[0-9]/)
    ]),
    quantity:new FormControl(null,[
      Validators.required,
      Validators.pattern(/[0-9]/)
    ]),
    brand_Id:new FormControl(null,[
      Validators.required,
      
    ]),
    store_Id:new FormControl(null,[
      Validators.required,
      
    ]),
    category_Id:new FormControl(null,[
      Validators.required,
      
    ]),
    

  })

  add() {
    if(this.registerData.valid) {
      console.log(this.registerData.value);

      this._HttpClient.post("https://localhost:7179/api/Product",this.registerData.value).subscribe({
        
      next:(resopnse)=>{
          this.router.navigateByUrl("admin/products");
          console.log(resopnse);
        },
        error:(error)=>{
          console.log(error)
        }
      });
      
    }else {
      console.log("else")
    }
  }
}
