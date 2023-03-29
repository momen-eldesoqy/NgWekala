import { Component } from '@angular/core';
import { ICategory } from 'src/app/_models/category';
import { CategoryService } from 'src/app/services/Category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  categories:ICategory[] = [];

  constructor(private _categories:CategoryService){
    _categories.getAllCategories().subscribe({
      next:(res)=>{
        this.categories = res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
