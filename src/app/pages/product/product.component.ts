import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private _service:ProductService){}

  allProducts(){
    this._service.getAllProducts().subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
      }
    })
  }
}
