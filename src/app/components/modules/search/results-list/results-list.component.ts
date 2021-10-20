import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  personas: any[] = []

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.search()
  }

}
