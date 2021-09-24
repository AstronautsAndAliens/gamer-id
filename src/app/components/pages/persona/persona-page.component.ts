import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'persona-page',
  templateUrl: './persona-page.component.html',
  styleUrls: ['./persona-page.component.css']
})
export class PersonaPageComponent implements OnInit {

  personaId: string = ''

  constructor(
    private route: ActivatedRoute
    ) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.personaId = params['personaId']
    })
  }

}
