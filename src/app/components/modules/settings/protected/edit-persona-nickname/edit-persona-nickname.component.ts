import { Component, OnInit } from '@angular/core';
import { AutherizedPersonaService } from 'src/app/services/auth/auth.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'edit-persona-nickname',
  templateUrl: './edit-persona-nickname.component.html',
  styleUrls: ['./edit-persona-nickname.component.css']
})
export class EditPersonaNicknameComponent implements OnInit {

  newNickname: string = ''
  editMode: boolean = false
  setupMessage: string = 'Create a persona to continue account setup!'

  constructor(
    public personaService: PersonaService,
    private authService: AutherizedPersonaService
  ) {

  }

  ngOnInit(): void {
  }

  clickEdit = () => this.editMode = true
  clickCancel = () => this.editMode = false
  clickSave = () => { this.personaService.updatePersonaNickname(this.authService.gamerId, this.newNickname); this.editMode = false }
  inputChange = (event: any) => {
    this.newNickname = event.target.value
  }
}
