import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { SiteLayoutComponent } from './site-layout.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminProductDetailsComponent } from './admin/admin-product-details/admin-product-details.component';
import { AdminStoresComponent } from './admin/admin-stores/admin-stores.component';
import { AdminStoreDetailsComponent } from './admin/admin-store-details/admin-store-details.component';
import { AdminPromoComponent } from './admin/admin-promo/admin-promo.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminCreateCategoryComponent } from './admin/admin-create-category/admin-create-category.component';
import { AdminEditCategoryComponent } from './admin/admin-edit-category/admin-edit-category.component';
import { AdminCreateProductComponent } from './admin/admin-create-product/admin-create-product.component';
import { AdminEditProductComponent } from './admin/admin-edit-product/admin-edit-product.component';
import { AdminCreateStoreComponent } from './admin/admin-create-store/admin-create-store.component';
import { AdminDeliveryMethodsComponent } from './admin/admin-delivery-methods/admin-delivery-methods.component';
import { AdminCreateDeliveryMethodsComponent } from './admin/admin-create-delivery-methods/admin-create-delivery-methods.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderCompletedComponent } from './pages/order-completed/order-completed.component';
import { LoginGuard } from './guards/login.guard';


const routes : Routes = [
  {
    path : "" ,
    component : SiteLayoutComponent,
    children:[
      {path:"" , redirectTo:"home" , pathMatch:"full"},
      {path:"home" , component:HomeComponent },
      {path:"login",component : LoginComponent },
      {path:"product/:id",component : ProductComponent },
      {path:"register",component : RegisterComponent },
    ]
  },
  {
    path:"admin",
    component:AdminComponent,
    children:[
      {path:"products",component:AdminProductsComponent},
      {path:"products/create",component:AdminCreateProductComponent},
      {path:"products/edit/:id",component:AdminEditProductComponent},
      {path:"products/:id",component:AdminProductDetailsComponent},
      

      {path:"stores",component:AdminStoresComponent},
      {path:"stores/create",component:AdminCreateStoreComponent},
      {path:"stores/:id",component:AdminStoreDetailsComponent},

      {path:"promotions",component:AdminPromoComponent},

      {path:"deliveryMethods",component:AdminDeliveryMethodsComponent},
      {path:"deliveryMethods/create",component:AdminCreateDeliveryMethodsComponent},

      {path:"categories",component:AdminCategoriesComponent},
      {path:"categories/create",component:AdminCreateCategoryComponent},
      {path:"categories/edit/:id",component:AdminEditCategoryComponent},

    ]
    // path:"",
    // redirectTo:"/home",
    // pathMatch:"full"
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
