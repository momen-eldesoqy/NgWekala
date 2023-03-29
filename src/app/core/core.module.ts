import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoComponent } from './promo/promo.component';
import { MenueComponent } from './menue/menue.component';
import { HeaderComponent } from './header/header.component';
import { HeadtopComponent } from './headtop/headtop.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PromoComponent,
    MenueComponent,
    HeaderComponent,
    HeadtopComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports : [
    PromoComponent,
    HeaderComponent,
    MenueComponent,
    HeadtopComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    SidebarComponent,
    
  ]
})
export class CoreModule { }
