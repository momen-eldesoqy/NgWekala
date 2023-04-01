import { Component, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/_models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product:IProduct = {brand_Id : 0 ,
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



  ngOnInit(): void {
    
  }
}
