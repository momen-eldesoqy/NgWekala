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
  selector: 'app-admin-create-store',
  templateUrl: './admin-create-store.component.html',
  styleUrls: ['./admin-create-store.component.css']
})
export class AdminCreateStoreComponent {

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
     private router:Router 
     ) 
     {
    }

  registerData = new FormGroup({

    name:new FormControl(null,[
      Validators.required
    ]),

    description:new FormControl(null,[
      Validators.required
      
    ]),
    street:new FormControl(null,[
      Validators.required,
      
    ]),
    city:new FormControl(null,[
      Validators.required,
      
    ]),
    country:new FormControl(null,[
      Validators.required,
      
    ]),
    supplier_Id:new FormControl("hkluejkllllll",[
      Validators.required,
      
    ]),
    
    

  })

  add() {
    if(this.registerData.valid) {
      console.log(this.registerData.value);

      this._HttpClient.post("https://localhost:7179/api/Store",this.registerData.value).subscribe({
        
      next:(resopnse)=>{
          this.router.navigateByUrl("admin/stores");
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
