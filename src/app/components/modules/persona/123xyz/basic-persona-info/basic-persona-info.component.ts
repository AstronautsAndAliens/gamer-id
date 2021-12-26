import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/models/persona.model';
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
    this.personaService.persona$.subscribe((persona: IPersona) => {
      this.nickname = persona.nickname
    })
  }

  ngOnInit(): void {
  }

}
