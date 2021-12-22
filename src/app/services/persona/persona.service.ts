import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //the whole object
  persona$: any = new Subject<any>()
  //parts of the whole
  nickname$: any = new Subject<string>()

  constructor(
    private http: HttpClient
  ) {
   
  }

  getPersona = (gamerId: string): any => {
    //if gamerId matches autherized user gamerId, return data from authorized user without making api call
    const endpoint = `/.netlify/functions/get-persona`
    const options = {
      params: new HttpParams({ fromString: `?gamer_id=${gamerId}` })
    }
    return this.http.get<any>(endpoint, options).pipe(map(persona => {
      this.persona$.next(persona)
      this.nickname$.next(persona.nickname)
      return persona
    }))
  }

  //consumed by template
  updatePersonaNickname = async (gamerId: string, nickname: string) => {
    // this.nickname = nickname
    const endpoint = `/.netlify/functions/update-persona-nickname`
    const options = {
      params: new HttpParams({ fromString: `?gamer_id=${gamerId}&nickname=${nickname}` })
    }
    await this.http.get<any>(endpoint, options)
    await this.getPersona(gamerId)
  }

}
