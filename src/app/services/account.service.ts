import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _HttpClient:HttpClient) { }

  login(login:ILogin):Observable<any>{
    return this._HttpClient.post(`https://localhost:7179/api/Account/login`,login)
  }
}
