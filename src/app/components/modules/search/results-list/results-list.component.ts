import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav/nav.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  personas: any[] = []

  constructor(
    private searchService: SearchService,
    private navService: NavService
  ) { }

  ngOnInit(): void {
    this.searchService.search().subscribe((results: any[]) => this.personas = results)
  }

  onClickNickname(nickname: string){
    this.navService.navigateToPersona(nickname)
  }

  

}
