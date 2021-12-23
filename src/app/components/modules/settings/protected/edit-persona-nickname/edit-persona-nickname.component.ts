import { Component, OnInit } from '@angular/core';
import { AutherizedPersonaService } from 'src/app/services/auth/auth.service';

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
  gamerId: string = ''

  constructor(
    private authService: AutherizedPersonaService
  ) {
    this.authService.persona$.subscribe((persona: any) => {
      this.nickname = persona.nickname
      this.gamerId = persona.gamer_id
    })
  }

  ngOnInit(): void {
  }

  clickEdit = () => this.editMode = true
  clickCancel = () => this.editMode = false
  clickSave = () => { this.authService.updatePersonaNickname(this.gamerId, this.newNickname); this.editMode = false }
  inputChange = (event: any) => {
    this.newNickname = event.target.value
  }
}
