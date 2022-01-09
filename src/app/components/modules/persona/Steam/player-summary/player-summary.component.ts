import { Component, OnInit } from '@angular/core'
import { map } from 'rxjs/operators'
import { IPersona } from 'src/app/models/persona.model'
import { PersonaService } from 'src/app/services/persona/persona.service'
import { SteamService } from 'src/app/services/steam/steam.service'

@Component({
  selector: 'steam-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.css'],
})
export class PlayerSummaryComponent implements OnInit {
  dataFetched: boolean = false
  dataFound: boolean = true
  steamPersonaName: string = ''
  steamAvatarUrl: string = ''

  constructor(
    private steamService: SteamService,
    private personaService: PersonaService
    ) {}

  ngOnInit(): void {
    this.personaService.persona$.subscribe((persona: IPersona) =>{
      if(persona.steam_id) {
        this.steamService.getSteamPlayerSummary(persona.steam_id).pipe(map(steam_data => {
          console.log(steam_data)
          if(steam_data){
            this.steamPersonaName = steam_data.personaname
            this.steamAvatarUrl = steam_data.avatarfull
          } else {
            this.dataFound = false
          }
          this.dataFetched = true
        })).subscribe()
      }
    })
  }
}
