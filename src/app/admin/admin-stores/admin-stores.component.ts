import { Component } from '@angular/core';
import { IStore } from 'src/app/_models/store';
import { StoreService } from 'src/app/services/store.srevice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-stores',
  templateUrl: './admin-stores.component.html',
  styleUrls: ['./admin-stores.component.css']
})
export class AdminStoresComponent {
  stores:IStore[] = [];
  constructor(private _storeService:StoreService , private router:Router){
    _storeService.getAllStores().subscribe({
      next:(response)=>{
        this.stores = response
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  StoreDetails(id:number) {
    this.router.navigateByUrl("/admin/stores/"+id);
  }
  deleteStore(id:number) {
    let route = this.router;
    this._storeService.deleteStore(id).subscribe({
      next:(res)=>{
        route.navigateByUrl("/admin/stores");
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
