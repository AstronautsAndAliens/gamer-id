import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persona: any
  gamerId: string = ''
  persona$: any = new Subject<any>()
  nickname: any

  constructor(
    private http: HttpClient,
    private auth0: Auth0Service
  ) {
    this.auth0.idTokenClaims$.subscribe(claims => {
      if (claims && claims['https://gamer_id']) {
        this.gamerId = claims['https://gamer_id']
        this.getPersona()
      } else {
        console.error('gamer_id not returned from auth0')
      }
    })
  }

  getPersona = () => {
    const endpoint = `/.netlify/functions/get-persona`
    const options = {
      params: new HttpParams({ fromString: `?gamer_id=${this.gamerId}` })
    }
    this.http.get<any>(endpoint, options).subscribe(persona => {
      console.log(persona)
      this.persona = persona
      console.log(persona.nickname)
      this.persona$.next(persona)
      this.nickname = of(persona.nickname)
    })
  }

  updatePersonaNickname = async (nickname: string) => {
    console.log(nickname)
    // this.nickname = nickname
    const endpoint = `/.netlify/functions/update-persona-nickname`
    const options = {
      params: new HttpParams({ fromString: `?gamer_id=${this.gamerId}&nickname=${nickname}` })
    }
    await this.http.get<any>(endpoint, options).subscribe(r => console.log(r))
    await this.getPersona()
  }
}
