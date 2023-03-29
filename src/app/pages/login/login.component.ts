import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { ILogin } from 'src/app/_models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AccountService:AccountService, private _Router:Router){}

  loginData = new FormGroup({
    email:new FormControl(null , [
      Validators.required,
      Validators.email
    ]),
    password:new FormControl(null , [
      Validators.required
    ]),
  })

  loginValue(){

    const loginValue:ILogin={
      email:this.loginData.controls.email.value!,
      password:this.loginData.controls.password.value!
    }

    if(this.loginData.valid){
      this._AccountService.login(loginValue).subscribe({
        next:(response)=>{
          localStorage.setItem('Token' , response.token);
          this._Router.navigate(['/cart']);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }
}
