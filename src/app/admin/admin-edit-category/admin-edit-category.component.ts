import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/_models/category';
import { CategoryService } from 'src/app/services/Category.service';

@Component({
  selector: 'app-admin-edit-category',
  templateUrl: './admin-edit-category.component.html',
  styleUrls: ['./admin-edit-category.component.css']
})
export class AdminEditCategoryComponent implements OnInit {

  cat:ICategory = {description:"" , name : "" , id:0 , products:[]};

  constructor( private _HttpClient:HttpClient ,
               private router:Router ,
               private _cat:CategoryService ,
               private ac:ActivatedRoute )
  {
    // _cat.getCategoryById(ac.snapshot.params["id"]).subscribe({
    //   next:(res)=>{
    //     this.cat = res;
    //     console.log(res);
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //   }
    // })  

    // console.log(this.cat)
  }

  ngOnInit() {
    this._cat.getCategoryById(this.ac.snapshot.params["id"]).subscribe({
      next:(res)=>{
        this.cat = res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })  
  }

  registerData = new FormGroup({
    id:new FormControl(this.ac.snapshot.params["id"]),

    name:new FormControl("this.cat.name",[
      Validators.required,

    ]),

    description:new FormControl(this.cat.description,[
      Validators.required
      
    ]),

  })

  update() {
    if(this.registerData.valid) {
      console.log(this.registerData.value);
      this._HttpClient.put(`https://localhost:7179/api/Category/${this.registerData.controls.id.value}`,this.registerData.value).subscribe({
        next:(resopnse)=>{
          this.router.navigateByUrl("admin/categories");
          console.log(resopnse);
        },
        error:(error)=>{
          console.log(error)
        }
      });
      
    }else {
      console.log("else")
    }
  }

}
