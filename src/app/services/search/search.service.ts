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
    const options: any = {}
    if(filters?.nickname) { 
      options.params = new HttpParams({ fromString: `?nickname=${filters.nickname}` })
    }
    return this.http.get<any>(endpoint, options)
  }
}
