import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthService as Auth0Service } from '@auth0/auth0-angular'
import { Subject } from 'rxjs'
import { environment as env } from '../../../environments/environment'
//This service is for managing authentication and currently logged in persona

//AUTHENTICATION BROUGHT TO YOU BY AUTH0
//https://auth0.com/docs/quickstart/spa/angular
@Injectable({
  providedIn: 'root',
})
export class AutherizedPersonaService {
  gamerId: string = ''
  nickname: string = ''
  persona$ = new Subject<any>()

  constructor(private auth0: Auth0Service, private http: HttpClient) {
    this.auth0.idTokenClaims$.subscribe(claims => {
      if (claims && claims[env.AUTH0_GAMERID_CLAIM]) {
        this.gamerId = claims[env.AUTH0_GAMERID_CLAIM]
        this.getPersonaByGamerId(this.gamerId).subscribe((persona: any) => {
          console.log('logged in persona:', persona)
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

  //only used by auth service
  getPersonaByGamerId = (gamerId: string): any => {
    const endpoint = `${env.LAMBDA_API_URL}/get-persona`
    const options = {
      params: new HttpParams({ fromString: `?gamer_id=${gamerId}` }),
    }
    return this.http.get<any>(endpoint, options)
  }

  //consumed by template
  updatePersonaNickname = async (gamerId: string, nickname: string) => {
    // this.nickname = nickname
    const endpoint = `${env.LAMBDA_API_URL}/update-persona-nickname`
    const options = {
      params: new HttpParams({
        fromString: `?gamer_id=${gamerId}&nickname=${nickname}`,
      }),
    }
    await this.http.get<any>(endpoint, options)
    await this.getPersonaByGamerId(gamerId)
  }
}
