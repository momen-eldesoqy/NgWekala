import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user:User = new User();

  constructor(private _HttpClient:HttpClient, private _Router:Router){
  }

  registerData = new FormGroup({

      firstName:new FormControl(null,[
        Validators.pattern(/^[A-Z]/),
        Validators.required
      ]),

      lastName:new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[A-Z]/)
      ]),

      email:new FormControl(null,[
        Validators.required,
        Validators.email
      ]),

      phoneNumber: new FormControl(null , [
        Validators.required,
        Validators.minLength(11),
        Validators.pattern(/[0-9]/),
      ]),

      street:new FormControl(null,[
        Validators.required
      ]),

      city:new FormControl(null,[
        Validators.required,
      ]),

      country: new FormControl(null,[
        Validators.required
      ]),

      userType: new FormControl(null,[
        Validators.required
      ]),

      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(8)
      ]),
    } ) 

  registerValue() {
    if(this.registerData.valid) {
      console.log(this.registerData.value);
      this._HttpClient.post("https://localhost:7179/api/Account/register",this.registerData.value).subscribe({
        next:(resopnse)=>{
          console.log(resopnse)
          this._Router.navigate(['login']);
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
