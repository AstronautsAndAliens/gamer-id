import { Component, OnInit } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { AutherizedPersonaService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent implements OnInit {

  isAuthenticated = of(false)

  constructor(
    public auth: Auth0Service,
    private authService: AutherizedPersonaService
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated
  }

  clickLogin = () => this.authService.loginWithPopup()

  clickLogout = () => this.authService.logout()


}
