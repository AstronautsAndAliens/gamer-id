import { Component, OnChanges, OnInit } from '@angular/core'
import { IPersona } from 'src/app/models/persona.model'
import { AutherizedPersonaService } from 'src/app/services/auth/auth.service'

@Component({
  selector: 'edit-persona-nickname',
  templateUrl: './edit-persona-nickname.component.html',
  styleUrls: ['./edit-persona-nickname.component.css'],
})
export class EditPersonaNicknameComponent implements OnInit {
  newNickname: string = ''
  editMode: boolean = false
  setupMessage: string = 'Create a persona to continue account setup!'

  nickname: string = ''
  gamerId: string = ''

  constructor(private authService: AutherizedPersonaService) {}

  ngOnInit(): void {
    this.authService.persona$.subscribe((persona: IPersona) => {
      console.log('edit component', persona.nickname)
      this.nickname = persona.nickname
      this.gamerId = persona.gamer_id
    })
  }

  clickEdit = () => (this.editMode = true)
  clickCancel = () => (this.editMode = false)
  clickSave = () => {
    this.authService.updatePersonaNickname(this.gamerId, this.newNickname)
    this.editMode = false
  }
  inputChange = (event: any) => {
    this.newNickname = event.target.value
  }
}
