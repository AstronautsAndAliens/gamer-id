import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthService as Auth0Service } from '@auth0/auth0-angular'
import { Subject } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment as env } from '../../../environments/environment'
//This service is for managing authentication and currently logged in persona

//AUTHENTICATION BROUGHT TO YOU BY AUTH0
//https://auth0.com/docs/quickstart/spa/angular
@Injectable({
  providedIn: 'root',
})
export class AutherizedPersonaService {
  persona$ = new Subject<any>()
  gamerId: string = ''

  constructor(private auth0: Auth0Service, private http: HttpClient) {
    this.auth0.idTokenClaims$.subscribe(claims => {
      if (claims && claims[env.AUTH0_GAMERID_CLAIM]) {
        const gamerId = claims[env.AUTH0_GAMERID_CLAIM]
        this.getPersonaByGamerId(gamerId).subscribe()
      } else {
        console.error('gamer_id not returned from auth0')
      }
    })
  }

  loginWithPopup = () => this.auth0.loginWithPopup()

  logout = () => {this.auth0.logout({ returnTo: 'http://localhost:4200' }); this.gamerId = ''}

  isAuthenticated = this.auth0.isAuthenticated$

  //only used by auth service
  getPersonaByGamerId = (gamerId: string): any => {
    const endpoint = `${env.LAMBDA_API_URL}/get-persona`
    const options = {
      params: new HttpParams({ fromString: `?gamer_id=${gamerId}` }),
    }
    return this.http.get<any>(endpoint, options).pipe(map((persona: any) => {
      console.log('get user by gamerid')
      this.persona$.next(persona)
      this.gamerId = persona.gamer_id
      return persona
    }))
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
    await this.http.get<any>(endpoint, options).subscribe()
    await this.getPersonaByGamerId(gamerId)
  }
}
