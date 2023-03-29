import { Component } from '@angular/core';
import { IPromo } from 'src/app/_models/Promo';
import { PromoService } from 'src/app/services/Promo.service';

@Component({
  selector: 'app-admin-promo',
  templateUrl: './admin-promo.component.html',
  styleUrls: ['./admin-promo.component.css']
})
export class AdminPromoComponent {
  promotions:IPromo[] =[];
  constructor(private _promoService:PromoService){
    _promoService.getAllPromotions().subscribe({
      next:(res)=>{
        this.promotions = res;
      }
    })
  }
}
