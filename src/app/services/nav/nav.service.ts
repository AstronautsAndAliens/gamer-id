import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(
    private router: Router
  ) { }

  navigateToPersona(nickname: string){
    this.router.navigate([`/persona/${nickname}`])
  }
}
