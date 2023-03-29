import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStore } from 'src/app/_models/store';
import { StoreService } from 'src/app/services/store.srevice';

@Component({
  selector: 'app-admin-store-details',
  templateUrl: './admin-store-details.component.html',
  styleUrls: ['./admin-store-details.component.css']
})
export class AdminStoreDetailsComponent {
  store:IStore={
    city:"",
    country:"",
    description:"",
    id:0,
    name:"",
    products:[{brand_Id:0,category_Id:0,descriptio:"",id:0,name:"0",price:0,quantity:0,store_Id:0}],
    street:"",
    supplier_Id:""
  }
  constructor( private _storeService:StoreService, private ac:ActivatedRoute){
    _storeService.getStoreById(this.ac.snapshot.params["id"]).subscribe({
      next:(res)=>{
        this.store = res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
