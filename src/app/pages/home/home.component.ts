import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // variables
  Products:Array<any> = [];
  

  constructor(private _service:ProductService){}
  

  allProducts(){
    this._service.getAllProducts().subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
        this.Products = resopnse;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
    this.allProducts();
  }

}
