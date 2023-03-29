import { Component } from '@angular/core';
import { IProduct } from 'src/app/_models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  public products:IProduct[]=[];
  constructor(private _prodService:ProductService , private router:Router){
    _prodService.getAllProducts().subscribe({
      next:(response)=>{
        this.products = response;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  productDetails(id:number) {
    this.router.navigateByUrl("/admin/products/"+id);
  }
  deleteProduct(id:number) {
    let rout = this.router;
    this._prodService.deleteProduct(id).subscribe({
      next(res){
        rout.navigateByUrl("/admin/products");
        
      },
      error(err){
        console.log(err);
      }
    })
  }
}
