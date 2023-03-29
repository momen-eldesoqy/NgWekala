import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() id:number = 1;
  @Output() productImg = new EventEmitter<any>();
  
  productImgs:Array<any> = [];
  product:any;
  cartIds:Array<number> = [];

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

  addToCart(){
    this.productImg.emit(this.productImgs[0].pro_Img);
  }

  ngOnInit(): void {
    this.getProduct();
    this.productImages();
  }
}
