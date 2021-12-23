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
  nickname: string = ''

  constructor(
    private personaService: PersonaService,
    private authService: AutherizedPersonaService
  ) {
    this.personaService.persona$.subscribe((persona: any) => {
      this.nickname = persona.nickname
    })
  }

  ngOnInit(): void {
  }

  clickEdit = () => this.editMode = true
  clickCancel = () => this.editMode = false
  clickSave = () => { this.authService.updatePersonaNickname(this.authService.gamerId, this.newNickname); this.editMode = false }
  inputChange = (event: any) => {
    this.newNickname = event.target.value
  }
}
