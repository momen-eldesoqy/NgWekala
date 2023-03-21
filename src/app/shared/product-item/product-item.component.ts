import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() id:number = 1;
  productImgs:Array<any> = [];
  product:any;

  constructor(private _service:ProductService) { }

  getProduct(){
    this._service.getProductById(this.id).subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
        this.product = resopnse;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  productImages(){
    this._service.getProductImages(this.id).subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
        this.productImgs = resopnse;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
    this.getProduct();
    this.productImages();
  }
}
