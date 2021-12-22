import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { Subject } from 'rxjs';
import { PersonaService } from '../persona/persona.service';

//This service is for managing authentication and the currently logged in user

//AUTHENTICATION BROUGHT TO YOU BY AUTH0
//https://auth0.com/docs/quickstart/spa/angular
@Injectable({
  providedIn: 'root'
})
export class AutherizedPersonaService { 

  gamerId: string = ''
  nickname: string = ''
  persona$ = new Subject<any>()

  constructor(
    private auth0: Auth0Service,
    private personaService: PersonaService
  ) {
    this.auth0.idTokenClaims$.subscribe(claims => {
      if (claims && claims['https://gamer_id']) {
        this.gamerId = claims['https://gamer_id']
        this.personaService.getPersona(this.gamerId).subscribe((persona:any) => {
          this.gamerId = persona.gamer_id
          this.nickname = persona.nickname
          this.persona$.next(persona)
          
        })
      } else {
        console.error('gamer_id not returned from auth0')
      }
    })
  }

  loginWithPopup = () => this.auth0.loginWithPopup()

  logout = () => this.auth0.logout({ returnTo: 'http://localhost:4200' })

  isAuthenticated = this.auth0.isAuthenticated$

}
