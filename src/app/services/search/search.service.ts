import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search = (filters?:any):any => {
    const endpoint = `/.netlify/functions/search-personas`
    const options = {
      params: new HttpParams({ fromString: `?gamer_id=${filters.searchBarValue}` })
    }
    this.http.get<any>(endpoint, options).subscribe(result => {console.log(result)})
  }
}
