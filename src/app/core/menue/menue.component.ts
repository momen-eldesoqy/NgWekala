import { Component } from '@angular/core';
import { IPromo } from 'src/app/_models/Promo';
import { IBrand } from 'src/app/_models/brand';
import { ICategory } from 'src/app/_models/category';
import { IStore } from 'src/app/_models/store';
import { CategoryService } from 'src/app/services/Category.service';
import { PromoService } from 'src/app/services/Promo.service';
import { BrandService } from 'src/app/services/brand.service';
import { StoreService } from 'src/app/services/store.srevice';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent {
    public brands:IBrand[] = [{
      id:0,
      name:"",
      description:""
    }] ;

    public stores:IStore[] = [];
    
    public promotions:IPromo[] = [];

    constructor(
                  private _brands:BrandService , 
                  private _stores:StoreService ,
                  private _promotions:PromoService
                ) {

      _brands.getAllBrands().subscribe({

        next:(res)=>{
          this.brands = res;
          console.log(this.brands);
        },

        error:(err)=>{
          console.log(err)
        }
      }) ;
      _stores.getAllStores().subscribe({
        next:(res)=> {
          this.stores = res;
        },
        error:(err) =>{
          console.log(err);
        }
      }) ;
      _promotions.getAllPromotions().subscribe({
        next:(res)=> {
          this.promotions = res;
        },
        error:(err) =>{
          console.log(err);
        }
      })

    }

}
