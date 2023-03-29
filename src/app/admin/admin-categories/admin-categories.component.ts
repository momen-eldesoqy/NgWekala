import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/_models/category';
import { CategoryService } from 'src/app/services/Category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent {
  
  categories:ICategory[] =[];
  
  constructor(private _categoriesService:CategoryService , private router:Router , private ac:ActivatedRoute) {
    _categoriesService.getAllCategories().subscribe({
      next:(res)=>{
        this.categories = res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  

  delete(id:number) {
    this._categoriesService.deleteProduct(id).subscribe({
      next:(res)=>{
        this.router.navigateByUrl("/admin/categories");
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
