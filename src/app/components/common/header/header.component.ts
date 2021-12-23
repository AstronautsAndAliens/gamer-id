import { Component, OnInit } from '@angular/core';
import { AutherizedPersonaService } from 'src/app/services/auth/auth.service';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nickname: string = ''

  constructor(
    private navService: NavService,
    private authService: AutherizedPersonaService
  ) {
    this.authService.persona$.subscribe((persona: any) => {
      this.nickname = persona.nickname
    })
  }

  ngOnInit(): void {
  }

  onClickMyPersona(): void {
    this.navService.navigateToPersona(this.nickname)
  }
}
