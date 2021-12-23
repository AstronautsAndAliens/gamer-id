import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment as env } from '../../../environments/environment'

//service is used to managed the displayed persona on the persona-page

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //the whole object
  persona$: any = new Subject<any>()

  constructor(
    private http: HttpClient,
  ) {
  }

  //used by persona page
  getPersonaByNickname = (nickname: string): Observable<any> => {
    const endpoint = `${env.LAMBDA_API_URL}/get-persona`
    const options = {
      params: new HttpParams({ fromString: `?nickname=${nickname}` })
    }
    return this.http.get<any>(endpoint, options).pipe(map(persona => {
      console.log('persona by nickname:', persona)
      this.persona$.next(persona)
      return persona
    }))
  }

}
