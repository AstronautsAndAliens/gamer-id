import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchFilters } from 'src/app/models/search.model';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'persona-page',
  templateUrl: './persona-page.component.html',
  styleUrls: ['./persona-page.component.css']
})
export class PersonaPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const filters: ISearchFilters = {
        nickname: params.get('nickname') || ''
      }
      this.personaService.getPersonaByNickname(`${filters.nickname}`).subscribe()
    })
  }

}
