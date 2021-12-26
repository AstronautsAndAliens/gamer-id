import { Component, OnInit } from '@angular/core';
import { AutherizedPersonaService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  constructor(private authService: AutherizedPersonaService) { }

  ngOnInit(): void {
    this.authService.getPersonaByGamerId(this.authService.gamerId).subscribe()
  }

}
