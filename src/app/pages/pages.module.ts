import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { TotalsComponent } from './cart/totals/totals.component';
import { CartProductsComponent } from './cart/cart-products/cart-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './checkout/order/order.component';
import { BillingDetailsComponent } from './checkout/billing-details/billing-details.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { SuccessMsgComponent } from './order-completed/success-msg/success-msg.component';
import { OrderDataComponent } from './order-completed/order-data/order-data.component';
import { OrderBillComponent } from './order-completed/order-bill/order-bill.component';
import { BillingAddressComponent } from './order-completed/billing-address/billing-address.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { BrandComponent } from './brand/brand.component';
import { StoreComponent } from './store/store.component';
import { NotfoundComponent } from './notfound/notfound.component';





@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductComponent,
    CartComponent,
    TotalsComponent,
    CartProductsComponent,
    CheckoutComponent,
    OrderComponent,
    BillingDetailsComponent,
    OrderCompletedComponent,
    SuccessMsgComponent,
    OrderDataComponent,
    OrderBillComponent,
    BillingAddressComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CategoryComponent,
    BrandComponent,
    StoreComponent,
    NotfoundComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule ,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports : [
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    OrderCompletedComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductDetailsComponent,
    OrderBillComponent
  ]
})
export class PagesModule { }
