import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/models/persona.model';
import { AutherizedPersonaService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'edit-steam-id',
  templateUrl: './edit-steam-id.component.html',
  styleUrls: ['./edit-steam-id.component.css']
})
export class EditSteamIdComponent implements OnInit {

  newSteamId: string = ''
  editMode: boolean = false
  steamId: string = ''
  gamerId: string = ''

  constructor(private authService: AutherizedPersonaService) {}

  ngOnInit(): void {
    this.authService.persona$.subscribe((persona: IPersona) => {
      console.log('edit-steam-id', persona.steam_id)
      this.steamId = persona.steam_id || ''
      this.gamerId = persona.gamer_id
    })
  }

  clickEdit = () => (this.editMode = true)
  clickCancel = () => (this.editMode = false)
  clickSave = () => {
    this.authService.updateSteamIdByGamerId(this.gamerId, this.newSteamId)
    this.editMode = false
  }
  inputChange = (event: any) => {
    this.newSteamId = event.target.value
  }
}
