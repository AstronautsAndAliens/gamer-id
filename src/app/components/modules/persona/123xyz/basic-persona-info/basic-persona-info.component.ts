import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'basic-persona-info',
  templateUrl: './basic-persona-info.component.html',
  styleUrls: ['./basic-persona-info.component.css']
})
export class BasicPersonaInfoComponent implements OnInit {

  nickname: string = ''

  constructor(
    private personaService: PersonaService
  ) {
    this.personaService.persona$.subscribe((persona: any) => {
      this.nickname = persona.nickname
    })
  }

  ngOnInit(): void {
  }

}
