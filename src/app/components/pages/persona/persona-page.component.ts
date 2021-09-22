import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'persona-page',
  templateUrl: './persona-page.component.html',
  styleUrls: ['./persona-page.component.css']
})
export class PersonaPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
    ) {}
  
  personaId: any = ''
  
  ngOnInit(): void {
    this.personaId = this.route.snapshot.paramMap.get('personaId');
  }

}
