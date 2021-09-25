import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'edit-gamer-persona',
  templateUrl: './edit-gamer-persona.component.html',
  styleUrls: ['./edit-gamer-persona.component.css']
})
export class EditGamerPersonaComponent implements OnInit {

  newNickname: string = ''
  editMode: boolean = false
  setupMessage: string = 'Create a persona to continue account setup!'

  constructor(
    public personaService: PersonaService
  ) {

  }

  ngOnInit(): void {
  }

  clickEdit = () => this.editMode = true
  clickCancel = () => this.editMode = false
  clickSave = () => { this.personaService.updatePersonaNickname(this.newNickname); this.editMode = false }
  inputChange = (event: any) => {
    this.newNickname = event.target.value
  }
}
