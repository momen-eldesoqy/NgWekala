import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Total:any;
  
  GetTotal(total:any){
    console.log(total);
    this.Total = total;
  }

  ngOnInit(): void {
    
  }
}
