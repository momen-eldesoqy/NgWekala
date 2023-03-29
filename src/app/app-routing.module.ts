import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderCompletedComponent } from './pages/order-completed/order-completed.component';
import { LoginGuard } from './guards/login.guard';


const routes : Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path : "home" ,
    component : HomeComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path: "product",
    component : ProductComponent
  },
  {
    path: "cart",
    component : CartComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate:[LoginGuard]
  },
  {
    path: "order",
    component: OrderCompletedComponent,
    canActivate:[LoginGuard]
  },
  {
    path: "login",
    component: LoginComponent
  }
]








@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
