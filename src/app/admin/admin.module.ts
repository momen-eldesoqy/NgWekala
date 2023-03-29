import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductDetailsComponent } from './admin-product-details/admin-product-details.component';
import { PagesModule } from '../pages/pages.module';
import { AdminStoresComponent } from './admin-stores/admin-stores.component';
import { AdminStoreDetailsComponent } from './admin-store-details/admin-store-details.component';
import { AdminPromoComponent } from './admin-promo/admin-promo.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminCreateCategoryComponent } from './admin-create-category/admin-create-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminEditCategoryComponent } from './admin-edit-category/admin-edit-category.component';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { AdminCreateStoreComponent } from './admin-create-store/admin-create-store.component';
import { AdminDeliveryMethodsComponent } from './admin-delivery-methods/admin-delivery-methods.component';
import { AdminCreateDeliveryMethodsComponent } from './admin-create-delivery-methods/admin-create-delivery-methods.component';
import { AdminDeliveryMethodsDetailsComponent } from './admin-delivery-methods-details/admin-delivery-methods-details.component';




@NgModule({
  declarations: [
    AdminSidebarComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminProductsComponent,
    AdminProductDetailsComponent,
    AdminStoresComponent,
    AdminStoreDetailsComponent,
    AdminPromoComponent,
    AdminCategoriesComponent,
    AdminCreateCategoryComponent,
    AdminEditCategoryComponent,
    AdminCreateProductComponent,
    AdminEditProductComponent,
    AdminCreateStoreComponent,
    AdminDeliveryMethodsComponent,
    AdminCreateDeliveryMethodsComponent,
    AdminDeliveryMethodsDetailsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ],
})
export class AdminModule { }
