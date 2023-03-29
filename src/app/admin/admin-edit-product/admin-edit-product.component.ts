import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBrand } from 'src/app/_models/brand';
import { ICategory } from 'src/app/_models/category';
import { IProduct } from 'src/app/_models/product';
import { IStore } from 'src/app/_models/store';
import { CategoryService } from 'src/app/services/Category.service';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.srevice';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent {
  
  brands:IBrand[] = [];

  stores:IStore[] =[] ;

  categories:ICategory[] = [];

  product:IProduct = {
    id:0,
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    brand_Id: 0,
    brandName: "",
    category_Id: 0,
    categoryName: "",
    store_Id: 0,
    storeName: "",
    newPrice: 0,
    promotionalText: "",
    reviews: [
      {
        pro_Review: ""
      }
    ]
  }

  constructor( private _HttpClient:HttpClient ,
               private router:Router ,
               private _product:ProductService ,
               private ac:ActivatedRoute , 
               private _stores:StoreService ,
               private _categories:CategoryService , 
               private _brands:BrandService ,
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

  ngOnInit() {
    this._product.getProductById(this.ac.snapshot.params["id"]).subscribe({
      next:(res)=>{
        this.product = res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })  
  }

  registerData = new FormGroup({
    id:new FormControl(this.product.id),

    name:new FormControl(this.product.name,[
      Validators.required
    ]),

    description:new FormControl(this.product.description,[
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

  update() {
    if(this.registerData.valid) {
      console.log(this.registerData.value);
      this._HttpClient.put(`https://localhost:7179/api/Product/${this.registerData.controls.id.value}`,this.registerData.value).subscribe({
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
