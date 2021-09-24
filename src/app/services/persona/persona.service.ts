import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService as Auth0Service  } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService implements OnInit {

  persona$: any
  gamerId: string = ''
  gamer:any

  constructor(
    private http: HttpClient,
    private auth0: Auth0Service
  ) { 
    this.persona$ = this.auth0.user$
    this.auth0.idTokenClaims$.subscribe(claims => {
      if(claims && claims['https://gamer_id']) {
        this.gamerId = claims['https://gamer_id']
      } else {
        console.error('gamer_id not returned from auth0')
      }
    } )
    this.gamer = this.getGamerPersona().subscribe(persona => {
      console.log(persona)
    })
  }

  ngOnInit(){
    //make request to db to get
    
  }

  getGamerPersona = (): Observable<any> => {
    console.log(this.gamerId)
    const endpoint = '.netlify/functions/get-persona'
    const options = {
      params: new HttpParams({fromObject: { gamer_id: this.gamerId }})
    }
    return this.http.get<any>(endpoint)
  }
}
