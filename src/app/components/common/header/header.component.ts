import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav/nav.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private navService: NavService, 
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
  }

  onClickMyPersona(){
    this.personaService.nickname$.subscribe((nickname: string) => this.navService.navigateToPersona(nickname))
  }
}
