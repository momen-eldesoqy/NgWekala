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

      const decodedToken = this.jwtHelper.decodeToken(token);
      const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      var allowedRoles = route.data['allowedRoles'];
      console.log(allowedRoles)
      console.log(role);
      if(allowedRoles){
        if(allowedRoles[0] == role){
          return true;
        }
        else{
          this.router.navigate(["home"]);
          return false;
        }
      }else{
        return true;
      }
    }
    else{
      this.router.navigate(["login"]);
      return false;
    }
  }
  
}
