import { HttpClient } from '@angular/common/http';
import { Component , Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/_models/product';
import { IReview } from 'src/app/_models/review';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  public activeTab = "decription";
  validation = true;
  allowAddingReview = true;
  review:IReview = {pro_Review:"" , Pro_Id:0};
  
  
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

  constructor(private _HttpClient:HttpClient , private ac:ActivatedRoute , private route:Router) {
    this.review.Pro_Id = ac.snapshot.params["id"] ;

  }

  changeTab(content:string) {
    this.activeTab = content;
  }
  addReview() {
    if(this.review.pro_Review) {
      this.validation = true;

      this._HttpClient.post("https://localhost:7179/api/Review",this.review).subscribe({
        next:(res)=>{
          this.allowAddingReview = false;
          this.route.navigateByUrl(`/product/${this.ac.snapshot.params['id']}`)
        },
        error:(err)=>{
          console.log(err)
        }
      })

    }

  }
}
