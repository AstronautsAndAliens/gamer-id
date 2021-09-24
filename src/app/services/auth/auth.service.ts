import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

//AUTHENTICATION BROUGHT TO YOU BY AUTH0
//https://auth0.com/docs/quickstart/spa/angular
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth0: Auth0Service
  ) { }

  loginWithPopup = () => this.auth0.loginWithPopup()

  logout = () => this.auth0.logout({ returnTo: 'http://localhost:4200' })

  isAuthenticated = this.auth0.isAuthenticated$

}
