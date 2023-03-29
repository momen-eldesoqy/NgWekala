import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  public jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {

    const token = localStorage.getItem("Token");

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else{
      this.router.navigate(["login"]);
      return false;
    }
  }
  
}
