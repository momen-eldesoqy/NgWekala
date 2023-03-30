import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})

export class AdminOrdersComponent implements OnInit {

  Orders:Array<any> = []

  constructor(private _orderService:OrderService){}

  getOrders(){
    this._orderService.GetOrders().subscribe({
      next:(resopnse)=>{
        console.log(resopnse)
        this.Orders = resopnse;
        console.log(this.Orders)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
    this.getOrders();
  }


}
