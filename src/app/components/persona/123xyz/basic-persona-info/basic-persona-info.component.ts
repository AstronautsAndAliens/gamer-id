import { Component, OnInit } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Component({
  selector: 'basic-persona-info',
  templateUrl: './basic-persona-info.component.html',
  styleUrls: ['./basic-persona-info.component.css']
})
export class BasicPersonaInfoComponent implements OnInit {

  constructor(
    public auth: Auth0Service
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => { console.log(user)})
  }

}
