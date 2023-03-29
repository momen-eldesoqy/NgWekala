import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-category',
  templateUrl: './admin-create-category.component.html',
  styleUrls: ['./admin-create-category.component.css']
})
export class AdminCreateCategoryComponent {

constructor(private _HttpClient:HttpClient , private router:Router){}

  registerData = new FormGroup({

    name:new FormControl(null,[
      Validators.required
    ]),

    description:new FormControl(null,[
      Validators.required
      
    ]),

  })

  add() {
    if(this.registerData.valid) {
      console.log(this.registerData.value);
      this._HttpClient.post("https://localhost:7179/api/Category",this.registerData.value).subscribe({
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
