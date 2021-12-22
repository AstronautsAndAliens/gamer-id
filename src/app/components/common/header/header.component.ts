import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { AutherizedPersonaService } from 'src/app/services/auth/auth.service';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private navService: NavService, 
    private authUserService: AutherizedPersonaService
  ) { }

  ngOnInit(): void {
  }

  onClickMyPersona(): void {
    this.navService.navigateToPersona(this.authUserService.nickname)
  }
}
