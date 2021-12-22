import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persona: any
  gamerId: string = ''
  persona$: any = new Subject<any>()
  nickname: Observable<string> = of('')

  constructor(
    private http: HttpClient,
    private auth0: Auth0Service
  ) {
    this.auth0.idTokenClaims$.subscribe(claims => {
      if (claims && claims['https://gamer_id']) {
        this.gamerId = claims['https://gamer_id']
        this.getPersona(this.gamerId)
      } else {
        console.error('gamer_id not returned from auth0')
      }
    })
  }

  private getPersona = (gamerId: string) => {
    const endpoint = `/.netlify/functions/get-persona`
    const options = {
      params: new HttpParams({ fromString: `?gamer_id=${gamerId}` })
    }
    this.http.get<any>(endpoint, options).subscribe(persona => {
      this.persona = persona
      this.persona$.next(persona)
      this.nickname = of(persona.nickname)
    })
  }

  //consumed by template
  updatePersonaNickname = async (nickname: string) => {
    // this.nickname = nickname
    const endpoint = `/.netlify/functions/update-persona-nickname`
    const options = {
      params: new HttpParams({ fromString: `?gamer_id=${this.gamerId}&nickname=${nickname}` })
    }
    await this.http.get<any>(endpoint, options)
    await this.getPersona(this.gamerId)
  }
}
