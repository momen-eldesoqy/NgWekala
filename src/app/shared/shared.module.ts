import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { RatingComponent } from './rating/rating.component';
import { TagsComponent } from './tags/tags.component';
import { TabsComponent } from './tabs/tabs.component';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { LastViewedProductsComponent } from './last-viewed-products/last-viewed-products.component';
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { RecentProductsComponent } from './recent-products/recent-products.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { TopRatedProductsComponent } from './top-rated-products/top-rated-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CarouselModule  } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    SliderComponent,
    RatingComponent,
    TagsComponent,
    TabsComponent,
    BestSellingProductsComponent,
    FeaturedProductsComponent,
    LastViewedProductsComponent,
    LatestProductsComponent,
    RecentProductsComponent,
    RelatedProductsComponent,
    TopRatedProductsComponent,
    ProductItemComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports : [
    TagsComponent,
    TabsComponent,
    BestSellingProductsComponent,
    FeaturedProductsComponent,
    LastViewedProductsComponent,
    LatestProductsComponent,
    RecentProductsComponent,
    RelatedProductsComponent,
    TopRatedProductsComponent,
    ProductItemComponent,
    SliderComponent
  ]
})
export class SharedModule { }
