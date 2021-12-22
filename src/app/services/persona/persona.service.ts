import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { AutherizedPersonaService } from '../auth/auth.service';

//service is used to managed the displayed persona on the persona-page

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //the whole object
  persona$: any = new Subject<any>()
  //parts of the whole
  nickname$: Observable<string> = of('')

  constructor(
    private http: HttpClient,
    private authUserService: AutherizedPersonaService
  ) {
  }

  //used by persona page
  getPersonaByNickname = (nickname: string): Observable<any> => {
    //if gamerId matches autherized user gamerId, return data from authorized user without making api call
    
    if(nickname === this.authUserService.nickname){
      this.authUserService.persona$.subscribe(authPersona => {
        this.persona$.next(authPersona)
        this.nickname$ = of(authPersona.nickname)
      })
      return this.authUserService.persona$
    }
    const endpoint = `/.netlify/functions/get-persona`
    const options = {
      params: new HttpParams({ fromString: `?nickname=${nickname}` })
    }
    return this.http.get<any>(endpoint, options).pipe(map(persona => {
      console.log('persona by nickname:', persona)
      this.persona$.next(persona)
      this.nickname$ = of(persona.nickname)
      return persona
    }))
  }

}
